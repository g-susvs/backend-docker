FROM node:18-alpine3.17

COPY ["package.json","package-lock.json", "/usr/src/"]

WORKDIR /usr/src

COPY [".","/usr/src/"]

RUN npm install

EXPOSE 3003

CMD ["node", "index.js"]