FROM node:latest

COPY ./ /home/node/app

WORKDIR /home/node/app

RUN npm install -g serve

CMD ["serve", "-p", "80", "-s", "build"]
