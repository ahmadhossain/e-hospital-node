import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Doctor from "./models/doctor.js";
import Paitent from "./models/patient.js";

const app = express();
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// register a patient
app.post("/patient", (req, res) => {
  const paitent = new Paitent(req.body);
  console.log(paitent);
  paitent.save().then((data) => {
    res.status(201).send("Created");
  });
});
// register a doctor
app.post("/doctor", (req, res) => {
  const doctor = new Doctor(req.body);
  console.log(doctor);
  doctor.save().then((data) => {
    res.status(201).send("Created");
  });
});
// login
app.post("/login", (req, res) => {
  const email = req.body.Email;
  const password = req.body.Password;
  console.log(email);
  console.log(password);
  Doctor.find({ Email: email, Password: password }, function (err, found) {
    console.log(found);
    if (found.length !== 0) res.send(found);
    else {
      Paitent.find({ Email: email, Password: password }, function (err, found) {
        res.send(found);
      });
    }
  });
  // .then((data) => {
  //   res.status(201).send("Created");
  // });
});

mongoose
  .connect(MONGODB_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err));
