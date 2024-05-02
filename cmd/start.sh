#!/bin/sh
cd "$(dirname "$0")"

export STATIC_FILE_PATH=$(pwd)/static
export FIREBASE_PRIVATE_KEY_PATH=$(pwd)/credentials/firebase-private-key.secret.json

java -jar ./app.jar --spring.profiles.active=prod