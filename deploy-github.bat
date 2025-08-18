@echo off
echo 🚀 Starting GitHub Deployment Process...

REM Check if we're in a git repository
if not exist ".git" (
    echo ❌ Error: Not in a git repository!
    pause
    exit /b 1
)

REM Check for uncommitted changes
git status --porcelain >nul 2>&1
if %errorlevel% equ 0 (
    echo ⚠️  Warning: You have uncommitted changes!
    echo The following files have changes:
    git status --short
    set /p response="Do you want to commit these changes? (y/n): "
    if /i "%response%"=="y" (
        set /p commitMessage="Enter commit message: "
        if "%commitMessage%"=="" set commitMessage=Auto-commit before deployment
        git add .
        git commit -m "%commitMessage%"
        echo ✅ Changes committed successfully!
    ) else (
        echo ❌ Deployment cancelled. Please commit your changes first.
        pause
        exit /b 1
    )
)

echo 🔍 Running quality checks...

echo   - Running TypeScript typecheck...
call npm run typecheck
if %errorlevel% neq 0 (
    echo ❌ TypeScript errors found! Please fix them before deploying.
    pause
    exit /b 1
)

echo   - Running linting...
call npm run lint
if %errorlevel% neq 0 (
    echo ❌ Linting errors found! Please fix them before deploying.
    pause
    exit /b 1
)

echo   - Building project...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed! Please fix the issues before deploying.
    pause
    exit /b 1
)

echo ✅ All quality checks passed!

echo 📤 Pushing to GitHub...
git push origin main

if %errorlevel% equ 0 (
    echo ✅ Successfully pushed to GitHub!
    echo 🌐 Your application will be deployed automatically via GitHub Actions.
    echo 📋 Check the Actions tab in your GitHub repository for deployment status.
) else (
    echo ❌ Failed to push to GitHub!
    pause
    exit /b 1
)

echo 🎉 Deployment process completed!
pause
