@echo off
title Arpita Weds Rohit - Development Server
color 0B

echo ========================================================
echo     Arpita Sang Rohit - Live Development Server
echo ========================================================
echo.

set "PATH=C:\Users\hp\AppData\Local\Programs\nodejs;%PATH%"
cd /d "%~dp0"

start "" http://localhost:3000/

npm run dev -- --port 3000 --host

pause
