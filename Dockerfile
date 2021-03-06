# Dockerfile 
#  $ docker build -t toh .
#  $ docker run -it -p 3000:3000 -p 3002:3002 -v /Users/dfberry/repos/toh:/home/nodejs/toh ng-toh tail -f /dev/null

# port 3000 for ng website
# port 3002 for json-data via json-server (npm package)
#tail -f /dev/null 
# base image 
FROM node:latest

RUN mkdir -p /home/nodejs/toh && \
    groupadd -r nodejs && \
    useradd -r -g nodejs -d /home/nodejs nodejs && \
    chown -R nodejs:nodejs /home/nodejs

WORKDIR /home/nodejs/toh
#COPY package.json /home/nodejs/quickstart-ngrx/
#RUN npm install --unsafe-perm=true

#COPY . /home/nodejs/quickstart-ngrx
RUN npm install -g json-server
USER nodejs

RUN npm start

#CMD npm start



