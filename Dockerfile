FROM node:14
WORKDIR /app
RUN npm install
EXPOSE 5000
COPY . .
CMD ["npm", "run", "dev"]

