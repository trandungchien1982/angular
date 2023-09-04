# Stage 1 : Build all files to HTML
FROM node:18.17.1-alpine as build-step
RUN mkdir -p /build
COPY my-app/package.json /build/
WORKDIR /build
RUN echo "List all files in current folder: ..."
RUN ls -l
RUN npm install

COPY ./my-app /build
RUN ls -l
RUN npm run build
RUN ls -l

# Stage 2 : Deploy it using nginx (for lightweight container)
# We will run Go as a native application inside alpine image
FROM nginx:1.17.1-alpine
COPY --from=build-step /build/dist/my-app/ /usr/share/nginx/html

# Fix on Heroku environment, we need to use the $PORT instead of port 80 of nginx
COPY configs/nginx.conf /etc/nginx/conf.d/default.conf

ARG SERVER_INFO=/usr/share/nginx/html/assets/server-info.txt

RUN rm -f $SERVER_INFO

RUN echo "---------------" >> $SERVER_INFO
RUN echo "RAM & CPU info" >> $SERVER_INFO
RUN free -m >> $SERVER_INFO

RUN echo "---------------" >> $SERVER_INFO
RUN echo "Disk info" >> $SERVER_INFO
RUN df -h >> $SERVER_INFO

RUN echo "---------------" >> $SERVER_INFO
RUN echo "System info " >> $SERVER_INFO
RUN uname -a >> $SERVER_INFO

RUN echo "---------------" >> $SERVER_INFO
RUN echo "Working folder " >> $SERVER_INFO
RUN cd /usr/share/nginx/html && ls -l >> $SERVER_INFO

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'

