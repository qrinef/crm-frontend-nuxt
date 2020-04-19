FROM node:13-alpine

RUN apk --no-cache add git

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build
