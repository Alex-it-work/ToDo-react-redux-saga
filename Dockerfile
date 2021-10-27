FROM node:16.12.0-alpine3.13

RUN mkdir client

WORKDIR /client

COPY . .

RUN npm i

EXPOSE 3000

CMD npm start
