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




Auth & Payment API with NestJS
NestJS
PostgreSQL
Prisma
JWT

A secure REST API for user authentication and payments built with NestJS, PostgreSQL, Prisma, and JWT authentication.

Features
User Authentication

Registration with email/password

Login with JWT tokens

Refresh token mechanism

Protected routes with role-based access (USER/ADMIN)

Payments

Stripe payment integration

Transaction recording

Payment status tracking

Security

Password hashing with bcrypt

Rate limiting

Secure cookie storage for tokens

Input validation

Tech Stack
Backend: NestJS

Database: PostgreSQL with Prisma ORM

Authentication: JWT with Passport.js

Payment: Stripe API

Testing: Jest

Prerequisites
Node.js (v16+)

PostgreSQL

Docker (optional)

Stripe account (for payment processing)

Installation
Clone the repository:

bash
Copy
git clone https://github.com/yourusername/auth-payment-api.git
cd auth-payment-api
Install dependencies:

bash
Copy
npm install
Set up environment variables:

bash
Copy
cp .env.example .env
Edit the .env file with your configuration.

Set up PostgreSQL database (see Database Setup)

Run database migrations:

bash
Copy
npx prisma migrate dev --name init
Generate Prisma client:

bash
Copy
npx prisma generate
Database Setup
Option 1: Local PostgreSQL
Create a database:

sql
Copy
CREATE DATABASE auth_payment_db;
Update your .env file:

Copy
DATABASE_URL="postgresql://username:password@localhost:5432/auth_payment_db?schema=public"
Option 2: Docker
Run PostgreSQL container:

bash
Copy
docker-compose up -d
Running the Application
Development mode:

bash
Copy
npm run start:dev
Production mode:

bash
Copy
npm run build
npm run start:prod
API Endpoints
Authentication
Method	Endpoint	Description
POST	/auth/register	Register new user
POST	/auth/login	Login user
POST	/auth/refresh	Refresh access token
POST	/auth/logout	Logout user
GET	/auth/me	Get current user info (protected)
Payments
Method	Endpoint	Description
POST	/payments/checkout	Create payment intent
GET	/payments/transactions	Get user transactions (protected)
Testing
Run unit tests:

bash
Copy
npm run test
Run e2e tests:

bash
Copy
npm run test:e2e
Docker Deployment
Build the Docker image:

bash
Copy
docker build -t auth-payment-api .
Run the container:

bash
Copy
docker run -p 3000:3000 --env-file .env auth-payment-api
Environment Variables
Variable	Description	Example
DATABASE_URL	PostgreSQL connection URL	postgresql://user:pass@localhost:5432/db
JWT_SECRET	Secret for JWT signing	your-secret-key
JWT_EXPIRATION	Access token expiration time	3600s (1 hour)
REFRESH_TOKEN_SECRET	Secret for refresh tokens	your-refresh-secret
REFRESH_TOKEN_EXPIRATION	Refresh token expiration time	7d (7 days)
STRIPE_SECRET_KEY	Stripe API secret key	sk_test_...
Project Structure
Copy
src/
├── auth/               # Authentication module
│   ├── dto/            # Data transfer objects
│   ├── strategies/     # Passport strategies
│   ├── auth.service.ts # Business logic
│   └── auth.controller.ts # Routes
├── payments/           # Payments module
├── prisma/             # Database configuration
├── common/             # Shared utilities
└── main.ts             # Application entry point
Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

License
Distributed under the MIT License. See LICENSE for more information.

Contact
Email - mdmehbubulislam@gmail.com

Project Link: https://github.com/MD-MEHBUB-UL-ISLAM/PaymentSystem

