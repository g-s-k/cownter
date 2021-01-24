FROM node:15.6.0 AS build
WORKDIR /app

COPY package*.json ./
COPY src src/
COPY public public/

RUN npm ci && npm run build

FROM nginx:1.19.6 AS production
COPY --from=build /app/build /usr/share/nginx/html
