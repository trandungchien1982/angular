
# You need to login into the Docker Registry first by using `docker login`
export IMAGE_NAME_GLOBAL=tdchien1982/angular:10.build-docker-nginx
echo "Build Docker Image for Angular: $IMAGE_NAME_GLOBAL"
uname -a
echo Check Docker Version
docker version

echo "Remove the old image (if exists) $IMAGE_NAME_GLOBAL"
docker stop angular-demo
docker rm angular-demo
docker image rm $IMAGE_NAME_GLOBAL --force

echo "Create Docker Image for Angular Project: $IMAGE_NAME_GLOBAL"
docker build . -t $IMAGE_NAME_GLOBAL

echo Push new image to Docker Registry
docker login
docker push $IMAGE_NAME_GLOBAL

echo "Run App using Docker on localhost"
docker run -p 9100:80 --name angular-demo -d --env PORT=80 $IMAGE_NAME_GLOBAL


