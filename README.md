# gdp-mapping

# Project Setup
# Required software
1. Install Node.js (download from: https://nodejs.org/en/download/)
2. Install MongoDB (download from: https://www.mongodb.com/)
3. Install MongoDB IDE Studio 3T (download from: https://studio3t.com/)
After installing the required software, download the project folder to your local machine

# Setting up the Database
After installing MongoDB, go the installed folder and open command prompt inside the "bin" folder. Type "mongod" to start the server
Next, we need to populate our DB with data.
1. Open MongoDB IDE, 3T studio and connect to your local.
2. Right click on the local server and select "import"
3. Select CSV and click next
4. Click the folder icon and go to your project folder. Select "Countries.csv" file and click next. 
5. Choose 'Tab' as the delimiter and click next for few selection until 'Start Import' button is enabled
6. Click Start Import to complete importing our DB.

# Starting the app
Before starting the app, we have to ensure all the dependencies have been installed. So, open command prompt in the project folder and type "npm install". This will install all the dependencies required for the project.
To start our app, just type 'node server' in the command prompt and the app can be accessed in the browser by typing "http://localhost:3000"

# Libraries and Software
1. AngularJs
 * AngularJs is a javascript framework. In this project, the version of AngularJS used is AngularJS 1.6. With its MVC (Model, view & controller) concept, it is easier to develop a dynamic view website. It also utilises reusability of components which reduce the need of duplicating HTML code. AngularJS is also easy to learn as it uses plain javascript. It is the first javascript framework that I learned. 
2. Bootstrap
 * Bootstrap is a CSS library. It used the concept of mobile-first which make developing a responsive website much easier. Bootstrap also has a lot of CSS classes which make styling our website much easier.
3. NodeJS
 * NodeJS is an application runtime environment which allows us to write a server-side application in javascript. It serves as the backend of this app. It lightweight and suitable for simple project that requires the backend to only provides a JSON API. One of the main reason I choose NodeJS is because I don't have experience in backend. NodeJS is using javascript to code which make it easier code for someone with mostly Javascript background.
4. MongoDB
 * MongoDB is a NoSQL database. It stores data in JSON-like document. So, it makes the API call much easier and faster. 
5. Studio 3T
 * Studio 3T is an IDE for MongoDB. It is easy to used and allows me to import CSV file to JSON-like document easier. I have the countries data in form of CSV files and importing it into the DB is very easy.
6. ExpressJS
 * Express is an application framework for NodeJS. It allowed us to create API quickly and easily
7. AngularChartJS
 * AngularChartJS is an AngularJS library in form of directive. It is based on ChartJS. AngularChartJS is a great library which allowed us to create chart mixed type of charts easily
