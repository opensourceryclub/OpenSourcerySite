# add server to known hosts
ssh-keyscan -H 172.31.40.141 >> ~/.ssh/known_hosts

# connect to server
ssh site@opensourceryumd.com
cd ~/site

# stop daemon
pm2 stop site
npm install

# start daemon
pm2 start index.js --name site
