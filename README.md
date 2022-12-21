# Personal Portfolio - AWS and Heroku deployment
## Description - 
Developed and deployed a full stack portfolio app in order to present my projects, the rest can be found in my [GitHub](https://github.com/akamary) profile. By implementing a backend using Node.js (express framework), any visitor can contact me by sending emails using nodemailer and storing in MongoDB the number of visitors, current time and date. Deployed the app using Heroku Cloud.  
**Heroku-** https://kamaryaviv.herokuapp.com/.  

**In addition to Heroku deployment**, and to enrich my knowledge, I have decided to deploy the MERN app using AWS Cloud services for improving site's performance:
* Create Amazon EC2 instance configuration for networks configurations, ports, etc. 
* NGINX installation and configuration for reverse proxy.
* Using Route 53 service for registering a custom domain and configured the EC2 instance to point that url 
* Securing site with LetsEncrypt SSL  

 
**AWS EC2 Instance-** https://kamaryaviv.com/



Tech utilized: 
* Ubuntu 20.4
* Node.js
* MongoDB
* React
* Express.js
* Geolocation api
* mongoose
* nodemailer

**Adding a node.js.yaml file using GitHub Actions:**

```
name: Node.js CI

on:
  push:
    branches: [ "main" ]

jobs:
  build:

    runs-on: self-hosted

    strategy:
      matrix:
        node-version: [16.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: sudo pm2 restart <your server.js>
    - run: sudo cp -r ~/<yourFolder>/ls/<packageName>/<packageName>/build/* /var/www/<newFolder>/
    - run: sudo service nginx restart 
```
**Then, configuring GitHub Runner in Linux for EC2 instance.**

* configure /etc/nginx/sites-enabled/default
* adding SSL certification for the domain using certbot

I will upload more information about AWS deployment..