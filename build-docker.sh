#!/bin/bash

# Docker build script for Spectrity Landing Frontend

# Set variables
IMAGE_NAME="spectrity-landing-frontend"
DOCKER_HUB_USERNAME="satishkvk"
VERSION="1.0.0" # Update this version number for each release

# Full image name with version
FULL_IMAGE_NAME="${DOCKER_HUB_USERNAME}/${IMAGE_NAME}"

echo "🚀 Building Spectrity Landing Frontend Docker Image..."
echo "Version: ${VERSION}"
echo "Image: ${FULL_IMAGE_NAME}:${VERSION}"

# Build the Docker image
echo "📦 Building Docker image..."
docker build -t ${FULL_IMAGE_NAME}:${VERSION} -t ${FULL_IMAGE_NAME}:latest .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"
    echo ""
    echo "📤 To push to Docker Hub, run:"
    echo "   docker push ${FULL_IMAGE_NAME}:${VERSION}"
    echo "   docker push ${FULL_IMAGE_NAME}:latest"
    echo ""
    echo "📥 To pull from VM, run:"
    echo "   docker pull ${FULL_IMAGE_NAME}:${VERSION}"
    echo ""
    echo "🏃 To run the container locally:"
    echo "   docker run -p 3000:3000 --env-file .env.local ${FULL_IMAGE_NAME}:${VERSION}"
else
    echo "❌ Docker build failed!"
    exit 1
fi