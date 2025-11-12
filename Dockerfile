
FROM node:20.19.5

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build 


FROM nginx:1.25.2-alpine
COPY nginx_config/nginx.conf /etc/nginx/nginx.conf
COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf
#COPY --from=builder dist /etc/nginx/html
COPY dist /etc/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
