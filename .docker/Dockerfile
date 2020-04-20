FROM node:13-alpine AS node

RUN apk --no-cache add python make g++ git

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:stable-alpine

COPY .docker/nginx/default.conf etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

COPY /app/dist .
