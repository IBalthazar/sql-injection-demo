
const ViteExpress = require("vite-express")
const express = require("express")
const app = express();
const port = 3000;



ViteExpress.listen(app, port, () => {
    console.log(`Server listening on port ${port}`)
}
)
