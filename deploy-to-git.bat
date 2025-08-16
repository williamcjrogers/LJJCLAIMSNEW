@echo off
echo Deploying to GitHub...
echo.
echo Adding all changes...
git add .
echo.
echo Creating commit...
git commit -m "Add evidence viewer integration - Complete evidence preview and download functionality"
echo.
echo Pushing to GitHub...
git push origin main
echo.
echo GitHub deployment complete!
echo.
echo Next steps:
echo 1. Go to https://vercel.com
echo 2. Import your GitHub repository
echo 3. Vercel will auto-deploy your app
pause
