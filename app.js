require("dotenv").config()
const express = require("express")
const app = express();
const port = process.env.PORT || 3001
const router = require('./router/index');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(router);
app.listen(port, () => {
    console.log("app is listening", port)
})
