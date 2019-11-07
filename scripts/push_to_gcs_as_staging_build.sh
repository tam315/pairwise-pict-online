#/bin/sh

cd ~/go/src/github.com/junkboy0315/pairwise-pict-online
docker build . -t pict_api:staging
docker tag pict_api:staging asia.gcr.io/pairwise-pict-online/pict_api:staging
docker push asia.gcr.io/pairwise-pict-online/pict_api:staging