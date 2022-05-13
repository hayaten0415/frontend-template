FROM node:18-slim as builder

WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn
COPY . /app
RUN yarn build