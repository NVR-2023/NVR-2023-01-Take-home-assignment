
# Engine AI Take-Home Assignment by Nuno Rodrigues

This is a full-stack mini application with a backend REST API and a React SPA frontend. The backend includes two GET endpoints connected to a PostgreSQL database, and the frontend is built using React.

The repository is structured as a private monorepo, with two packages: `backend` and `frontend`.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Frontend Pages and Routes](#frontend-pages-and-routes)
- [API Endpoints](#api-endpoints)
- [Tests](#tests)
- [Contributing](#contributing)

## Features

### RESTful API

- Compliant with REST standards, including versioning and JSON responses
- Strict error checking and reporting

Technical note:
- Since the financial information provided is public, regular HTTP, not HTTPS, is used. 

### Backend

- CORS support
- Environment variable validation and configuration

### Database

- Soft delete functionality
- Detailed error reporting

Technical notes:
- The database is hosted by Prisma ORM. Performance has been notoriously slow.
- Integer auto-incrementing indexes were used instead of more performance-taxing UUIDs.
- The original goal was to use transactions for the seeding function, creating first entries in the Security table and then the respective entries in the Prices table, so that if any of the two failed, the whole operation would fail. However, since I was getting timeout errors, I dropped the atomic transactions and reverted back to regular singular operations. I suspect that since Prisma PostgreSQL is a serverless database, the timeout limits are stricter.

### Frontend

- Client-side validation

## Technologies

**Language:**

- TypeScript 5.6

**Backend:**

- Node.js 20.9
- Express.js 4.2
- dotenv (for environment variable management)
- CORS (for cross-origin resource sharing support)
- Zod 3.2 (for validation)

**Database:**

- PostgreSQL 16 (hosted by Prisma PostgreSQL)
- Prisma ORM 5.2

**Frontend:**

- Vite 5.4
- React 18.3
- Material UI
- Tailwind CSS
- Highcharts 11.4

## Installation

### 1. Create the `.env` File

Ensure you have a `.env` file in the root directory of the `backend` package. Typically, `.env` files are not committed to version control for security reasons, but since this is a private repository intended for review as an assignment, the `.env` files have been included.

Example content of the `backend` `.env` file:

```plaintext
NODE_ENV="development"
PORT="3000"
API_BASE_URL="/api/v1/"
DATABASE_URL="prisma+postgres://your-database-url"
PULSE_API_KEY="your-api-key"


2. Install Dependencies
Run the following command from the root of the project to install all dependencies, including those in the root package.json as well as in the backend and frontend packages:

bash
npm install
3. Start the Development Servers
To run both the backend server and the frontend server concurrently, execute the following command from the root of the project:

bash
Copiar código
npm run dev
Alternatively, you can start each server individually by navigating to each package's directory and running:

bash
Copiar código
npm run dev
Frontend Pages and Routes
The frontend application displays details about securities and includes a graph representing the evolution of security close prices and transaction volumes.

Pages:

"/" – Landing page
"/security-list" – Displays a list of all securities
"/security-detail/" – Displays a graph of close prices and transaction volumes for a security identified by the symbol


API Endpoints

GET /api/v1/private/securities
Returns an array of objects representing all securities in the database.

GET /api/v1/private/securities/prices/:id
Returns an array of objects representing the dated price and volume data for a security identified by the id. The id must be an integer between 11 and 33.

Tests
Two simple tests have been created with Jest:

Backend test – A test to verify backend functionality.
Frontend form test – A test to check frontend form handling.
These tests are not thorough; they are meant to be proof of concept to demonstrate how to perform tests with Jest for both the backend and frontend.

To run the tests, use the following command:

bash
npm run test

Contributing
This project was developed by Nuno Rodrigues in November 2024.