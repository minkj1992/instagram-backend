require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schma";

const SERVER_PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });
server.express.use(logger("dev"));

server.start({ port: SERVER_PORT }, () =>
  console.log(`✅ Server running on  http://localhost:${SERVER_PORT}`)
);
