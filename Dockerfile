# FROM nginx:latest
# RUN apt-get update
# RUN apt-get install apache2 -y
# WORKDIR /var/www/html
# copy . /var/www/html
# EXPOSE 89
# CMD ["nginx", "-g", "daemon off;"]


FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY . /usr/share/nginx/html/
EXPOSE 89
CMD ["nginx", "-g", "daemon off;"]
