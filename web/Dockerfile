FROM node:17-alpine

RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN npm install

EXPOSE 9898

CMD ["node", "index.js"]