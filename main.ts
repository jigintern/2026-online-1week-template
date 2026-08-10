import { serveDir } from "@std/http/file-server";

Deno.serve((request) =>
  serveDir(request, {
    fsRoot: "public",
    headers: ["Cache-Control: no-store"],
    showIndex: true,
  })
);
