#!/bin/bash

# Docker Hub operations for Spectrity Landing Frontend

# Check if Docker username is provided
if [ -z "$1" ]; then
    echo "❌ Usage: ./docker-hub.sh <docker-username> [tag] [action]"
    echo "Examples:"
    echo "  ./docker-hub.sh myusername                    # Build and push with 'latest' tag"
    echo "  ./docker-hub.sh myusername v1.0.0             # Build and push with 'v1.0.0' tag"
    echo "  ./docker-hub.sh myusername latest push-only   # Only push existing image"
    exit 1
fi

DOCKER_USERNAME="$1"
TAG="${2:-latest}"
ACTION="${3:-build-and-push}"
IMAGE_NAME="spectrity-landing-frontend"
FULL_IMAGE_NAME="$DOCKER_USERNAME/$IMAGE_NAME:$TAG"

echo "🐳 Docker Hub Operations for Spectrity"
echo "Username: $DOCKER_USERNAME"
echo "Image: $FULL_IMAGE_NAME"
echo "Action: $ACTION"
echo ""

# Clean up function to avoid duplicate images
cleanup_images() {
    echo "🧹 Cleaning up duplicate images..."
    docker rmi "$IMAGE_NAME:$TAG" 2>/dev/null || true
    docker images | grep "<none>" | awk '{print $3}' | xargs docker rmi 2>/dev/null || true
}

case $ACTION in
    "build-and-push")
        echo "🔨 Building Docker image..."
        
        # Clean existing images first
        docker rmi "$FULL_IMAGE_NAME" 2>/dev/null || true
        cleanup_images
        
        # Build with Docker Hub tag directly
        docker build -t "$FULL_IMAGE_NAME" .
        
        if [ $? -eq 0 ]; then
            echo "✅ Build successful!"
            echo "🚀 Pushing to Docker Hub..."
            
            docker push "$FULL_IMAGE_NAME"
            
            if [ $? -eq 0 ]; then
                echo "✅ Successfully pushed to Docker Hub!"
                echo "🌐 Image available at: https://hub.docker.com/r/$DOCKER_USERNAME/$IMAGE_NAME"
                cleanup_images
            else
                echo "❌ Failed to push to Docker Hub!"
                exit 1
            fi
        else
            echo "❌ Build failed!"
            exit 1
        fi
        ;;
        
    "push-only")
        echo "🚀 Pushing existing image to Docker Hub..."
        
        # Check if image exists locally
        if ! docker image inspect "$FULL_IMAGE_NAME" > /dev/null 2>&1; then
            echo "❌ Image $FULL_IMAGE_NAME not found locally!"
            echo "Build it first or use 'build-and-push' action"
            exit 1
        fi
        
        docker push "$FULL_IMAGE_NAME"
        
        if [ $? -eq 0 ]; then
            echo "✅ Successfully pushed to Docker Hub!"
            echo "🌐 Image available at: https://hub.docker.com/r/$DOCKER_USERNAME/$IMAGE_NAME"
        else
            echo "❌ Failed to push to Docker Hub!"
            exit 1
        fi
        ;;
        
    "build-only")
        echo "🔨 Building Docker image locally..."
        
        cleanup_images
        docker build -t "$FULL_IMAGE_NAME" .
        
        if [ $? -eq 0 ]; then
            echo "✅ Build successful!"
            echo "📦 Local image: $FULL_IMAGE_NAME"
        else
            echo "❌ Build failed!"
            exit 1
        fi
        ;;
        
    *)
        echo "❌ Unknown action: $ACTION"
        echo "Valid actions: build-and-push, push-only, build-only"
        exit 1
        ;;
esac

echo ""
echo "🚀 To run the container:"
echo "docker run -p 3000:3000 $FULL_IMAGE_NAME"