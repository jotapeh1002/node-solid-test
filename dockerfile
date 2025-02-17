FROM node:18.19.1

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY src/infra/database/prisma /app/src/infra/database/prisma

RUN npx prisma generate

COPY . .

EXPOSE 3333

CMD ["npm", "run", "start:prod"]