FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install typescript --save-dev
COPY . .


RUN npx tsc -b


CMD ["node", "dist/index.js"]


