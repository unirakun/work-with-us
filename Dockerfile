FROM node:alpine

WORKDIR /app
COPY . .
RUN yarn --frozen-lockfile \
    && yarn build \
    && rm -Rf node_modules \
    && rm -Rf packages/*/node_modules \
    && yarn --frozen-lockfile --production \
    && yarn cache clean

ENV NODE_ENV=production
CMD [ "node", "packages/api-gateway" ]
