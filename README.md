# Nimap NodeJS Machine Test

This project is created as part of the NodeJS Machine Test.

It is a simple full-stack application built using NodeJS, Angular, and MySQL (RDBMS).

The application includes Category Master and Product Master with CRUD operations.  
Each product belongs to a category, and products are displayed with server-side pagination.

---

## Tech Stack

- Backend: NodeJS (Express)
- Frontend: Angular
- Database: MySQL (RDBMS)

---

## Features

- Category Master (Add / View)
- Product Master (Add / View / Delete)
- Product mapped with Category
- Product list shows:
  - ProductId
  - ProductName
  - CategoryId
  - CategoryName
- Server-side pagination (10 records per page using LIMIT and OFFSET)
- MySQL relational database

---

## Database Setup

Create database:

```sql
CREATE DATABASE nimap;
USE nimap;

CREATE TABLE categories(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100)
);

CREATE TABLE products(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100),
 category_id INT,
 FOREIGN KEY(category_id) REFERENCES categories(id)
);



How to Run Backend

Open terminal:

cd backend
npm install
node app.js


Backend will start on:

http://localhost:3000


How to Run Frontend

Open another terminal:

cd frontend/angular-app
npm install
ng serve


Frontend will run on:

http://localhost:4200


Pagination

Pagination is implemented on the server side using MySQL LIMIT and OFFSET.
Angular sends page number to backend, and backend returns only required records.
