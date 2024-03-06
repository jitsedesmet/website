FROM node:latest

COPY package-lock.json package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "run"]

