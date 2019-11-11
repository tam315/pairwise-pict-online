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

# install libraries
WORKDIR /root/api
COPY go.* ./
RUN go mod download

# to enable auto reloading while developing
RUN go get github.com/pilu/fresh

###############################
# for production
###############################

FROM target_for_development AS target_for_compilation
WORKDIR /root/api
COPY *.go ./
RUN CGO_ENABLED=0 GOOS=linux go build -v -o server

# Use clean image for a lean production container.
# https://docs.docker.com/develop/develop-images/multistage-build/#use-multi-stage-builds
FROM debian:buster-20191014-slim AS target_for_production
COPY --from=target_for_compilation /root/pict/pict /usr/bin/
RUN which pict
COPY --from=target_for_compilation /root/api/server /server
CMD ["/server"]
