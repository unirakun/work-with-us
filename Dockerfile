FROM node:alpine

ENV DB_PATH=/db

WORKDIR /app
COPY . .
RUN echo "installing building tools for leveldown dependency" \
    && apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && echo "installing all dependencies needed to build (npm-run-all, babel, etc) the react application" \
    && yarn --frozen-lockfile \
    && yarn build \
    && echo "removing dependencies" \
    && rm -Rf node_modules \
    && rm -Rf packages/*/node_modules \
    && echo "installing production dependencies" \
    && yarn --frozen-lockfile --production \
    && echo "removing yarn cache" \
    && yarn cache clean \
    && echo "removing building tools" \
    && apk del .gyp \
    && mkdir ${DB_PATH}

ENV NODE_ENV=production
CMD [ "node", "packages/api-gateway" ]
