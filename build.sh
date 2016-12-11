
npm install

echo "====== node_modules installed ======"

node ./node_modules/webpack/bin/webpack --config ./client/webpack-production.config.js

echo "====== webpack build finished ======"

node ./node_modules/babel-cli/bin/babel server/src -d server/build

echo "====== babel build server finished ======"

NODE_ENV="prod" node server/build/app.js &

echo "====== node start ======"
