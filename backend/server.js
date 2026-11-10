
const ViteExpress = require("vite-express")
const express = require("express")
const app = express();
const port = 3000;


console.log("Working directory:", process.cwd());
console.log(
  "Root index exists:",
  require("node:fs").existsSync(
    require("node:path").resolve("index.html")
  )
);

ViteExpress.listen(app, port, () => {
    console.log(`Server listening on port ${port}`)
}
)
