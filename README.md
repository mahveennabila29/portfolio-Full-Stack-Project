# Portfolio Project

This is a full-stack portfolio project consisting of a React frontend and a Node.js/Express backend.

## Project Structure

- `frontend/`: React application for the portfolio website.
- `backend/`: Node.js backend with Express server and SQLite database.

## Setup and Running

### Frontend

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

### Backend

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   node server.js
   ```

## Notes

- The backend uses SQLite for storing contact messages.
- The `messages.db` file is ignored in Git to avoid committing the database.
- Make sure to have Node.js and npm installed.

## Deployment

- Build the frontend for production using `npm run build` in the frontend directory.
- Configure the backend server to serve the built frontend files or deploy separately.
