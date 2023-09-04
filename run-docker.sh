
# You need to login into the Docker Registry first by using `docker login`
export IMAGE_NAME_GLOBAL=tdchien1982/angular:10.build-docker-nginx
echo "Try to run the Docker Image for Angular: $IMAGE_NAME_GLOBAL, the container name: `angular-demoß`"
uname -a
echo Check Docker Version
docker version

echo "Remove the old container (if exists): `angular-demo`"
docker stop angular-demo
docker rm angular-demo

echo "Deploy app using Docker on the current host, e.g. localhost"
docker run -p 9100:80 --name angular-demo -d --env PORT=80 $IMAGE_NAME_GLOBAL
