FROM vyorkin/starter-kit:latest
MAINTAINER Vasiliy Yorkin "vasiliy.yorkin@gmail.com"

COPY . /usr/src/app

CMD ["npm", "start"]
