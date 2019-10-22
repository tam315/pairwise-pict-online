FROM node:12.12.0-buster

WORKDIR /root

RUN apt update
RUN apt -y install clang
RUN which clang

RUN git clone https://github.com/microsoft/pict.git
WORKDIR /root/pict
RUN make && install ./pict /usr/bin
RUN which pict

