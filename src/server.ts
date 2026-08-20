import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;





app.listen(PORT, () => {
    console.log(`Gym System API running on port ${PORT}`);
  });

module.exports = app;
