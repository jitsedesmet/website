FROM node:latest AS svelte-build
LABEL authors="jitsedesmet"

WORKDIR /var/www/mushid

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM oven/bun AS runtime

WORKDIR /var/www/mushid

COPY package.json package-lock.json ./
RUN bun install --production

COPY --from=svelte-build /var/www/mushid/build /var/www/mushid/build
COPY express-src /var/www/mushid/express-src

EXPOSE 8080

ENTRYPOINT ["bun", "run", "express-src/server.ts"]
