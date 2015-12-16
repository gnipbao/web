FROM heroku/nodejs:latest

RUN gulp build --production
