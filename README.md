# Take-home assignment by Nuno Rodrigues

This is a full-stack web application for reviewing securities. It features a backend REST API, connected to a PostgreSQL database hosted by Prisma Postgres. The frontend runs on a React SPA.

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

- Compliant with REST best practices, including versioning and detailed JSON responses
- Global error checking and reporting, plus specific error checking and reporting for one route

> [!NOTE]
> I understand financial data should always be transmitted over HTTPS to ensure security and data integrity. However, for the purposes of this exercise and to simplify the setup by avoiding the need for generating SSL certificates, this application will use HTTP.

### Backend

- CORS support (in conjunction with the Vite proxy feature)
- `.env` environment variable validation, with type-safe global config object
- Foundation for more complex route structure

### Database

- Soft delete functionality
- Error-reporting

> [!NOTE]
>
> - The database is hosted by Prisma Postgres, at their free tier. Performance may not be optimal.
> - Integer auto-incrementing indexes were used instead of more performance-taxing UUIDs.
> - The original plan was to use database transactions for seeding, starting with entries in the Security model and then adding corresponding entries in the Price model. This approach would ensure that if any part failed, the entire operation would roll back. However, due to timeout errors, I had to switch to individual operations. I suspect these stricter timeout limits are because Prisma PostgreSQL is a serverless database.

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

- PostgreSQL 16
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

> [!NOTE]
> In production, `.env` files are not committed to version control for security reasons, Since this is a private repository for an assignment intended for review, the `.env` files were originally included but  now removed.

### 1. Clone the Repository

Start by cloning the repository to your local machine. Run the following command in your terminal:

```bash
git clone https://github.com/NVR-2023/NVR-2023-01-Engine-AI-take-home-assignment
```

### 2. Run the Installation Script

After cloning the repository locally, navigate to the root directory of the cloned project and run the following script:

```bash
npm run install:all
```

This script will:

1. Install global dependencies
2. Install package `backend`and `frontend` dependencies
3. Generate a Prisma client to interact with the PostgreSQL database
4. Start both the backend server and the frontend server concurrently

### 3. Open the Browser

Once the servers are running, press Ctrl + Click the link to open a browser window at the port specified by Vite.

## API Endpoints

### `GET /api/v1/private/securities`

- Returns an array of objects representing all securities in the database.
- Format:

```json
{
  "ok": true,
  "status": 200,
  "message": "List of securities successfully retrieved",
  "data": [
    {  "id": ,
      "ticker": ,
      "securityName": ,
      "sector": ,
      "country": ,
      "trend":},

    {  "id": ,
      "ticker": ,
      "securityName": ,
      "sector": ,
      "country": ,
      "trend":}
    ]
}
```

### `GET /api/v1/private/securities/prices/:id`

- Returns an object containing all information from the database for the specified security `id`. This includes detailed security information and an array of objects representing the close price and volume data. The `id` must be an integer between 11 and 33.

- Format:

```json
{
  "ok": true,
  "status": 200,
  "message": "List of security details and prices successfully retrieved",
  "data": {
    "security": {
      "id": ,
      "ticker": ,
      "securityName": ,
      "sector": ,
      "country": ,
      "trend":
    },
    "prices": [{},{}]
}
}
```

> [!NOTE]
> This route has error-checking and will issue an error if the id is not a positive integer, or doesn't fall within range

## Frontend Pages and Routes

The frontend app shows a list of securities and includes a graph representing the evolution of a given security's close price and transaction volume over time.

### Pages:

> [!NOTE]
> Due to time constraints, I focused on optimizing the app for laptop and desktop screens, using Polypane, a specialized browser for developers. This approach involved overriding some of Material UI's native mobile adaptive behaviors to deliver a better experience on larger screens. Given a longer development cycle, I would ensure full implementation of mobile responsiveness.

### `/`

Display the Landing page.

### `/security-list`

Displays a list of securities.

### `/security-detail/:symbol`

Displays a graph of close prices and transaction volumes of security `symbol`.

> [!NOTE]
> In addition to failed loading state error, this page has client-side error checking. If `symbol` is not valid, it will issue a toast with an error message and redirect to the security list page after 3 seconds.

> [!NOTE]
> The app always fetches data from the PostgreSQL database, in accordance with the assignment requirements. In a production application, caching mechanisms such as the Cache API, IndexedDB, or other server-side alternative like Redis would typically be implemented to enhance performance and reduce load times. Additionally, a stale data check would also be used to ensure that data is refreshed at appropriate intervals.

## Tests

A unit test has been created with Jest:

**Backend test**

- Tests getPricesBySecurityId() API endpoint controller function
- Results:

```plaintext
 PASS  src/_tests_/get-prices-by-security-id.test.ts
  getPricesBySecurityId
    √ should return a successful response when the Id is valid and database function succeeds (4 ms)                                    
    √ should return a validation error if the Id is invalid (2 ms)
    √ should handle database errors (25 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.683 s, estimated 2 s
Ran all test suites.
```

> [!NOTE]
> Since this is an assignment, and due to time constraints, no integration or end-to-end tests were implemented. For the sake of brevity, frontend tests with React Testing Library were also excluded. The included test is meant to serve as proof-of-concept and showcase how to run basic unit testing with Jest.

To run the test, go to the root directory of `backend` package and run the following command:

```bash
npm run test
```

## Author

This project was developed by Nuno Rodrigues in November 2024