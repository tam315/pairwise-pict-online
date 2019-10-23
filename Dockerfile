FROM node:12.12.0-buster

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
# Node.js
###############################

# following part doesn't affects the development environment
# because files are overritten by docker-compose.

# copy essential files
RUN mkdir /root/api
COPY package.json /root/api/
COPY yarn.lock /root/api/

# install packages
WORKDIR /root/api
RUN yarn --prod

# copy rest files
COPY src /root/api/src/

CMD ["yarn","serve"]
