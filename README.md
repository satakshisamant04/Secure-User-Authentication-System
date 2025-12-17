🔐 User Account & Access Management API

A secure and scalable MERN Stack Authentication System implementing industry-standard authentication and authorization workflows. This project demonstrates how modern web applications manage user identity, access control, and protected resources.

🚀 Tech Stack

Frontend

React.js

Axios

React Router

Tailwind CSS / CSS

Backend

Node.js

Express.js

MongoDB (Mongoose)

JSON Web Tokens (JWT)

bcrypt.js

Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

✨ Key Features

🔐 JWT-based Authentication

Secure user login and registration

Token-based session management

🛡️ Protected Routes & Middleware

Authentication middleware to protect APIs

Access control using Bearer tokens

👤 User Profile Management

Fetch user profile

Update name and email

Change password securely

Delete user account

🔑 Password Security

Password hashing using bcrypt

Secure password update workflow

📦 RESTful API Design

Clean separation of routes, controllers, and middleware

Scalable backend architecture

📂 Project Structure
User-Account-Access-Management/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── src/
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md

🔌 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login user
User Routes (Protected)
Method	Endpoint	Description
GET	/api/users/profile	Fetch user profile
PUT	/api/users/update	Update profile
PUT	/api/users/change-password	Change password
DELETE	/api/users/delete	Delete account
🔐 Authentication Flow

User registers or logs in

Server generates a JWT

Token is stored on the client

Token is sent in headers for protected routes:

Authorization: Bearer <JWT_TOKEN>


Middleware validates token before allowing access

⚙️ Environment Variables

Create a .env file in the backend folder:

MONGO_URI=mongodb+srv://satakshisamant04_db_user:satakshi1234@cluster0.sxalpit.mongodb.net/?appName=Cluster0
JWT_SECRET=mysupersecretkey
PORT=3000


▶️ Run Locally
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm start

📌 Learning Outcomes

Implemented secure authentication workflows

Understood JWT lifecycle & middleware

Designed REST APIs with role-ready architecture

Integrated frontend and backend securely

Gained experience with deployment & environment configs

🧠 Future Enhancements

Role-Based Access Control (Admin/User)

Rate limiting & request logging

Refresh token implementation

OAuth (Google / GitHub login)

Email verification & password reset

📄 License

This project is for learning and demonstration purposes.