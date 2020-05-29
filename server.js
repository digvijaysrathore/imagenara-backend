const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const categoryRoutes = require("./controllers/category");
const searchRoutes = require("./controllers/search");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", categoryRoutes);
app.use("/", searchRoutes);

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`SERVER IS RUNNING AT ${port}`)
});