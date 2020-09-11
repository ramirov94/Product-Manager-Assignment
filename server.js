const express = require("express");
const cors = require("cors");

const app = express();

require("./server/config/mongoose.config");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./server/routes/product.routes")(app);

app.listen(4400, () => {
  console.log("Listening on Port 4400");
});
