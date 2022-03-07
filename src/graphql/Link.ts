import { extendType } from "nexus/dist/definitions/extendType";
import { objectType } from "nexus/dist/definitions/objectType";

export const Link = objectType({
  name: "Link",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("description");
    t.nonNull.string("url");
  },
});

export const LinkQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "Link",
      resolve(_parent, _args, context) {
        return context.prisma.link.findMany();
      },
    });
  },
});
