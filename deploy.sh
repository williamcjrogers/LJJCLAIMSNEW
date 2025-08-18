#!/bin/bash

# LJJ SVP Claim Management - Vercel Deployment Script
# Cross-platform deployment script for Unix/Linux/macOS

set -e  # Exit on any error

echo "================================================"
echo "   LJJ SVP Claim Management - Vercel Deployment"
echo "================================================"
echo

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}[1/4] Checking prerequisites...${NC}"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 14+ first.${NC}"
    exit 1
fi

NODE_VERSION=$(node -v)
echo "✅ Node.js version: $NODE_VERSION"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed.${NC}"
    exit 1
fi

NPM_VERSION=$(npm -v)
echo "✅ npm version: $NPM_VERSION"

echo

echo -e "${BLUE}[2/4] Checking Vercel CLI...${NC}"

# Check if Vercel CLI is available
if ! command -v vercel &> /dev/null && ! command -v npx vercel &> /dev/null; then
    echo -e "${YELLOW}⚠️ Vercel CLI not found globally. Using npx...${NC}"
    VERCEL_CMD="npx vercel"
else
    VERCEL_CMD="vercel"
    echo "✅ Vercel CLI found"
fi

# Get Vercel version
VERCEL_VERSION=$($VERCEL_CMD --version 2>/dev/null || echo "unknown")
echo "📦 Vercel version: $VERCEL_VERSION"

echo

echo -e "${BLUE}[3/4] Preparing deployment...${NC}"
echo "📁 Current directory: $(pwd)"
echo "📋 Key files present:"
[ -f "index.html" ] && echo "  ✅ index.html" || echo "  ❌ index.html"
[ -f "vercel.json" ] && echo "  ✅ vercel.json" || echo "  ❌ vercel.json"
[ -f "package.json" ] && echo "  ✅ package.json" || echo "  ❌ package.json"
[ -d "src" ] && echo "  ✅ src/ directory" || echo "  ❌ src/ directory"

echo

echo -e "${BLUE}[4/4] Deploying to Vercel...${NC}"
echo "🚀 Running: $VERCEL_CMD --prod --yes"

if $VERCEL_CMD --prod --yes; then
    echo
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo
    echo -e "${YELLOW}📋 Post-deployment checklist:${NC}"
    echo "  □ Test the deployed URL"
    echo "  □ Verify all pages load correctly"
    echo "  □ Check browser console for errors"
    echo "  □ Test on mobile devices"
    echo "  □ Confirm all features work as expected"
    echo
    echo -e "${GREEN}🎉 LJJ SVP Claim Management System is now live!${NC}"
else
    echo
    echo -e "${RED}❌ Deployment failed!${NC}"
    echo
    echo -e "${YELLOW}Please check:${NC}"
    echo "  1. Internet connection"
    echo "  2. Vercel authentication (run: vercel login)"
    echo "  3. Project permissions"
    echo "  4. Review logs above for specific errors"
    echo
    echo -e "${YELLOW}For help, see VERCEL_DEPLOYMENT_GUIDE.md${NC}"
    exit 1
fi

echo
echo "🏁 Deployment process complete!"