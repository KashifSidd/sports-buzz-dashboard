FROM node:14-alpine3.14
WORKDIR /app
COPY package.json /app
RUN npm i
COPY . /app
RUN npm run build:ssr:staging

ENV PORT 80

ENTRYPOINT [ "node" ]

CMD [ "dist/website/server/main.js" ]
EXPOSE 80