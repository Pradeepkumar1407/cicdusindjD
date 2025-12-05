FROM node:latest AS new version
WORKDIR /app
COPY packages*.json ./
RUN npm install
COPY ..
EXPOSE 3000
CMD ["node" ,"app.js"]
