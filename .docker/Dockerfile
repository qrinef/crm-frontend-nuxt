FROM node:13-alpine

RUN apk --no-cache add python git

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build
