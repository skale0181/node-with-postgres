const express = require("express");
const app = express();
const routes = require("./routes/routes");
const { sequelize } = require("./model/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequelize
    .sync({alter: true})
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

app.listen(3000, () => {
    console.log("Server running on port 3000");
});