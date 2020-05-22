# Connect to web host
# Stop web server daemon
# Build site with architekt
# Start web server daemon
# Exit SSH session
ssh site@opensourceryumd.com "
cd ~/site &&

pm2 stop site &&

npm install &&
ark render &&

pm2 start index.js --name site &&

exit
"
