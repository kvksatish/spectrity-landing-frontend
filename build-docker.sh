#!/bin/bash

# Docker build script for Spectrity Landing Frontend with auto-versioning

# Set variables
IMAGE_NAME="spectrity-landing-frontend"
DOCKER_HUB_USERNAME="satishkvk"
PUSH_TO_HUB="${1:-true}" # First argument: true/false to push, default true
VERSION_FILE="version.txt"

# Full image name
FULL_IMAGE_NAME="${DOCKER_HUB_USERNAME}/${IMAGE_NAME}"

# Auto-increment version
if [ -f "$VERSION_FILE" ]; then
    CURRENT_VERSION=$(cat "$VERSION_FILE")
    echo "📋 Current version: $CURRENT_VERSION"
else
    CURRENT_VERSION="1.0.0"
    echo "📋 Starting with version: $CURRENT_VERSION"
fi

# Parse version (x.y.z)
IFS='.' read -r -a version_parts <<< "$CURRENT_VERSION"
major=${version_parts[0]}
minor=${version_parts[1]}
patch=${version_parts[2]}

# Increment patch version
patch=$((patch + 1))
NEW_VERSION="$major.$minor.$patch"

echo "🚀 Building Spectrity Landing Frontend Docker Image..."
echo "🆕 New version: $NEW_VERSION"
echo "🐳 Image: ${FULL_IMAGE_NAME}:${NEW_VERSION}"

# Clean up old images to avoid duplicates
echo "🧹 Cleaning up old images..."
docker rmi ${FULL_IMAGE_NAME}:latest 2>/dev/null || true
docker rmi ${FULL_IMAGE_NAME}:${CURRENT_VERSION} 2>/dev/null || true
docker rmi ${FULL_IMAGE_NAME}:${NEW_VERSION} 2>/dev/null || true

# Build the Docker image with new version and latest tags
echo "📦 Building Docker image..."
docker build -t ${FULL_IMAGE_NAME}:${NEW_VERSION} -t ${FULL_IMAGE_NAME}:latest .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"
    
    # Save new version to file
    echo "$NEW_VERSION" > "$VERSION_FILE"
    echo "💾 Version saved to $VERSION_FILE"
    
    # Auto-commit and push version change
    echo "📝 Committing version change to git..."
    git add "$VERSION_FILE"
    git commit -m "Bump Docker version to $NEW_VERSION

🐳 Auto-generated version bump
- Built: ${FULL_IMAGE_NAME}:${NEW_VERSION}
- Built: ${FULL_IMAGE_NAME}:latest

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
    
    if [ $? -eq 0 ]; then
        echo "✅ Version committed to git"
        
        echo "🚀 Pushing version change to repository..."
        git push
        
        if [ $? -eq 0 ]; then
            echo "✅ Version change pushed to repository"
        else
            echo "⚠️  Warning: Failed to push to repository (but Docker build continues)"
        fi
    else
        echo "⚠️  Warning: Failed to commit version change (but Docker build continues)"
    fi
    
    if [ "$PUSH_TO_HUB" = "true" ]; then
        echo ""
        echo "📤 Pushing to Docker Hub..."
        
        # Push versioned image
        echo "🚀 Pushing ${FULL_IMAGE_NAME}:${NEW_VERSION}..."
        docker push ${FULL_IMAGE_NAME}:${NEW_VERSION}
        
        if [ $? -eq 0 ]; then
            echo "✅ Versioned image pushed successfully!"
            
            # Push latest tag
            echo "🚀 Pushing ${FULL_IMAGE_NAME}:latest..."
            docker push ${FULL_IMAGE_NAME}:latest
            
            if [ $? -eq 0 ]; then
                echo "✅ Latest image pushed successfully!"
                echo ""
                echo "🌐 Images available at:"
                echo "   https://hub.docker.com/r/${DOCKER_HUB_USERNAME}/${IMAGE_NAME}"
                echo ""
                echo "📥 To pull from anywhere:"
                echo "   docker pull ${FULL_IMAGE_NAME}:${NEW_VERSION}"
                echo "   docker pull ${FULL_IMAGE_NAME}:latest"
            else
                echo "❌ Failed to push latest tag!"
                exit 1
            fi
        else
            echo "❌ Failed to push versioned image!"
            exit 1
        fi
    else
        echo ""
        echo "📦 Images built locally (not pushed):"
        echo "   ${FULL_IMAGE_NAME}:${NEW_VERSION}"
        echo "   ${FULL_IMAGE_NAME}:latest"
        echo ""
        echo "📤 To push manually:"
        echo "   docker push ${FULL_IMAGE_NAME}:${NEW_VERSION}"
        echo "   docker push ${FULL_IMAGE_NAME}:latest"
    fi
    
    echo ""
    echo "🏃 To run the container:"
    echo "   docker run -p 3000:3000 --env-file .env.local ${FULL_IMAGE_NAME}:${NEW_VERSION}"
    echo "   # OR"
    echo "   docker run -p 3000:3000 --env-file .env.local ${FULL_IMAGE_NAME}:latest"
else
    echo "❌ Docker build failed!"
    exit 1
fi