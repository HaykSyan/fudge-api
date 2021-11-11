FROM node:12.22.1
EXPOSE 3001
COPY ["package.json", "yarn.lock*", "./"]
RUN yarn
RUN yarn install
COPY . .
CMD ["node", "./app.js"]