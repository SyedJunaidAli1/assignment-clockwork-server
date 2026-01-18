# Shopify Post-Purchase App – Server

This is the backend server for the Shopify Post-Purchase application.
It is responsible for handling app installation, storing shop data, and managing post-purchase message configuration.

## 🚀 Tech Stack

Node.js

Express.js

MongoDB (Mongoose)

Shopify Admin API

Shopify OAuth

dotenv

## 🧠 Responsibilities of the Server

The server handles the following:

Shopify OAuth authentication during app installation

Stores shop information when the app is installed

Persists the post-purchase message in the database

Exposes APIs for the admin frontend to:

Fetch the current message

Update the post-purchase message

Note: The post-purchase UI extension runs in Shopify’s checkout environment and does not execute server code directly. The server is used for configuration and persistence.

## 📁 Folder Structure
```
server/
├── src/
│   ├── app.js
│   ├── index.js
│   ├── config/
│   │   ├── db.js
│   │   └── shopify.js
│   ├── routes/
│   │   └── shop.routes.js
│   └── models/
│       └── Shop.js
├── .env.example
├── package.json
└── README.md
```
## 🔐 Environment Variables

Create a .env file using .env.example as a reference.

.env.example
```
DATABASE_URL=
PORT=5000
FRONTEND_ENDPOINT=http://localhost:3000
SHOPIFY_API_KEY=
SHOPIFY_API_SECRET=
SHOPIFY_SCOPES=read_products,write_products
HOST=
```

⚙️ Installation & Setup
1️⃣ Install dependencies
```
npm install
```
2️⃣ Start the server
```
npm run dev
```

The server will start on:

http://localhost:5000

## 🔑 Shopify App Installation Flow

Merchant installs the app from Shopify

Shopify redirects to the server OAuth endpoint

Server completes authentication

Shop domain is stored in MongoDB

Merchant is redirected to the frontend app

## 🗄️ Database Schema (Simplified)

Example shop document:
```
{
  "shopDomain": "example-store.myshopify.com",
  "postPurchaseMessage": "Thank you for your order!",
  "installedAt": "2026-01-18T14:01:13.702Z"
}
```
## 🔗 API Endpoints (Core)
Get post-purchase message
```
GET /api/shop/message/:shopDomain
```
Update post-purchase message
```
POST /api/shop/message
```

Body:
```
{
  "shopDomain": "example-store.myshopify.com",
  "message": "Thank you for your order!"
}
```
## 🧩 Relationship with Post-Purchase Extension

The server does not run inside checkout

Shopify post-purchase extensions run in a sandboxed UI environment

For the core assignment:

The extension displays a static message

Server stores configuration for future extensibility

This separation follows Shopify’s official architecture.

## 📝 Notes

This server is designed for development and assignment purposes

Error handling and security are intentionally minimal

Production deployment was not required for this task

✅ Assignment Status

✔ Shopify OAuth implemented

✔ Shop data persisted

✔ Post-purchase message stored

✔ Backend ready for admin configuration