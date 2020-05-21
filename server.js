const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const frontendRoutes = require("./frontend/main");
const categoryRoutes = require("./controllers/category");
const searchRoutes = require("./controllers/search");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use( express.static( "views" ) );
app.use("/styles",express.static(__dirname + "/styles"));

app.set('view engine', 'ejs');

app.use("/", frontendRoutes);
app.use("/", categoryRoutes);
app.use("/", searchRoutes);

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`SERVER IS RUNNING AT ${port}`)
});