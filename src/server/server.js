import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { User } from "./models/User.js";
import { registerValidation } from "./validations/auth.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

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

app.post("/register", registerValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new User({
      email: req.body.email,
      passwordHash: hash,
    });
    const user = await doc.save();

    const token = jwt.sign({
        _id: user._id
    }, 'secret-key', {
        expiresIn: '30d'
    })
    const {passwordHash, ...userData} = user._doc

    res.json({
        ...userData,
        token
    });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
