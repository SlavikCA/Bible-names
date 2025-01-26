FROM node:22

WORKDIR /app
COPY . .

RUN npm install \
 && npm run build

EXPOSE 5000

CMD ["npm", "run", "preview"]
