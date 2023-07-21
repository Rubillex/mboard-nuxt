ARG NODE_VERSION=18.14.2

FROM node:${NODE_VERSION}-slim as base

# START DEV

WORKDIR /src

COPY --link package*.json ./
RUN npm install

CMD ["sh", "-c", "npm run dev"]

# END DEV

# START BUILD

#ARG PORT=3000
#
#ENV NODE_ENV=production
#
#WORKDIR /src
#
## Build
#FROM base as build
#
#COPY --link package*.json ./
#RUN npm install --production=false
#
#COPY --link . .
#
#RUN npm run build
#RUN npm prune
#
## Run
#FROM base
#
#ENV PORT=$PORT
#
#COPY --from=build /src/.output /src/.output
#
#CMD [ "node", ".output/server/index.mjs" ]

# END BUILD