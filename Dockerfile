FROM node:latest
MAINTAINER Vasiliy Yorkin "vasiliy.yorkin@gmail.com"

RUN mkdir -p /usr/src/app
ADD package.json /usr/src/app
WORKDIR /usr/src/app
RUN npm install
