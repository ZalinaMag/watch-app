# Watch-app study project is a server-side-rendered (SSR) React web application built with Node.js, Express and PostgreSQL.

An interactive web portfolio showcasing an assortment of custom watches, where users can browse models, view details, and place orders.
![Front page:](./Front_page.png)

## Stack
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" /> <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /> <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white" /> <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" />

## Features
- Role-based authentication with separate user and admin access levels
- Order submission form with image upload support (powered by Multer)
  
## Script to run locally

1. Create your database
  Start PostgreSQL (install before if needed and create user too), then create your database (inside psql):

  ### `CREATE DATABASE watch`

2. Create your local .env
  In the server folder, create a file named .env with these contents:

  PORT=3002
  DB=postgres://<YOUR_DB_USER>:<YOUR_DB_PASSWORD>@localhost:5432/watch
  SESSION_SECRET=<YOUR_SECRET>

3. Run Sequelize migrations & seeders
   
  ### `npm install`
  ### `npx sequelize db:migrate`npx sequelize db:migrate
  ### `npx sequelize db:seed:all`npx sequelize db:seed:all

4. Start the server in development mode:

  ### `npm run dev`

Open [http://localhost:3002](http://localhost:3002) to view it in the browser.  
Swagger documentation is available on [http://localhost:3002/api-docs](http://localhost:3002/api-docs)  
API status can be seen on [http://localhost:3002/status](http://localhost:3002/status)

Reload page if you make edits.
