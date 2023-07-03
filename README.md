# Nodejs | DockerCompose | Typescript | Mongodb

## Available Scripts

make sure the following

>* docker in your machine
>* internet connection


run in production env

```bash
sudo docker-compose up --build

```

run in development env

```bash
npx ts-node-dev --respawn --transpile-only ./src/app.ts
```