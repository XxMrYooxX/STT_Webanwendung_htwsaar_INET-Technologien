FROM node:14.19.1-alpine3.15

RUN mkdir node
COPY . ./node
WORKDIR ./node/

RUN npm install 

EXPOSE 3000

CMD node server.js