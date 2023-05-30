# Ang
"predeploy": "ng build --prod --base-href=/ang/",
"deploy": "npx gh-pages -d dist/ang"
And then run npm run deploy

## Development
npm install --global http-server
http-server -p 8080 -c-1 dist/ang
