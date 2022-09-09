# Pixels Recruitment System

System to support the recruitment of new personnel in companies

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### DEMO

The demo version is available at https://www.pixelsweb.ml/api/graphql

### Prerequisites

What things you need to install the software and how to install them

```
Node Js 16.x
NPM
IDE (recommended)
Postgres SQL
AUTH0
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Clone the repository

#### Install dependencies with yarn

```bash
npm install
```

#### Configuring environment variables

We copy the .env.example file as .env and update the information with the respective data.

```bash
cp .env.example .env
```

#### Database configuration

The database engine is PostgreSQL, for this we will use the prisma ORM and execute the migrations.

```bash
npx prisma migrate dev
npx run dev
```

## How to use

To check the endpoint you can use the [Apollo Graphql](https://studio.apollographql.com/sandbox/explorer)

```
https://YOUHOST/api/graphql
```

## Deploy (vercel)

The project can be deployed on any cloud provider, but it is configured to deploy to vercer automatically.

It is only link your repository with vercel and the deployment will be done automatically

## Author :bust_in_silhouette:

- **[Valeria Granada](https://github.com/vale0722)**
- **[Juan Zea](https://github.com/JuanZea)**
- **[Alejandro Ciro](https://github.com/alejociro)**
- **[David Mejía](https://github.com/DMRmejiar)**
- **[Andrés Vásqiez](https://github.com/vasquezsre)**

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
