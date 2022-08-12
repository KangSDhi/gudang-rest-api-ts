#!/bin/bash

docker-compose up -d

sleep 5

docker exec mongo_host_0 /scripts/rs-init.sh