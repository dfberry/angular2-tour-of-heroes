# To build and run with Docker:
#
#  $ docker build -t dfberry/toh .
#  $ docker run -it -p 3000:3000 -p 3001:3001 -v /Users/dfberry/repos/toh:/toh -d dfberry/toh tail -f /dev/null
#  $ docker exec -it 53b3ad840c46 /bin/bash

FROM node:latest

RUN mkdir -p /toh /home/nodejs && \
    groupadd -r nodejs && \
    useradd -r -g nodejs -d /home/nodejs -s /sbin/nologin nodejs && \
    chown -R nodejs:nodejs /home/nodejs

WORKDIR /toh
COPY package.json typings.json /tor/
RUN npm install --unsafe-perm=true

COPY . /tohs
RUN chown -R nodejs:nodejs /toh
USER nodejs

CMD [ "npm", "start" ]



