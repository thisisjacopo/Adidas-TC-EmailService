FROM node:12

WORKDIR /emailservice

COPY package*.json ./

RUN npm install

COPY . /emailservice

EXPOSE 5000

CMD [ "npm", "run", "start:dev" ]