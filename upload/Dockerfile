
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN apt-get install -y git && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY . .

RUN npm install typescript && \
    npx tsc -b


EXPOSE 3000

CMD ["node", "dist/index.js"]

