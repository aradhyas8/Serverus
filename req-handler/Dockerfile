FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -

RUN apt-get upgrade -y
RUN apt-get install -y nodejs

COPY package*.json ./
COPY . .



RUN npm install
RUN npm install typescript
RUN npx tsc -b
WORKDIR ./dist

RUN node index.js

EXPOSE 3000
CMD [ "npm", "start" ]