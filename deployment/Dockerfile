FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install typescript --save-dev
COPY . .


COPY dist ./dist

CMD ["node", "dist/index.js"]


