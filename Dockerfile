### STAGE 1: Build ###

FROM node:current-alpine3.17 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

### STAGE 2: Run ###

FROM nginx:alpine

LABEL "maintainer"="Arindam Banerjee"

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/src/app/dist/genai-app /usr/share/nginx/html

