# 🛒 Ecommerce Baazaar

![Ecommerce Baaazaar Logo]([https://your-image-url-here](https://i.pinimg.com/originals/c8/51/e1/c851e1918e356d0bfdcd090fb2c2332c.jpg)) <!-- Image or Logo -->

> A full-fledged e-commerce application built using the MERN stack (MongoDB, Express, React, Node.js) with a seamless shopping experience and efficient order management.

## 🌟 Features

-   🔐 **JWT Authentication**: Secure authentication using JSON Web Tokens.
-   📦 **Product Management**: Add, update, and remove products from the catalog.
-   🛍️ **Shopping Cart**: Add products to the cart and place orders.
-   💳 **Payment Gateway Integration**: Pay via a secure payment gateway.
-   🚀 **Optimized Performance**: Fast, reliable, and optimized for speed with caching via Redis.
-   🌐 **Responsive Design**: Fully responsive user interface with Tailwind CSS.
-   🖼️ **AWS S3**: For image uploads and media handling.

## 🛠️ Technologies Used

### **Frontend (Client)**

-   ⚛️ **React**
-   🎨 **Tailwind CSS**
-   🛠️ **Material Tailwind**
-   ⚡ **Vite** for blazing fast builds
-   🌍 **React Router** for navigation
-   🔍 **Redux Toolkit** for state management

### **Backend**

-   🟢 **Node.js**
-   ⚙️ **Express**
-   🗃️ **MongoDB** with Mongoose for database management
-   🔐 **JWT** for authentication
-   🗄️ **Redis** for caching
-   ☁️ **AWS S3** for media uploads

## 📂 Project Structure

Ecommerce Baazaar │ ├── backend │ ├── config │ ├── controllers │ ├── models │ ├── routes │ ├── utils │ └── server.js │ ├── client │ ├── public │ ├── src │ │ ├── components │ │ ├── pages │ │ ├── redux │ │ ├── assets │ │ └── App.js │ └── vite.config.js │ └── README.md

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

-   **Node.js**
-   **MongoDB**
-   **AWS Account** for S3
-   **Redis**

### 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/naimatofficial/e-bazaar-mern.git
```

### **Set up environment variables:**

Create a .env file in the backend folder and add the following:

```bash
DB_URI=[your_database_url]
NODE_ENV='production'

JWT_SECRET=********
JWT_REFRESH_SECRET=********
JWT_ACCESS_TIME=********
JWT_REFRESH_TIME=********
JWT_COOKIE_EXPIRES_IN=********

REDIS_URL=*redis_url*
```

### **Install packages & Start Both Server**

```bash
npm install
cd client
npm install
```

```bash
npm run dev
```

The backend server will start on http://localhost:3000 and the frontend on http://localhost:5173
