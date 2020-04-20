FROM node:13-alpine

RUN apk --no-cache add python make g++ git

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

CMD npm start
