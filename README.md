<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
"# PaymentSystem" 




Absolutely 💥 Let's turn this into a clean, modern, and eye-catching README for your **NestJS Auth & Payment API**. I'll use markdown best practices, improve structure, add a TOC, badge layout, emoji highlights, and make sure it's developer-friendly and *engaging*.



## 🔖 Table of Contents

- [✨ Features](#-features)
- [🧰 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [🔐 API Endpoints](#-api-endpoints)
- [🧪 Testing](#-testing)
- [🐳 Docker Deployment](#-docker-deployment)
- [🙌 Contributing](#-contributing)
- [📄 License](#-license)
- [📬 Contact](#-contact)

---

## ✨ Features

### 👤 User Authentication
- Register with email/password
- JWT login & refresh token mechanism
- Role-based route protection (USER / ADMIN)
- `bcrypt` password hashing
- Secure cookie-based token storage
- Rate limiting
- Input validation

### 💳 Payments
- Stripe Payment Intent integration
- Transaction history & tracking

---

## 🧰 Tech Stack

| Layer         | Tech                            |
|---------------|----------------------------------|
| **Framework** | [NestJS](https://nestjs.com)     |
| **Database**  | PostgreSQL + Prisma ORM          |
| **Auth**      | JWT + Passport.js                |
| **Payments**  | Stripe API                       |
| **Testing**   | Jest                             |
| **Docker**    | Optional Dockerized setup        |

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js `v16+`
- PostgreSQL
- Stripe account
- Docker (optional)

### 📦 Installation

```bash
git clone https://github.com/yourusername/payment-system
cd payment-system
npm install
```

### ⚙️ Environment Setup

```bash
cp .env.example .env
# Edit .env with your database, JWT, and Stripe keys
```

### 📂 Prisma Setup

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 🐘 Run PostgreSQL with Docker (optional)

```bash
docker-compose up -d
```

### 🏃 Run the App

```bash
# Development
npm run start:dev

# Production
npm run build
npm run start:prod
```

---

## 🔐 API Endpoints

### 🔑 Auth Routes

| Method | Endpoint        | Description                  |
|--------|------------------|------------------------------|
| POST   | `/auth/register` | Register a new user          |
| POST   | `/auth/login`    | Login and get access token   |
| POST   | `/auth/refresh`  | Refresh access token         |
| POST   | `/auth/logout`   | Logout and revoke tokens     |
| GET    | `/auth/me`       | Get current user info        |

### 💰 Payment Routes

| Method | Endpoint               | Description                          |
|--------|------------------------|--------------------------------------|
| POST   | `/payments/checkout`   | Create a Stripe payment intent       |
| GET    | `/payments/transactions` | Get authenticated user's transactions |

---

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

---

## 🐳 Docker Deployment

### 📦 Build Docker Image

```bash
docker build -t auth-payment-api .
```

### 🚀 Run Container

```bash
docker run -p 3000:3000 auth-payment-api
```

---

## 🙌 Contributing

1. 🍴 Fork this repo
2. 🔀 Create your feature branch: `git checkout -b feature/awesome-feature`
3. ✅ Commit your changes: `git commit -m 'Add awesome feature'`
4. 🚀 Push to the branch: `git push origin feature/awesome-feature`
5. 📩 Open a Pull Request

---

## 📄 License

This project is [MIT licensed](LICENSE).

---

## 📬 Contact

**Author:** Mehbubul Islam  
📧 Email: [mdmehbubulislam@gmail.com](mailto:mdmehbubulislam@gmail.com)  
🌐 Website: [https://nestjs.com](https://nestjs.com)  
🐦 Twitter: [@nestframework](https://twitter.com/nestframework)

---

> ⭐️ Star this repo if you find it helpful! Let’s build secure & scalable APIs with NestJS 🚀
```

---


## 📘 API Documentation: Authentication & Payments

> **Base URL:** `http://localhost:3000`

---

## 🧾 **Endpoints**

### ✅ Register a New User

- **Method:** `POST`  
- **URL:** `/auth/register`

#### 🧠 Body (JSON)
```json
{
  "email": "user@example.com",
  "password": "password",
  "name": "User Name"
}
```

#### 🧪 How to Test (Postman)
1. Open Postman.
2. Create a new **POST** request.
3. Set the URL to: `http://localhost:3000/auth/register`
4. In the **Body** tab, choose **raw** → **JSON**, and paste the body above.
5. Click **Send**.

---

### ✅ Login

- **Method:** `POST`  
- **URL:** `/auth/login`

#### 🧠 Body (JSON)
```json
{
  "email": "user@example.com",
  "password": "password"
}
```

#### 🧪 How to Test
1. Set the URL: `http://localhost:3000/auth/login`
2. Method: `POST`
3. Body: raw → JSON → paste above JSON
4. Click **Send**
5. ✅ You will receive:
   - `accessToken` (JWT)
   - `refreshToken` (in cookies)

---

### ✅ Get Current User Info

- **Method:** `GET`  
- **URL:** `/auth/me`  
- **Auth Required:** `accessToken` in `Authorization` header or cookie

#### 🧪 How to Test
1. After login, copy the `accessToken`.
2. Set the URL: `http://localhost:3000/auth/me`
3. Method: `GET`
4. Go to **Headers** → add:
   - `Authorization`: `Bearer YOUR_ACCESS_TOKEN`
5. Click **Send**  
✅ Returns current user’s data.

---

### ✅ Refresh Token

- **Method:** `POST`  
- **URL:** `/auth/refresh`  
- **Auth Required:** `refreshToken` (sent as cookie)

#### 🧪 How to Test
1. After login, your cookies should include `refreshToken`.
2. Set the URL: `http://localhost:3000/auth/refresh`
3. Method: `POST`
4. If using cookies in Postman:
   - Cookies should be automatically handled if login was in the same session.
   - Otherwise, manually set `refreshToken` in Postman cookies.
5. Click **Send**
✅ Returns a new `accessToken`.

---

### ✅ Logout

- **Method:** `POST`  
- **URL:** `/auth/logout`  
- **Auth Required:** `accessToken` in headers

#### 🧪 How to Test
1. Set the URL: `http://localhost:3000/auth/logout`
2. Method: `POST`
3. Headers:
   - `Authorization`: `Bearer YOUR_ACCESS_TOKEN`
4. Click **Send**

---

## 💳 Payments

### ✅ Create Payment

- **Method:** `POST`  
- **URL:** `/payments/checkout`  
- **Auth Required:** `accessToken`

#### 🧠 Body (JSON)
```json
{
  "amount": 100,
  "description": "Test payment"
}
```

#### 🧪 How to Test
1. Login and get the `accessToken`.
2. Set the URL: `http://localhost:3000/payments/checkout`
3. Method: `POST`
4. Headers:
   - `Authorization`: `Bearer YOUR_ACCESS_TOKEN`
5. Body: raw → JSON → paste JSON above
6. Click **Send**

✅ You should get a Stripe session or confirmation response.

---

### ✅ Get Transactions

- **Method:** `GET`  
- **URL:** `/payments/transactions`  
- **Auth Required:** `accessToken`

#### 🧪 How to Test
1. Set the URL: `http://localhost:3000/payments/transactions`
2. Method: `GET`
3. Headers:
   - `Authorization`: `Bearer YOUR_ACCESS_TOKEN`
4. Click **Send**
✅ Returns all transactions for the user.

---

## 🔐 Authentication Summary

| Endpoint         | Method | Auth Required      | Description                  |
|------------------|--------|--------------------|------------------------------|
| `/auth/register` | POST   | ❌ No               | Register new user            |
| `/auth/login`    | POST   | ❌ No               | Login with email/password    |
| `/auth/me`       | GET    | ✅ Access token     | Get current user info        |
| `/auth/refresh`  | POST   | ✅ Refresh token    | Refresh access token         |
| `/auth/logout`   | POST   | ✅ Access token     | Logout user                  |

---

## 💸 Payments Summary

| Endpoint                     | Method | Auth Required   | Description                     |
|------------------------------|--------|-----------------|---------------------------------|
| `/payments/checkout`        | POST   | ✅ Access token  | Create a new payment            |
| `/payments/transactions`    | GET    | ✅ Access token  | Get all user’s transactions     |

---

