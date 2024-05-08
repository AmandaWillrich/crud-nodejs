# CRUD WITH NODEJS

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)


## Content
 1. [Requirements](#requirements)
 2. [Database](#database)
 3. [Running project](#running-project)
 4. [Accessing CRUD screen](#access)


<div id='requirements'/>

## 🚩 Requirements
- NodeJS v20.9.0 or above;
- PostgreSQL v16.2 or above;
- Live Server extension;

<div id='database'/>

## 🎛️ Database
Access pgAdmin and create a Database. Then, execute the following script:
```
CREATE TABLE order (
    id SERIAL PRIMARY KEY,
    product VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    delivery_date DATE,
    price NUMERIC(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);
```

<div id='running-project'/>

## 🚀 Running project
- Clone the repository;
- Navigate to the <b>api</b> folder;
- Create a file called <b>.env</b>. Add the database settings, according to the following:
```
DATABASE_URL=postgres://{db_username}:{db_password}@{host}:{port}/{db_name}
DB_TABLE=order
PORT=3000
```
- Install dependencies: ```npm install```;
- Run the development server: ```npm run dev```;

<div id='access'/>

## 🌐 Accessing CRUD Screen
- Access the frontend/index.html file with Live Server

![Page image (dark theme)](images/crud-nodejs-screen-dark.png)
![Editing item page image (dark theme)](images/crud-nodejs-editing-screen-dark.png)
![Page image (light theme)](images/crud-nodejs-screen-light.png)
![Editing item page image (light theme)](images/crud-nodejs-editing-screen-light.png)