# Move to home directory
cd ~

# Remove current site directory if it exists
rm -rf ./OpenSourcerySite

# Start SSH agent
eval $(ssh-agent -s)

# Add deploy key to SSH agent
# ... have to do this each time because keys are stored in memory by ssh-agent
# ... so when it stops, they're lost
ssh-add ~/.ssh/deploy_key

# Clone OpenSourcerySite repo
git clone git@github.com:zachwildd/OpenSourcerySite.git

# Checkout express-with-travis for now
cd OpenSourcerySite
git checkout express-with-travis

# Stop web server daemon
pm2 stop site

# Install dependencies & Build site with architekt
npm install
npm install architekt
node ./node_modules/architekt/bin/architekt.js render

# Start web server daemon
pm2 start index.js --name site

# Exit?
exit
