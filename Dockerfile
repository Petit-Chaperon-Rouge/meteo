
# BUILD
FROM node:alpine as build

WORKDIR /react-app/

COPY . .

RUN npm install

RUN npm run build

# DEPLOYMENT
FROM nginx:alpine

COPY --from=build /react-app/build/ /usr/share/nginx/html
