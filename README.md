# ts-express-quickstart
## What is this?
Getting a project started can be a daunting task in Javascript-land these days because of a high number of tools available.  Scaling the mountain of boilerplate can be tough.  This template hopes to bring down the barrier-to-entry costs for devs aspiring to learn express as a technology by having everything work "out of the box".

## Should I use this?
- If your primary aim is to write a simple webserver (e.g. an API layer), but you still want to have the rigor of a formal project with tools like typescript and jest, this may be a great fit.
- If you want to write a React app, there may be better tools out there (NextJS / create-react-app)
- If you want to get better at learning webpack / configuring your toolchain, it may be a good idea to use this code for reference, but not necessarily be married to all the decisions I've made.

## How to use this:

1. Clone it via the big green 'Use this template' to make your own repo
2. As a first commit, change the package.json's name / author / repo / description fields
3. `yarn install` to get all the packages installed

# Running the server
1. `yarn dev` for dev mode
2. `yarn start` for prod mode

# Dev tools
1. `yarn ci` to run tests once
2. `yarn test` to run tests in watch mode

## Why are app and server separate files?
See: https://www.geeksforgeeks.org/why-express-app-and-server-files-kept-separately/

## What is .env.shadow?
At some point it is highly likely that you will want to start including env variables once you deploy your service.  .env.shadow is where you can create a 'shadow' version that tells your code-readers what .env variables to expect, without actually exposing all those secret keys / etc. that you'd normally store in your not-checked in .env file.

E.g., you could add to .env.shadow

```
DB_PASSWORD=
DB_HOST=
```

if you wanted to make your express server talk to a DB

The .env.shadow file is purely to help developers set up a .env file, and not actually used anywhere in the code
