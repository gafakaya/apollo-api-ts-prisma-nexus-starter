import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./graphql";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: __dirname + "/generated/nexus-typegen.ts",
    schema: __dirname + "/generated/schema.graphql",
  },
  contextType: {
    module: join(process.cwd(), "./src/context.ts"),
    export: "Context",
  },
});
