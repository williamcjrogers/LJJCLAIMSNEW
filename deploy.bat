@echo off
echo ================================================
echo    LJJ SVP Claim Management - Vercel Deployment
echo ================================================
echo.

echo [1/4] Checking Vercel CLI...
call npx vercel --version
if errorlevel 1 (
    echo ERROR: Vercel CLI not found. Installing...
    call npm install -g vercel@latest
)

echo.
echo [2/4] Preparing deployment...
echo Current directory: %cd%
echo Files to deploy:
dir /b *.html *.js *.css *.json *.md 2>nul

echo.
echo [3/4] Deploying to Vercel...
echo Running: npx vercel --prod --yes
call npx vercel --prod --yes

if errorlevel 1 (
    echo.
    echo ❌ Deployment failed!
    echo Please check:
    echo   1. Internet connection
    echo   2. Vercel authentication (run: vercel login)
    echo   3. Project permissions
    echo   4. Review logs above for specific errors
    pause
    exit /b 1
) else (
    echo.
    echo ✅ Deployment successful!
    echo.
    echo 📋 Post-deployment checklist:
    echo   □ Test the deployed URL
    echo   □ Verify all pages load correctly
    echo   □ Check browser console for errors
    echo   □ Test on mobile devices
    echo   □ Confirm all features work as expected
    echo.
)

echo [4/4] Deployment complete!
echo.
pause
