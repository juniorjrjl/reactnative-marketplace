FROM node:18.1

RUN apt-get update && apt-get install -qq -y --no-install-recommends

ENV INSTALL_PATH /reactnative-marketplace

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

RUN npm i nodemon@^2.0.20 -g

COPY package*.json ./

RUN npm i

COPY . .