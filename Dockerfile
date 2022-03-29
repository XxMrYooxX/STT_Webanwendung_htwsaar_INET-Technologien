FROM node:14-bullseye



RUN mkdir node

WORKDIR ./node/

COPY package*.json .


RUN npm install 

COPY . .

EXPOSE 3000

CMD node server.js