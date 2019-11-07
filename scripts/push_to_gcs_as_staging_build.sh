#/bin/sh

cd ~/go/src/github.com/junkboy0315/pairwise-pict-online
docker build --target target_for_production -t pict_api:staging
docker tag pict_api:staging asia.gcr.io/pairwise-pict-online/pict_api:staging
docker push asia.gcr.io/pairwise-pict-online/pict_api:staging