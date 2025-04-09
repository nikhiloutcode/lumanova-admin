const server = require("./lib/server");
const path = require("path");
const fs = require("fs");
const { NODE_ENV } = process.env;

server.app.get("/.well-known/assetlinks.json", async (req, res) => {
  let serverPrefix = "";
  if (NODE_ENV === "development") serverPrefix = "-dev";
  if (NODE_ENV === "staging") serverPrefix = "-stg";

  console.log("serverPrefix", serverPrefix, NODE_ENV);
  res.sendFile(
    path.join(__dirname, `/universalLink/assetlinks${serverPrefix}.json`)
  );
});

server.app.get("/.well-known/apple-app-site-association", async (req, res) => {
  let serverPrefix = "";
  if (NODE_ENV === "development") serverPrefix = "-dev";
  if (NODE_ENV === "staging") serverPrefix = "-stg";
  console.log("serverPrefix", serverPrefix, NODE_ENV);
  res.sendFile(
    path.join(
      __dirname,
      `/universalLink/apple-app-site-association${serverPrefix}.json`
    )
  );
});

server.app.get("/sms/:code", async (req, res) => {
  const code = req.params.code;
  const fileNamePath = path.join(__dirname, `/universalLink/client.html`);
  const data = fs.readFileSync(fileNamePath, "utf8");
  const html = data.replace("{deeplink}", `sms/${code}`);
  res.send(html);
});

server.start();
