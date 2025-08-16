@echo off
git add .
git commit -m "Fix vercel.json configuration and add evidence viewer integration"
git push origin master
echo.
echo Deployment to GitHub complete!
pause