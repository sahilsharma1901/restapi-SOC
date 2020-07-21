const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./userRoutes/userRoutes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/users', userRoutes);

mongoose.connect("mongodb://localhost/users", { useNewUrlParser: true, useUnifiedTopology: true }).then(
    app.listen(3000, () => {
        console.log("Server and database running successfully on port 3000");
    }))
    .catch(error => console.log(error));
