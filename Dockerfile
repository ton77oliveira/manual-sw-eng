FROM node:22-alpine
WORKDIR /app
COPY package.json ./
COPY app ./app
COPY knowledge ./knowledge
COPY projects ./projects
ENV PORT=3000
EXPOSE 3000
CMD ["node", "app/server.js"]
