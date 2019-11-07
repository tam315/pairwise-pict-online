FROM golang:1.13.4-buster

###############################
# pict
###############################

RUN apt update
RUN apt -y install clang
RUN which clang

WORKDIR /root
RUN git clone https://github.com/microsoft/pict.git

WORKDIR /root/pict
RUN make && install ./pict /usr/bin
RUN which pict

###############################
# golang
###############################

RUN go get github.com/gin-gonic/gin
RUN go get github.com/gin-contrib/cors
RUN go get github.com/gin-contrib/gzip

# to enable auto reloading while developing
RUN go get github.com/pilu/fresh

COPY main.go /go/src/github.com/junkboy0315/pairwise-pict-online/
WORKDIR /go/src/github.com/junkboy0315/pairwise-pict-online

# start server
CMD ["fresh"]