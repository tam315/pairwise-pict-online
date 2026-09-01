#!/bin/sh

set -e

# 設定
PROJECT_ID="pairwise-pict-online"
REGISTRY_HOST="asia-northeast1-docker.pkg.dev"
IMAGE="${REGISTRY_HOST}/pairwise-pict-online/my-repo/pict_api"

# プロジェクトをセット
gcloud auth login
gcloud config set project ${PROJECT_ID}
gcloud auth configure-docker ${REGISTRY_HOST} --quiet

# 現在のプロジェクトが正しいことを確認しておく。
gcloud config list | grep ${PROJECT_ID}

# Cloud Runはamd64じゃないと動かない。Macでビルドしたイメージだと起動しない。
docker build -f backend/Dockerfile --platform=linux/amd64 --target target_for_production -t ${IMAGE} ./backend
docker push ${IMAGE}

gcloud run deploy pict-api \
  --platform=managed \
  --image=${IMAGE} \
  --region=asia-northeast1
