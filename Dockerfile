FROM nginx:1.19-alpine
COPY  dist/sigo-frontend/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
