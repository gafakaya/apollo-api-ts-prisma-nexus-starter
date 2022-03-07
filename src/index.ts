import { ApolloServer } from "apollo-server-express";
import express from "express";
// import { graphqlUploadExpress } from "graphql-upload";
// import { context } from "./context";
import { schema } from "./schema";
import { context } from "./context";

async function startServer() {
  const server = new ApolloServer({
    context,
    schema,
  });

  await server.start();

  const app = express();

  const corsOptions = {
    origin: ["http://localhost:3000", "https://studio.apollographql.com"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

  app.use(express.static("public"));

  // app.use(graphqlUploadExpress());

  server.applyMiddleware({ app, cors: corsOptions });

  await new Promise<void>((r) =>
    app.listen({ port: process.env.PORT || 4000 }, r)
  );

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startServer();
