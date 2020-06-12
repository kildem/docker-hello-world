FROM node:12.16.3

WORKDIR /code

ARG PORT=80
ENV PORT $PORT

COPY package.json /code/package.json

RUN npm install

COPY . /code

CMD [ "node", "src/server.js" ]

