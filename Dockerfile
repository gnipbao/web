FROM node:onbuild
MAINTAINER Vasiliy Yorkin "vasiliy.yorkin@gmail.com"

EXPOSE 3000
EXPOSE 3001
EXPOSE 3002

WORKDIR /src

ADD package.json /src/package.json
RUN npm install -g npm
RUN npm install

ADD .babelrc /src/.babelrc
ENV PATH /src/node_modules/.bin:$PATH
