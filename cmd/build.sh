#!/bin/sh


rm -rf ./app
mkdir app 

(cd ./frontend && npm run build)
mv ./frontend/build ./app/static


(cd ./reservation && ./gradlew bootJar)


mv ./reservation/build/libs/*SNAPSHOT.jar ./app/app.jar 

cp ./cmd/start.sh ./app/start.sh
