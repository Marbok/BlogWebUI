FROM node:10-alpine as builder

COPY package.json package-lock.json ./

RUN npm install && mkdir /blog-ui && mv ./node_modules ./blog-ui

WORKDIR /blog-ui

COPY . .

RUN npm run build

FROM nginx:alpine

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /blog-ui/build /usr/share/nginx/html

EXPOSE 3000 80

CMD nginx -g "daemon off;"