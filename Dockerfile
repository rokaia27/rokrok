FROM node:14-alpine
WORKDIR /app
COPY test.js package*.json ./
RUN npm install 
COPY . .
EXPOSE 3000
CMD node test.js