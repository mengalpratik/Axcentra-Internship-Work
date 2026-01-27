# Full Stack To-Do Application (MERN Stack)

## 📌 Project Overview
This is a full-stack To-Do application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).  
The application allows users to securely manage their tasks with authentication and full CRUD functionality.

---

## 🚀 Features
- User Authentication (Register & Login using JWT)
- Create, Update, Delete Tasks
- Task Deadline Support
- Task Created Date & Last Modified Date
- User-specific task management
- Clean and professional UI
- REST API tested using Postman

---

## 🛠 Tech Stack
### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

## 📂 Project Structure
todo-mern/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── services/
│ │ └── App.js
│
└── README.md


---

## 🔐 Authentication Flow
- User registers and logs in
- JWT token is generated on login
- Token is stored on client side
- Protected routes are accessed using token-based authentication

---

## 🧪 API Testing
All backend APIs were tested using Postman:
- Register User
- Login User
- Add Task
- Fetch Tasks
- Update Task
- Delete Task

---

## ▶️ How to Run the Project

### Backend
```bash
cd backend
npm install
npm run dev

### Frontend
cd frontend
npm install
npm start
