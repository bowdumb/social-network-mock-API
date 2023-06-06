# Social Network API

## Description

This application is intended to serve as a demonstration of the back-end functionality of a fictional social media website. Using the Mongoose.js JavaScript object-oriented programming library to create a connection between the Node.js back-end JavaScript runtime environment and a MongoDB database, alongside the Express.js server framework that allows us to build a RESTful API routes, we are able to observe the ways in which we can interact with the contents of the database, as well as the relationships between the data itself. While this application certainly mimmics the back-end of some core social media functionality, because the client-side content has not been developed the user is intended to use the Insomnia software (or equivalent) to test the validity of these API routes. Additionally, the user may modify data in the database and experiment with the existing route to better learn their functionality for use within their own projects.

## Installation

To install this application, begin by cloning the following GitHub repository to your local machine: <a href="https://github.com/claxCode/social-network-mock-API">https://github.com/claxCode/social-network-mock-API</a>. Once the necessary files have been imported to your machine, navigate in your terminal to the root directory containing the repository, and run npm i to install the necessary NPM package dependencies as detailed within the included package.json file. These dependencies include the Express.js, and Mongoose.js NPM packages. Both of these NPM packages require the Node.js runtime environment, so this must be installed independently of the aforementioned software. Additionally, the Nodemon NPM is not listed as a developer dependency and is not required for using this application. However, it's use is recommended as it enables the application to be reinitialized every time a change to the codebase occurs. This is particularly useful when testing the validity of API routes, as the efficacy of changes can be observed in real time.

## Usage

Once the necessary NPM dependencies have been downloaded and successfully installed, navigate in your terminal to the repository's root directory and invoke the application by running `npm start`. Should you need to kill the application at any time, pressing `control+C` will disconnect the server and reenable normal terminal access. When the application is run, the 'socialDB' MongoDB database will be created. While all of the models and schemas have already been defined within the application, there is no provided seed data. It is recommended that the provided API routes are used to add data to the database. Alternatively, if the use of a GUI is preferred the MongoDB Compass software may be used to add and manipulate data within the database. In order to test the full functionality of this application, the use of HTTP-based API testing software such as Insomnia will be required. At this point, you are able to test the functionality of the established API routes by using Insomnia to test the GET, POST, PUT, and DELETE routes for each respective route and the associated data. Comments have been left within the codebase in order to simplify the process and further define the URLs for each respective route. A full list of these routes can be found within apiRoutes.js file.

## Features

This is entirely a back end application, and therefore the heavy lifting is all done by Express.js and Mongose.js. The sole intent is for the user to be able to view and manipulate database content in an environment that mimics some of the core features of a social media application. Because there is no front end, the user must utilize the Insomnia software in order to manipulate the database content. This creates an ideal environment to both familiarize oneself with the architecture of Mongoose.js routing, as well as to experiment with their own routes and data within the MongoDB database.

## Screenshots

Screenshot of route to GET all thoughts
![Screenshot of route to GET all thoughts](./assets/Screenshot%202023-06-04%20at%2011.01.04%20PM.png)

Screenshot of route to GET individual user by ID
![Screenshot of route to GET individual user by ID](./assets/Screenshot%202023-06-04%20at%2011.01.29%20PM.png)

## Contact

For questions regarding this application or it's usage, please feel free to contact me on LinkedIn at this <a href="https://www.linkedin.com/in/joshua-claxton-916a2a272/">link</a>

## Video Demonstration

<a href="https://drive.google.com/file/d/1yFlq56WpIlF0bfvseXNpvOsPB6W6whs_/view">Click here for a video demonstration</a>