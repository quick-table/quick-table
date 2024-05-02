#!/bin/sh

rm -rf ./app
mkdir app 

# Build static front-end and move to static directory
(cd ./frontend && npm run build)
mv ./frontend/build ./app/static


# Build backend and move jar to app folder
(cd ./reservation && ./gradlew bootJar)
mv ./reservation/build/libs/*SNAPSHOT.jar ./app/app.jar 

# Copy start script to app folder
cp ./cmd/start.sh ./app/start.sh
docker build -t reservation-app .


docker tag reservation-app:latest postrgresslearn/reservation-app:latest
docker tag reservation-app:latest postrgresslearn/reservation-app:1.0.0

docker push postrgresslearn/reservation-app --all-tags

