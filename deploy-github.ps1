# GitHub Deployment Script for LJJ Claims Management System
# This script automates the deployment process to GitHub

Write-Host "🚀 Starting GitHub Deployment Process..." -ForegroundColor Green

# Check if we're in a git repository
if (-not (Test-Path ".git")) {
    Write-Host "❌ Error: Not in a git repository!" -ForegroundColor Red
    exit 1
}

# Check if there are any uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host "⚠️  Warning: You have uncommitted changes!" -ForegroundColor Yellow
    Write-Host "The following files have changes:" -ForegroundColor Yellow
    git status --short
    $response = Read-Host "Do you want to commit these changes? (y/n)"
    if ($response -eq "y" -or $response -eq "Y") {
        $commitMessage = Read-Host "Enter commit message"
        if (-not $commitMessage) {
            $commitMessage = "Auto-commit before deployment"
        }
        git add .
        git commit -m $commitMessage
        Write-Host "✅ Changes committed successfully!" -ForegroundColor Green
    } else {
        Write-Host "❌ Deployment cancelled. Please commit your changes first." -ForegroundColor Red
        exit 1
    }
}

# Run quality checks
Write-Host "🔍 Running quality checks..." -ForegroundColor Blue

Write-Host "  - Running TypeScript typecheck..." -ForegroundColor Cyan
npm run typecheck
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ TypeScript errors found! Please fix them before deploying." -ForegroundColor Red
    exit 1
}

Write-Host "  - Running linting..." -ForegroundColor Cyan
npm run lint
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Linting errors found! Please fix them before deploying." -ForegroundColor Red
    exit 1
}

Write-Host "  - Building project..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Please fix the issues before deploying." -ForegroundColor Red
    exit 1
}

Write-Host "✅ All quality checks passed!" -ForegroundColor Green

# Push to GitHub
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Blue
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "🌐 Your application will be deployed automatically via GitHub Actions." -ForegroundColor Green
    Write-Host "📋 Check the Actions tab in your GitHub repository for deployment status." -ForegroundColor Cyan
} else {
    Write-Host "❌ Failed to push to GitHub!" -ForegroundColor Red
    exit 1
}

Write-Host "🎉 Deployment process completed!" -ForegroundColor Green
