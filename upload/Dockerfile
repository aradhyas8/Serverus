
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN apt-get install -y git && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY . .

ENV NODE_OPTIONS=--max-old-space-size=8192

EXPOSE 3000

CMD ["node", "dist/index.js"]

