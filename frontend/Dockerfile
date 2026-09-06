FROM node:22-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 4200
CMD ["yarn", "start", "--host", "0.0.0.0"]
