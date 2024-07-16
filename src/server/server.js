import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { registerValidation } from "./validations/auth.js";
import { checkAuth } from "./utils/checkAuth.js";
import * as UserController from './controllers/UserController.js'

dotenv.config();
const PORT = process.env.PORT || 5000;
const db =
  "mongodb+srv://user:12345@cluster0.xo0ojo1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
app.use(express.json());

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

  app.post("/auth/login", UserController.login);
  app.post("/auth/register", registerValidation, UserController.register);
  app.get("/auth/me", checkAuth, UserController.getMe);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
