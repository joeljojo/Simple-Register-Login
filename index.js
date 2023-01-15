const express = require("express");
const cors = require("cors");
const database = require("./Config/database");
const userRoutes = require("./Routes/userRoutes");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.listen(PORT, () => {
  return `Server running on port ${PORT}`;
});
