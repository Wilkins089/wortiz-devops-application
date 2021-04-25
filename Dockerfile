FROM node:8.11

LABEL maintainer="Wilkins Ortiz, wilkins.ortiz05@gmail.com"

#Creating devops-test-app folder
RUN mkdir -p /devops-test-app

#Setting Working Directory
WORKDIR /devops-test-app

#Copy package json
COPY package.json .

#Building app
RUN npm install

#Copy files
COPY . .

#Expose port
EXPOSE 3081