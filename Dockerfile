FROM daocloud.io/node:5
MAINTAINER yuhongliang900@163.com

ENV HTTP_PORT 9000
COPY . /app
WORKDIR /app

RUN npm install

EXPOSE 9000

CMD ["npm", "start"]
