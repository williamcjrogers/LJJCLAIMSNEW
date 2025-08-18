@echo off
echo ========================================
echo LJJ SVP Claim Management System
echo ========================================
echo.
echo Starting application...
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% == 0 (
    echo Node.js detected. Installing dependencies...
    call npm install
    echo.
    echo Starting server on http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    start http://localhost:8000
    npm start
) else (
    :: Fallback to Python if Node.js is not installed
    where python >nul 2>nul
    if %errorlevel% == 0 (
        echo Python detected. Starting server...
        echo.
        echo Server running on http://localhost:8000
        echo Press Ctrl+C to stop the server
        echo.
        start http://localhost:8000
        python -m http.server 8000
    ) else (
        echo ERROR: Neither Node.js nor Python is installed.
        echo Please install Node.js from https://nodejs.org
        echo Or install Python from https://python.org
        echo.
        pause
    )
)