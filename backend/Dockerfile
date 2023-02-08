FROM node:lts-alpine3.16

# Create app directory
WORKDIR /apolitical/backend

# Install app dependencies
COPY package.json ./


RUN yarn install --production

# Bundle app source
COPY . .

EXPOSE 3000
CMD ["yarn", "start"]
