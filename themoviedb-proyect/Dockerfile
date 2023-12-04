FROM node:12.16-alpine as builder
LABEL stage=builder
WORKDIR /app/
COPY . /app/
RUN npm install -g @angular/cli && ng new my-project-name && ng build --prod
FROM node:12.16-alpine
WORKDIR /app/
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/dist ./dist/
RUN npm ci --only=production
ENTRYPOINT [ "npm" ]
CMD [ "run", "start:prod" ]
EXPOSE 3000
