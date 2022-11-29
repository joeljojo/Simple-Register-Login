const express = require("express");
const database = require("./Config/database");
const userRoutes = require("./Routes/userRoutes");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(userRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
