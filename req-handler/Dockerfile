
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_OPTIONS=--max-old-space-size=8192

EXPOSE 3001

CMD ["node", "dist/index.js"]

