#!/bin/bash

# R2 Build Storage Script for Spectrity Landing Frontend

# Configuration  
R2_BUCKET="spectrity"
R2_ENDPOINT="https://132e8c99c8b82c75e31ee2c50721887e.r2.cloudflarestorage.com"
BASE_URL="https://assets.spectrity.bio"  # R2 storage URL for assets
BUILD_DIR="out"
WEBSITE_DIR=""  # Store builds in root of R2 bucket
CLOUDFLARE_ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-132e8c99c8b82c75e31ee2c50721887e}"
R2_ACCESS_KEY_ID="${R2_ACCESS_KEY_ID:-f7b276dacc25e195aee090ef4db44ba3}"
R2_SECRET_ACCESS_KEY="${R2_SECRET_ACCESS_KEY:-ea8dd4fef9e4713355db17225554853bccdab43a1ff9fa4e7f5a02c7559efe99}"

echo "🚀 Spectrity Frontend - Build Storage to R2"
echo "==============================================="

# Check required environment variables
check_env_vars() {
    local missing_vars=()
    
    if [ -z "$CLOUDFLARE_ACCOUNT_ID" ]; then
        missing_vars+=("CLOUDFLARE_ACCOUNT_ID")
    fi
    
    if [ -z "$R2_ACCESS_KEY_ID" ]; then
        missing_vars+=("R2_ACCESS_KEY_ID")
    fi
    
    if [ -z "$R2_SECRET_ACCESS_KEY" ]; then
        missing_vars+=("R2_SECRET_ACCESS_KEY")
    fi
    
    if [ ${#missing_vars[@]} -ne 0 ]; then
        echo "❌ Missing required environment variables:"
        for var in "${missing_vars[@]}"; do
            echo "   - $var"
        done
        echo ""
        echo "💡 Set them in your environment or .env.local:"
        echo "   export CLOUDFLARE_ACCOUNT_ID=your_account_id"
        echo "   export R2_ACCESS_KEY_ID=your_access_key"
        echo "   export R2_SECRET_ACCESS_KEY=your_secret_key"
        echo ""
        echo "📚 Get these from: https://dash.cloudflare.com/ → R2 → Manage R2 API tokens"
        return 1
    fi
    
    return 0
}

# Install dependencies if needed
install_deps() {
    echo "📦 Checking dependencies..."
    
    if ! command -v aws &> /dev/null; then
        echo "⚠️  AWS CLI not found. Installing via pip..."
        if command -v pip3 &> /dev/null; then
            pip3 install awscli --user --quiet
        elif command -v pip &> /dev/null; then
            pip install awscli --user --quiet
        else
            echo "❌ Neither pip nor pip3 found"
            echo "💡 Please install AWS CLI manually:"
            echo "   - macOS: brew install awscli"
            echo "   - pip: pip install awscli"
            return 1
        fi
        
        # Add user's local bin to PATH
        export PATH="$HOME/.local/bin:$PATH"
        export PATH="$HOME/Library/Python/*/bin:$PATH"
    fi
    
    # Verify AWS CLI is now available
    if ! command -v aws &> /dev/null; then
        echo "❌ AWS CLI installation failed"
        echo "💡 Please install manually: brew install awscli"
        return 1
    fi
    
    echo "✅ Dependencies ready"
    return 0
}

# Configure AWS CLI for R2
configure_aws() {
    echo "🔧 Configuring AWS CLI for R2..."
    
    # Set AWS CLI configuration for R2
    export AWS_ACCESS_KEY_ID="$R2_ACCESS_KEY_ID"
    export AWS_SECRET_ACCESS_KEY="$R2_SECRET_ACCESS_KEY"
    export AWS_DEFAULT_REGION="auto"
    export AWS_ENDPOINT_URL="$R2_ENDPOINT"
    
    echo "✅ AWS CLI configured for R2"
}

# Build static site
build_static() {
    echo "🏗️  Building static site for static export..."
    
    # Clean previous build
    rm -rf "$BUILD_DIR"
    rm -rf ".next"
    
    # Backup original config and use static export config
    if [ -f "next.config.ts" ]; then
        cp next.config.ts next.config.ts.backup
    fi
    cp next.config.static.ts next.config.ts
    
    # Build for static export
    npm run build
    BUILD_RESULT=$?
    
    # Restore original config
    if [ -f "next.config.ts.backup" ]; then
        mv next.config.ts.backup next.config.ts
    fi
    
    if [ $BUILD_RESULT -ne 0 ]; then
        echo "❌ Build failed!"
        return 1
    fi
    
    # Verify build output directory exists
    if [ ! -d "$BUILD_DIR" ]; then
        echo "❌ Build directory '$BUILD_DIR' not found!"
        echo "🔍 Available directories:"
        ls -la | grep "^d"
        return 1
    fi
    
    echo "✅ Static build completed"
    echo "📊 Built $(find $BUILD_DIR -type f | wc -l | tr -d ' ') files"
    return 0
}

# Upload to R2
upload_to_r2() {
    if [ -z "$WEBSITE_DIR" ]; then
        echo "☁️  Uploading to R2 bucket root: $R2_BUCKET"
        S3_PATH="s3://$R2_BUCKET"
        DISPLAY_PATH="$R2_BUCKET/"
    else
        echo "☁️  Uploading to R2 bucket: $R2_BUCKET/$WEBSITE_DIR"
        S3_PATH="s3://$R2_BUCKET/$WEBSITE_DIR"
        DISPLAY_PATH="$R2_BUCKET/$WEBSITE_DIR/"
    fi
    
    # Sync files to R2 bucket
    aws s3 sync "$BUILD_DIR" "$S3_PATH" \
        --endpoint-url="$R2_ENDPOINT" \
        --delete \
        --cache-control "public,max-age=31536000,immutable" \
        --metadata-directive REPLACE
    
    if [ $? -ne 0 ]; then
        echo "❌ Upload failed!"
        return 1
    fi
    
    # Set index.html cache control for shorter duration
    if [ -z "$WEBSITE_DIR" ]; then
        INDEX_PATH="s3://$R2_BUCKET/index.html"
    else
        INDEX_PATH="s3://$R2_BUCKET/$WEBSITE_DIR/index.html"
    fi
    
    aws s3 cp "$BUILD_DIR/index.html" "$INDEX_PATH" \
        --endpoint-url="$R2_ENDPOINT" \
        --cache-control "public,max-age=300" \
        --content-type "text/html"
    
    echo "✅ Upload completed successfully!"
    echo "🌐 Website files uploaded to: $DISPLAY_PATH"
    return 0
}

# Main execution
main() {
    # Check environment variables
    if ! check_env_vars; then
        exit 1
    fi
    
    # Install dependencies
    if ! install_deps; then
        exit 1
    fi
    
    # Configure AWS for R2
    configure_aws
    
    # Build static site
    if ! build_static; then
        exit 1
    fi
    
    # Upload to R2
    if ! upload_to_r2; then
        exit 1
    fi
    
    echo ""
    echo "🎉 Build storage successful!"
    echo "📦 Build artifacts stored in R2"
    echo "📊 Build stats:"
    echo "   - Build directory: $BUILD_DIR"
    echo "   - R2 bucket: $R2_BUCKET"
    echo "   - Files uploaded: $(find $BUILD_DIR -type f | wc -l | tr -d ' ')"
    echo ""
    echo "📂 Build stored at: $BASE_URL"
    
    return 0
}

# Show help
show_help() {
    echo "Usage: $0 [options]"
    echo ""
    echo "Options:"
    echo "  -h, --help     Show this help message"
    echo ""
    echo "Environment Variables Required:"
    echo "  CLOUDFLARE_ACCOUNT_ID    Your Cloudflare account ID"
    echo "  R2_ACCESS_KEY_ID         R2 access key ID"
    echo "  R2_SECRET_ACCESS_KEY     R2 secret access key"
    echo ""
    echo "Example:"
    echo "  export CLOUDFLARE_ACCOUNT_ID=abc123"
    echo "  export R2_ACCESS_KEY_ID=key123"
    echo "  export R2_SECRET_ACCESS_KEY=secret123"
    echo "  ./build-r2.sh"
}

# Handle command line arguments
case "${1:-}" in
    -h|--help)
        show_help
        exit 0
        ;;
    *)
        main
        ;;
esac