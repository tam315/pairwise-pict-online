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

# for auto reload
RUN go get github.com/pilu/fresh

# start server
CMD go run main.go