FROM node:13-alpine

ARG API_URL
ENV API_URL=$API_URL

RUN apk --no-cache add git

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

CMD npm start
