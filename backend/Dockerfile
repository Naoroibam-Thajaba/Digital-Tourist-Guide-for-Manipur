FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY src ./src
COPY seed ./seed
EXPOSE 2201
CMD ["node","src/server.js"]
