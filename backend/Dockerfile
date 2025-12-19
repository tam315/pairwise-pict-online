###############################
# for development
###############################

### pict ###
FROM golang:1.25-bookworm AS target_for_development

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
RUN go install github.com/air-verse/air@latest

###############################
# for production
###############################

FROM target_for_development AS target_for_compilation
WORKDIR /root/api
COPY *.go ./
# GOARCHの指定をしないとCloud Runで動かない
RUN go build -v -o server

# Use clean image for a lean production container.
# https://docs.docker.com/develop/develop-images/multistage-build/#use-multi-stage-builds
FROM debian:bookworm-slim AS target_for_production
COPY --from=target_for_compilation /root/pict/pict /usr/bin/
RUN which pict
COPY --from=target_for_compilation /root/api/server /server
EXPOSE 8080
CMD ["/server"]
