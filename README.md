## Title:

### Jacopo Rodighiero - Adidas Challenge Email Service  Api

-----------------------------------------

## Technologies Used:

#### Nodejs version: 14.16.0

#### Framework: Nestjs

#### Packages: Handlebars, Nodemailer

#### Documentation: @nestjs/Swagger

--------------------------------------------------------------------------------------------

## Api Overview:

This service has been built to send a template confirmation email created with Handlebars in folder ./templates. The .env.test file includes hardcoded and example mail server configurations for example purpouse, they can be configured via smtp (Simple Mail Transfer Protocol).

## Installations:

You would need NVM and Nodejs installed in your machine.

## To run the app:

`$ npm run start:dev || $ npm run start`

----------------------------------------------------------------------------------------------------

## Docker Instructions:

To build docker image: `$ docker build -t yourusername/yourtitle`

To run your image : `$ docker run -p 5000:5001  yourImageId `

To compose docker: `$ docker-compose up` and once finished `$ docker-compose down`

---------------------------------------------------------

## Documentation:

The swagger documentation and endpoints can be found at app running `http:localhost:3002/api` 

