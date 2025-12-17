# 🔐 User Account & Access Management API

A secure **MERN Stack Authentication System** implementing JWT-based authentication, protected routes, and user profile management.  
Designed following **industry-level backend practices** suitable for fintech and product-based companies.

---

## 🚀 Tech Stack

### Frontend
- React.js
- Axios
- React Router
- Tailwind CSS / CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- bcrypt.js

### Deployment
- Frontend: Vercel  
- Backend: Render  
- Database: MongoDB Atlas

---

## ✨ Features

- JWT-based User Authentication (Login & Register)
- Secure Password Hashing using bcrypt
- Protected Routes using Auth Middleware
- User Profile Fetch & Update
- Change Password & Delete Account
- Clean RESTful API Architecture

---

## 📂 Project Structure


User-Account-Access-Management/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ └── App.js
│ ├── public/
│ └── package.json
│
├── backend/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── src/
│ │ └── server.js
│ └── package.json
│
└── README.md


---

## 🔌 API Endpoints

### Authentication Routes
POST /api/auth/register → Register new user
POST /api/auth/login → Login user


### User Routes (Protected)
GET /api/users/profile → Get user profile
PUT /api/users/update → Update profile
PUT /api/users/change-password → Change password
DELETE /api/users/delete → Delete account


---

## 🔐 Authentication Flow

User Login/Register
↓
JWT Generated
↓
Token Stored on Client
↓
Authorization Header Sent
↓
Middleware Validates Token
↓
Protected Route Access


### Header Format

Authorization: Bearer <JWT_TOKEN>


---

## ⚙️ Environment Variables

MONGO_URI=mongodb+srv://satakshisamant04_db_user:satakshi1234@cluster0.sxalpit.mongodb.net/?appName=Cluster0
JWT_SECRET=mysupersecretkey
PORT=3000


---

## ▶️ Run Project Locally

### Backend
cd backend
npm install
npm run dev


### Frontend

cd frontend
npm install
npm start


---

## 📌 Learning Outcomes

- Implemented JWT Authentication from scratch
- Designed secure REST APIs
- Used middleware for route protection
- Integrated frontend & backend securely
- Learned deployment with environment variables

---

## 🧠 Future Enhancements

Role Based Access Control (RBAC)

Refresh Token Implementation

Rate Limiting & API Logging

OAuth (Google / GitHub Login)

Email Verification & Password Reset


---

## 📄 License

This project is created for **learning, demonstration, and portfolio use**.
