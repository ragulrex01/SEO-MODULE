# Dynamic SEO Module using Next.js, Node.js, and MySQL

## 📌 Project Overview

This project demonstrates a **Dynamic SEO Management System** where SEO metadata such as **title, meta description, keywords, and robots tags** are stored in a database and dynamically applied to web pages.

Instead of hardcoding SEO tags inside the frontend code, the system fetches SEO data from a **Node.js API connected to a MySQL database**. This allows developers or administrators to manage SEO information without modifying the application code.

The module is designed to support **multiple pages with different SEO configurations**, making it scalable for real-world applications like blogs, e-commerce platforms, or company websites.

---

## 🚀 Features

* Dynamic SEO metadata generation
* Metadata stored in a **MySQL database**
* REST API built with **Node.js and Express**
* Frontend implemented using **Next.js App Router**
* Supports multiple pages with different SEO configurations
* Includes important SEO tags such as:

  * Title Tag
  * Meta Description
  * Keywords
  * Robots Tag
  * Canonical Tag
* Easily extendable for additional SEO tags like **OpenGraph or Twitter Cards**

---

## 🏗️ System Architecture

Frontend (Next.js)
⬇
Fetch API Request
⬇
Backend API (Node.js + Express)
⬇
MySQL Database (SEO Data)

The frontend page calls the API to retrieve SEO metadata and applies it dynamically using the **Next.js Metadata API**.

---

## 🧰 Technologies Used

### Frontend

* Next.js (App Router)
* React
* TypeScript
* CSS

### Backend

* Node.js
* Express.js
* REST API

### Database

* MySQL (via XAMPP)

---

## 📂 Project Structure

```
seo-dashboard
│
├── app
│   ├── layout.tsx
│   ├── test
│   │   └── page.tsx
│   └── car
│       └── page.tsx
│
├── backend
│   └── server.js
│
├── next.config.js
├── package.json
└── README.md
```

---

## 🗄️ Database Structure

Table Name: **seo_data**

| Column Name      | Type    | Description      |
| ---------------- | ------- | ---------------- |
| id               | INT     | Primary Key      |
| page             | VARCHAR | Page name        |
| meta_title       | VARCHAR | SEO title        |
| meta_description | TEXT    | Page description |
| keywords         | TEXT    | SEO keywords     |

Example record:

```
page: car
meta_title: Best Cars 2026 | Car Company
meta_description: Explore the latest car models and compare features.
keywords: cars, car models, best cars
```

---

## 🔌 API Endpoints

### Add SEO Data

POST /add-seo

Request Body

```
{
  "page": "car",
  "meta_title": "Best Cars 2026",
  "meta_description": "Explore the latest car models",
  "keywords": "cars, models"
}
```

---

### Get All SEO Records

GET /seo

---

### Get SEO by Page

GET /seo/:page

Example

```
http://localhost:5000/seo/car
```

---

### Update SEO

PUT /seo/:id

---

### Delete SEO

DELETE /seo/:id

---

## ⚙️ How Dynamic SEO Works

1. SEO metadata is stored in the **MySQL database**.
2. A **Node.js API** fetches SEO data based on the page name.
3. The Next.js page calls the API inside `generateMetadata()`.
4. Metadata is injected dynamically into the HTML `<head>` section.

Example:

```
<title>Best Cars 2026 | Car Company</title>
<meta name="description" content="Explore the latest car models">
<meta name="keywords" content="cars, models">
<meta name="robots" content="index, follow">
```

---

## ▶️ Running the Project

### 1. Install dependencies

```
npm install
```

### 2. Start the backend server

```
node server.js
```

Backend runs on:

```
http://localhost:5000
```

### 3. Start the Next.js frontend

```
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔍 Testing the SEO Module

1. Insert SEO data into the database.
2. Open a page such as:

```
http://localhost:3000/car
```

3. Right click → **View Page Source**

You should see dynamically generated metadata.

---

## 📈 SEO Elements Implemented

* Title Tag
* Meta Description
* Keywords
* Robots Tag
* Canonical URL

These elements help search engines understand page content and improve search visibility.

---

## 💡 Future Improvements

* Admin dashboard for SEO management
* OpenGraph and social media SEO tags
* Automatic sitemap generation
* Dynamic routing for unlimited pages
* SEO analytics integration

---

## 👨‍💻 Author

Saravana Ganesh

Computer Science Engineering Student

LinkedIn:
http://www.linkedin.com/in/saravanaganesh5720
