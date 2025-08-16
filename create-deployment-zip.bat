@echo off
echo Creating deployment zip...

rem Use 7-Zip if available, otherwise use PowerShell
where 7z >nul 2>nul
if %errorlevel% == 0 (
    echo Using 7-Zip...
    7z a ljj-deployment.zip app.js package.json index.html styles.css vercel.json
) else (
    echo Using PowerShell compression...
    powershell -Command "Compress-Archive -Path 'app.js','package.json','index.html','styles.css','vercel.json' -DestinationPath 'ljj-deployment.zip' -Force"
)

if exist ljj-deployment.zip (
    echo Deployment zip created successfully: ljj-deployment.zip
    dir ljj-deployment.zip
) else (
    echo Failed to create deployment zip
)

pause
