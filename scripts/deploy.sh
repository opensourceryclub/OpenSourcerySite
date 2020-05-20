# add server to known hosts
ssh-keyscan -H 13.58.120.127 >> ~/.ssh/known_hosts

# connect to server
ssh site@opensourceryumd.com
cd ~/site

# stop daemon
pm2 stop site
npm install

# start daemon
pm2 start index.js --name site
