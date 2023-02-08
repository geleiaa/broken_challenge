# Multistage build (1st stage)
FROM node:lts-alpine3.16 AS builder

# Create directory
WORKDIR /apolitical/frontend

# Install dependencies (with build toolchain)
COPY package.json ./

RUN yarn install

# Bundle source
COPY public ./public
COPY src ./src

RUN yarn build

# Multistage build (2nd stage)
FROM node:lts-alpine3.16 AS app

# Create directory
WORKDIR /apolitical/frontend

# Install dependencies (without build toolchain)
COPY package.json ./
COPY yarn.lock ./

RUN yarn install --production

RUN yarn global add serve

# Copy built node modules and binaries without including the toolchain
COPY --from=builder /apolitical/frontend/build build

EXPOSE 3000
CMD ["serve", "-s", "build"]
