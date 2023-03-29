const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keeperModel = require("./users");
const cors = require("cors"); //connect api to frontend
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/keeperDB");

app.get("/getUsers", function (req, res) {
  keeperModel
    .find()
    .sort({ _id: -1 })
    .then((arg) => res.send(arg))
    .catch((err) => res.send(err));
});

app.post("/createUser", async function (req, res) {
  const user = req.body;
  const newUser = new keeperModel(user);
  await newUser.save();

  res.send(user);
});

app.delete("/deleteUser/:id",async (req,res) =>{
  await keeperModel.deleteOne({_id:req.params.id}).
  then((arg)=>{
    res.send("deleted");
  }).catch(err=>{
    console.log(err);
  });
});

app.listen(3001, function (req, res) {
  console.log("running");
});
