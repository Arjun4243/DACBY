🚀 Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v16.x or higher recommended)

npm (comes with Node.js)

MongoDB Atlas: You do not need to install MongoDB locally. This application connects directly to a cloud database via MongoDB Atlas.

📂 Project Structure
/backend → Node.js + Express + MongoDB

/frontend → React + React Router

⚙️ Installation & Running
1. Backend Setup
Navigate to the backend directory:


cd backend
Install dependencies:

run command : npm install
run command : npm install bcrypt cheerio cors dotenv express jsonwebtoken mongoose nodemon


npm start
The backend will run at: http://localhost:3000

2. Frontend Setup
Open a new terminal and navigate to the frontend directory:


cd frontend
Install dependencies: 
run command : npm install @testing-library/dom @testing-library/jest-dom @testing-library/react @testing-library/user-event jwt-decode react react-dom react-icons react-router-dom react-scripts web-vitals

npm install


Start the React development server:

npm start
The frontend will run at: http://localhost:3001

📦 One-Command Installation (Optional)
From the project root, you can install both frontend and backend dependencies in one go:


npm install --prefix backend && npm install --prefix frontend

🛠 Dependencies Used
Backend: express, mongoose, dotenv, cors, jsonwebtoken, bcrypt, nodemon

Frontend: react, react-dom, react-router-dom, react-icons, jwt-decode