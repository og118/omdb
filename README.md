# omdb
og118's movie database. A Movie library cum review platform with recommendations, discussion forums, guides, and whatnot 

## Setup Instructions:
Make sure you have `nodejs` installed on your machine. If not, install it from [here](https://nodejs.org/en/)\
The Node.js installer usually includes the NPM package manager

Also, install `nvm` ([link](https://github.com/nvm-sh/nvm#installing-and-updating)): Node version manager to ease the version switching of node and npm


The project uses `lts/fermium` versions of node(v14.19.3) and npm(v6.14.17) 

Install the `lts/fermium` version of node and npm using

    nvm install lts/fermium

Use the `lts/fermium` version using

    nvm use lts/fermium

To install the relevant modules required to run the server locally, use

    npm install

**Note:** The above instructions set up the appropriate version of node and npm required to run the server and are only a one-time thing.

And that's about it! You should be able to run the server on your machine! Use the following command

    node server.js

Or use [nodemon](https://github.com/remy/nodemon) to make life easier

    nodemon server.js