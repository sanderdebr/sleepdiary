import * as Routes from "~/src/routes";

import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 8000;
const app = next({ dev, quiet: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/", async (req, res) => {
    return await Routes.signIn(req, res, app);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }

    console.log(`Server running on http://localhost:${port}`);
  });
});
