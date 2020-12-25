# instagram-backend
> expect to fin before :christmas_tree: :gift: :neckbeard:

clone instagram with Express + Prisma


## setup

```bash
npm init
npm i @babel/preset-env
npm i @babel/node
npm i @babel/core
npm i dotenv
npm i graphql-tools
npm i nodemon --save-dev
npm i morgan # logger
npm i lite-server --save-dev # option
npm i graphql-yoga
npm i @prisma/cli -D # https://www.prisma.io/docs/getting-started/quickstart-typescript
npm install -g prisma1
prisma1 login -k token
npx prisma init

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started.
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql or sqlite.
3. Run prisma introspect to turn your database schema into a Prisma data model.
4. Run prisma generate to install Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
    

npm audit fix
npm run dev
```

### `graphql-tools`
> Functions in the graphql-tools packages are not just useful for building servers. They can also be used in the browser, for example to mock a backend during development or testing.

- `tl;dr`: GraphQL server code into 4 components: Schema, Resolvers, Models, and Connectors

- [GraphQL at Facebook](https://medium.com/apollo-stack/graphql-at-facebook-by-dan-schafer-38d65ef075af#.jduhdwudr), it's a good idea to treat GraphQL as a thin API and routing layer. 
  - This means that your actual business logic, permissions, and other concerns should not be part of your GraphQL schema.

- `merge-graphql-schemas` is deprecated
  - `tl;dr`: Merge GraphQL Schemas has been deprecated and merged into GraphQL Tools. (`npm i graphql-tools`)
    - `merge-graphql-schemas.mergeTypes` -> `@graphql-tools/merge.mergeTypeDefs`
    - `merge-graphql-schemas.fileLoader` -> `@graphql-tools/load-files.loadFilesSync`
  - https://www.graphql-tools.com/docs/migration-from-merge-graphql-schemas/


### `Prisma`
> https://app.prisma.io/


- 프리스마 서버를 운용하기 위해서는, 자신의 이름으로 로그인 한 뒤 클라우드 서버를 받아야 한다 (endpoint)
- 추가로 Heroku를 통해 SQl 서버 또한 받아야 한다.


### Heroku postgresql
> https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1