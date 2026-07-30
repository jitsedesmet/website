FROM node:latest AS svelte-build
LABEL authors="jitsedesmet"

WORKDIR /var/www/mushid

COPY package.json package-lock.json ./

# --ignore-scripts: package.json's "prepare" script needs .husky/, which
# isn't copied in until after this step; it isn't needed for the build anyway.
RUN npm install --ignore-scripts

COPY . .

RUN npm run build

FROM oven/bun AS runtime

WORKDIR /var/www/mushid

COPY package.json package-lock.json ./
# --omit=dev instead of --production: bun's --production flag implies
# --frozen-lockfile, which fails here since there's no committed bun.lock to
# match against, only package-lock.json, which bun migrates on the fly.
# --ignore-scripts: same reason as the build stage above, .husky/ isn't copied in.
RUN bun install --omit=dev --ignore-scripts

COPY --from=svelte-build /var/www/mushid/build /var/www/mushid/build
COPY express-src /var/www/mushid/express-src

EXPOSE 8080

ENTRYPOINT ["bun", "run", "express-src/server.ts"]
