// Para el servidor siempre es la misma estructura

const express= require('express');
const router = express.Router();
const cors = require('cors');
const bodyPaser = require('body-parser');

const app=express();

app.use(cors());
app.use(bodyPaser.json());

app.use('/healthcheck', require("./services/healthcheck/routes"));

// Ruta para sincronizar DB
app.use("/db", require("./_helpers/db"));  // <- aquí conectas la ruta /db/sync
app.use("/user", require("./services/user/routes"));  // <- aquí conectas la ruta /db/sync
module.exports=app;
