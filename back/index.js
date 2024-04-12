const express = require("express");
const cors = require("cors");
const router = require("./src/router/router");
const PORT = process.env.PORT || 5010;
const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})