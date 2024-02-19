
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_OPTIONS=--max-old-space-size=8192
RUN npm install typescript && \
    npx tsc -b


EXPOSE 3000

CMD ["node", "dist/index.js"]

