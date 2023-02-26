# Personal Portfolio - AWS and Heroku deployment
## Description - 
Developed and deployed a full stack portfolio app in order to present my projects, the rest can be found in my [GitHub](https://github.com/akamary) profile. By implementing a backend using Node.js (express framework),  Deployed the app using Heroku Cloud.  
**Heroku-** https://kamaryaviv.herokuapp.com/.  

**In addition to Heroku deployment**, and to enrich my knowledge, I have decided to deploy the MERN app using AWS Cloud services for improving site's performance:
* Create Amazon EC2 instance configuration for networks configurations, ports, etc. 
* NGINX installation and configuration for reverse proxy.
* Using Route 53 service for registering a custom domain and configured the EC2 instance to point that url 
* Securing site with LetsEncrypt SSL  

Utilized MongoDB for user engagement.

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
* ssl cert using letsencrypt

**Adding a node.js.yaml file using GitHub Actions:**

**Then, configuring GitHub Runner in Linux for EC2 instance.**

* configure /etc/nginx/sites-enabled/default
* adding SSL certification for the domain using certbot

I will upload more information about AWS deployment..
