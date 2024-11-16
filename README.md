
# Engine AI Take-Home Assignment by Nuno Rodrigues

This is a full-stack mini application with a backend REST API and a React SPA frontend. The backend includes two GET endpoints connected to a PostgreSQL database, and the frontend is built using React.

The repository is structured as a private monorepo, with two packages: `backend` and `frontend`.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Frontend Pages and Routes](#frontend-pages-and-routes)
- [Tests](#tests)
- [Author](#Author)

## Features

### RESTful API

- Compliant with REST best practices, including versioning and JSON responses
- Global error checking and reporting, plus specific error checking and reporting for one individual route

> [!NOTE]
> I understand financial data should always be transmitted over HTTPS to ensure security and data integrity. However, for the purposes of this exercise and to simplify the setup by avoiding the need for generating SSL certificates, this application will use HTTP. 

### Backend

- CORS support ( in conjunction with Vite proxy feature)
- `.env`Environment variable validation

### Database

- Soft delete functionality
- Error-reporting

> [!NOTE]
>- The database is hosted by PrismaPostgreSQL, at their free tier. Performance could be better.
>- Integer auto-incrementing indexes were used instead of more performance-taxing UUIDs.
>- The original plan was to use database transactions for seeding, starting with entries in the Security model and then adding corresponding entries in the Price model. This would ensure that if any part failed, the entire operation would roll back. However, due to timeout errors, I had to switch to individual operations. I suspect the stricter timeout limits are due to Prisma PostgreSQL being a serverless database.

### Frontend

- Loading and failed loading states for both pages, with toast notification 
- Client-side Symbol error checking and reporting with redirection

## Technologies

**Language:**
- TypeScript 5.6

**Backend:**
- Node.js 20.9
- Express.js 4.2
- dotenv 1.3 (for environment variable management)
- CORS 2.8 (for cross-origin resource sharing support)
- Zod 3.2 (for validation)

**Database:**
- PostgreSQL 16 (hosted by PrismaPostgreSQL)
- Prisma ORM 5.2

**Frontend:**
- Vite 5.4
- React 18.3
- Material UI 6.1
- Tailwind CSS 3.4
- Highcharts 11.4

**Testing:**
- Jest.js 29.7

## Installation

### 1. Check the `.env` File

Ensure you have a `.env` file in the root directory of the `backend` package. 

> [!NOTE]
> In production, `.env` files are not committed to version control for security reasons, Since this is a private repository for an assignment, intended for review, the `.env` files have been included.

Content of the `backend` `.env` file:

```plaintext
NODE_ENV="development"
PORT="3000"

API_BASE_URL="/api/v1/"
DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiOTQ2OThiZTctYzYzMy00Y2MzLWE5MDYtMDhlNmNkZWFhZGU3IiwidGVuYW50X2lkIjoiYjc0NGQ2M2NmMjIzNjdiNDRkYWE5NTFlNDU2YWQ3OTljMWQ1OTdkZTI5NWNjNjg2ODljMTM1NWVkYzJmYWQ2MyIsImludGVybmFsX3NlY3JldCI6ImE0ODZiZTJlLWRiOTMtNGUyNS1hZmNhLWIyOTEzZDNlM2QwNyJ9.ojxetDVFjSHtnD3lLo15f_QlEu5TR3SVT7Q6k_HQzrI"
PULSE_API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiOTQ2OThiZTctYzYzMy00Y2MzLWE5MDYtMDhlNmNkZWFhZGU3IiwidGVuYW50X2lkIjoiYjc0NGQ2M2NmMjIzNjdiNDRkYWE5NTFlNDU2YWQ3OTljMWQ1OTdkZTI5NWNjNjg2ODljMTM1NWVkYzJmYWQ2MyIsImludGVybmFsX3NlY3JldCI6ImE0ODZiZTJlLWRiOTMtNGUyNS1hZmNhLWIyOTEzZDNlM2QwNyJ9.ojxetDVFjSHtnD3lLo15f_QlEu5TR3SVT7Q6k_HQzrI"
```

### 2. Install Dependencies
Run the following command from the root of the project to install all dependencies. Since the project is using `npm packages`to manage dependencies,the following command will install those of the root `package.json` as well as in the `backend` and `frontend` packages:

```bash
npm install
```

### 3. Start the servers
To start both the backend server and the frontend server concurrently, execute the following command from the root of the project:

```bash
npm run dev
```

Alternatively, you can start each server individually by navigating to each package's directory and running:

```bash
npm run dev
```

## API Endpoints

### `GET /api/v1/private/securities`
Returns an array of objects representing all securities in the database.

### `GET /api/v1/private/securities/prices/:id`
Returns an array of objects representing the dated price and volume data for a security identified by the `id`. The `id` must be an integer between `11` and `33`.

> [!NOTE]
> This route has error-checking and will issue an error if the id is not a positive integer, or doesn't fall within range

## Frontend Pages and Routes
The frontend app shows a list of securities and includes a graph representing the evolution of a given security's close price and transaction volume over time.

### Pages:

### `/` 
Display the Landing page.  

### `/security-list` 
Displays a list of securities.  

### `/security-detail/:symbol` 
Displays a graph of close prices and transaction volumes of security `symbol`.
> [!NOTE]
> This page has client-side error checking. If `symbol`is not valid, it will issue a toast with an error message and redirect to the security list page after 3 seconds.

## Tests
A unitary test has been created with Jest,js:

**Backend test** 
- Tests functionality of endpoint `GET /api/v1/private/securities/prices/:id`

> [!NOTE]
> Since this is an assignment, no integration or end-to-end tests were implemented. For brevity sake, frontend tests with React Testing Library were also excluded. The included test is meant to serve as proof of concept and showcase how to run basic unit testing with Jest.js.

To run the test, go to the root directory of `backend` package and run the following command:

```bash
npm run test
```

## Author
This project was developed by Nuno Rodrigues in November 2024, as a take-home assignment for Engine AI.
