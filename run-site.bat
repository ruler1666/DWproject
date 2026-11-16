@echo off
cd /d "%~dp0"

where py >nul 2>nul
if errorlevel 1 (
  echo Python launcher "py" was not found. Install Python, then run this file again.
  pause
  exit /b 1
)

start "ReflectHub Local Server" py -m http.server 8000 --bind 127.0.0.1

set /a attempts=0
:wait_for_server
py -c "import urllib.request; data=urllib.request.urlopen('http://127.0.0.1:8000/data/tools.json', timeout=1).read(); assert b'android-digital-wellbeing' in data" >nul 2>nul
if not errorlevel 1 goto server_ready
set /a attempts+=1
if %attempts% geq 15 goto server_failed
timeout /t 1 /nobreak >nul
goto wait_for_server

:server_ready
start "" "http://127.0.0.1:8000/index.html"
exit /b 0

:server_failed
echo The local site server did not start on port 8000.
echo Check whether another program is already using that port, then try again.
pause
exit /b 1
