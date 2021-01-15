meteor build --directory=../env-bug-build
cd ../env-bug-build
(cd programs/server && npm install)
MONGO_URL="mongodb://localhost:27017/env-bug" ROOT_URL=http://localhost:3000 NODE_ENV=staging PORT=3000 node main.js

in server console: 'staging'
in client console: 'production'
not in client console, write `process.env.NODE_ENV` => you get 'staging' again
