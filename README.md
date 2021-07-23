



# Frog Photo App
## _The place where you can search and see cool pictures

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

- ✨Frog photo app is a  cool app in which you can view/search  cool pictures from unsplash

## Features

- Multi step register / login
- Home: See the latest image uploads to unsplash api and see cool content.
- Search: You can search through the unsplash api and see cool pictures
- Profile: You could see your data depending on your register, see some cool pictures from unsplash.
- Profile/settings: You could update your user data.

### Server
- The server is based on NodeJS/Express/Graphql/Apollo/Postgres/Redis/
- User: The user will be able to register and login through the server.
- Note: I deployed the server in order to have the server ready, because we need a Postgres DB and Redis DB.
- Server hosted in: https://frog-photo-app.herokuapp.com/graphql

# Installation

## Frontend

### `yarn install`
To use the app navigate to this project directory, run `yarn install` to install dependencies (this takes a couple minutes)

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `yarn test`

Launches the test runner.


## Server

In order to use the server you should create a *PostgresDB* and a *RedisDB*.

After your have your DB'S ready, you will need to create an .env file with something like this:

`DATABASE_URL=postgresql://alvaro.castillo@localhost:5432/frogphoto`
`REDIS_URL=127.0.0.1:6379`
`PORT=8000`
`SESSION_SECRET=qowiueojwojfalksdjoqiwueo`
`CORS_ORIGIN=http://localhost:8080`

After that, you could start with the installation, build and start.

### `yarn install`
To use the app navigate to this project directory, run `yarn install` to install dependencies (this takes a couple minutes)

### `yarn tsc -w`
This will make a build and wait for changes in watch mode.

### `yarn dev`
This will start the server in the development mode on the port  [http://localhost:8000](http://localhost:8000)

## License

MIT

**Free Software, Hell Yeah!**
