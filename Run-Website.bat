@echo off
title Arpita Weds Rohit - Wedding Invitation Website
color 0E

echo ========================================================
echo     Arpita Sang Rohit - Royal Wedding Invitation
echo ========================================================
echo.
echo Starting Wedding Website Server...
echo.

set "PATH=C:\Users\hp\AppData\Local\Programs\nodejs;%PATH%"
cd /d "%~dp0"

start "" http://localhost:3000/
start "" http://localhost:3000/invite/prakunj-vishwakarma

npm run preview -- --port 3000 --host

pause
