###############################
# for development
###############################

### pict ###
FROM golang:1.13.4-buster AS target_for_development

RUN apt update
RUN apt -y install clang
RUN which clang

WORKDIR /root
RUN git clone https://github.com/microsoft/pict.git

WORKDIR /root/pict
RUN make && install ./pict /usr/bin
RUN which pict

### golang ###
RUN go get github.com/gin-contrib/cors
RUN go get github.com/gin-contrib/gzip
RUN go get github.com/gin-gonic/gin
RUN go get github.com/stretchr/testify/assert

# to enable auto reloading while developing
RUN go get github.com/pilu/fresh

COPY main.go /go/src/github.com/junkboy0315/pairwise-pict-online/
COPY main_test.go /go/src/github.com/junkboy0315/pairwise-pict-online/
WORKDIR /go/src/github.com/junkboy0315/pairwise-pict-online

# start server
CMD ["fresh"]

###############################
# for production
###############################

FROM target_for_development AS target_for_compilation
RUN CGO_ENABLED=0 GOOS=linux go build -v -o server

# Use clean image for a lean production container.
# https://docs.docker.com/develop/develop-images/multistage-build/#use-multi-stage-builds
FROM debian:buster-20191014-slim AS target_for_production
COPY --from=target_for_compilation /root/pict/pict /usr/bin/
RUN which pict
COPY --from=target_for_compilation /go/src/github.com/junkboy0315/pairwise-pict-online/server /server
CMD ["/server"]
