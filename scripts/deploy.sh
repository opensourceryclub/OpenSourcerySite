# Move to home directory
cd ~

# Remove current site directory if it exists
rm -rf ./OpenSourcerySite

# Clone OpenSourcerySite repo
git clone git@github.com:DonIsaac/OpenSourcerySite.git

# Checkout express-with-travis for now
cd OpenSourcerySite
git checkout express-with-travis

# Stop web server daemon
pm2 stop site

# Build site with architekt, assuming it's already installed
npm install
ark render

# Start web server daemon
pm2 start index.js --name site

# Exit?
exit
