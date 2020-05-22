# Connect to web host
ssh site@opensourceryumd.com
cd ~/site

# Stop web server daemon
pm2 stop site

# Build site with architekt
npm install
ark render

# Start web server daemon
pm2 start index.js --name site

# Close SSH connection
exit
