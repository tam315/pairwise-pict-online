#/bin/sh

set -e

docker build --target target_for_production -t pict_api:production .
docker tag pict_api:production asia.gcr.io/pairwise-pict-online/pict_api:production
docker push asia.gcr.io/pairwise-pict-online/pict_api:production