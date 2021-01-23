#!/bin/bash

set -e

CONTAINER="postgres";
GREEN_COLOR='\033[1;32m'
NO_COLOR='\033[0m'

echo "Removing old container [$CONTAINER] and starting new fresh instance of [$CONTAINER]"
(docker kill $CONTAINER || :) && \
  (docker rm $CONTAINER || :) && \
  docker run --name $CONTAINER \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_USER=root \
  -p 5432:5432  \
  -v /database/postgres:/var/lib/postgresql/data \
  -d postgres:13-alpine \

echo -e "${GREEN_COLOR}[$CONTAINER] has started successfully!${NO_COLOR}";