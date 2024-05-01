const express = require("express");
const cors = require("cors");
const connectedDB = require("./db");
const dotenv = require("dotenv");


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.json({
    data:"Server is running successfully"
}));



    app.listen(port, () => {console.log(`\n\t App is running on port: ${port}`)
        connectedDB();
});