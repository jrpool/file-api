# file-api
HTTP API using a server’s filesystem as a database.

## Project Members

[Jonathan Pool](https://github.com/jrpool)

## modules

```
app.js
```

## Discussion

### General

This application demonstrates the use of a server’s filesystem as a database and the [`express` package][exp] to create, destroy, read, and modify the database in response to HTTP requests received by the server.

The demonstration takes the form of a quotation-list manager. You can use it to add a quotation to the list, remove a quotation from it, and replace a quotation with another other quotation.

The API receives and transmits data as JSON-compliant strings.

The application fulfills the requirements of the “RESTful Routing” module in Phase 2 of the [Learners Guild][lg] curriculum, and specifically the “RESTful Routing Using Files” exercise in that module.

## Installation and Setup

0. These instructions presuppose that (1) [npm][npm] and [cURL][curl] are installed.

1. Your copy of this project will be located in its own directory, inside some other directory that you may choose or create. For example, to create that parent directory inside your own home directory’s `Documents` subdirectory and call it `projects`, you can execute:

    `mkdir ~/Documents/projects`

Make that parent directory your working directory, by executing, for example:

    `cd ~/Documents/projects`

2. Clone this project’s repository into it, thereby creating the project directory, named `file-api`, by executing:

    `git clone https://github.com/jrpool/file-api.git file-api`

2. Make the project directory your working directory by executing:

    `cd file-api`

3. Install required dependencies (you can see them listed in `package.json`) by executing:

    `npm i`

## Usage and Examples

To start the application, execute `npm start` (or, if under Windows, `npm run startwin`).

To create a quotation entry, execute (for example):

`curl http://localhost:3000/api/quotes -d '{"quote": "I can’t lie.", "author": "George Washington"}'`

To retrieve a quotation entry, execute (for example):

`curl http://localhost:3000/api/quotes/1`

To replace (e.g., to correct) a quotation entry, execute (for example):

`curl --request PUT http://localhost:3000/api/quotes/1 -d '{"quote": "I cannot tell a lie.", "author": "George Washington"}'`

To delete a quotation entry, execute (for example):

`curl --request DELETE http://localhost:3000/api/quotes/1`

To perform linting, execute `npm run lint`.

[curl]: https://curl.haxx.se
[lg]: https://www.learnersguild.org
[npm]: https://www.npmjs.com
