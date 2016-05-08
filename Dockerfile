FROM node
RUN mkdir botlbot
ADD . /botlbot/
WORKDIR /botlbot
RUN npm install -q 
RUN npm run build
EXPOSE 1337

CMD ["node","server/server.js"]
