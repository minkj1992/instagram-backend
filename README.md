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