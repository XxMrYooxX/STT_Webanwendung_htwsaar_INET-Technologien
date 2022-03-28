FROM node:14.18.3-alpine

RUN apk update && apk add --no-cache libc6-compat gcompat 

RUN mkdir node

WORKDIR ./node/

COPY package*.json .


RUN npm install 

COPY . .

EXPOSE 3000

CMD node server.js