# Pairwise Pict Online

[https://pairwise.yuuniworks.com/](https://pairwise.yuuniworks.com/)

An online service that easily generates pair-wise test cases.
It's powered by [Microsoft Pict](https://github.com/microsoft/pict) under the hood.

## Deployment

NOTE: This section is a personal memo.

```sh
gcloud config set project pairwise-pict-online
gcloud builds submit --tag asia.gcr.io/pairwise-pict-online/pict-api .
```
