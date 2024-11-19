import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Restaurant from "./models/restaurant.js";
import upload from "./cloudConfig.js";

const port = process.env.PORT || 8080;
const app = express();

//connect database
const MONGO_URL = "mongodb://127.0.0.1:27017/bitebazaar";

main()
  .then((res) => console.log("connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.use(cors());
app.use(express.json());

// Get all restaurants
app.get("/restaurants/:serviceType", async (req, res) => {
  let { serviceType } = req.params;
  const allRestaurants = await Restaurant.find({ serviceType });
  res.send(allRestaurants);
});

// Show restaurant by id
app.get("/restaurant/:id", async (req, res) => {
  let { id } = req.params;
  const restaurant = await Restaurant.findById(id);
  // console.log(restaurant);
  res.send(restaurant);
});

// rendering edit form to update restaurant
app.get("/restaurant/:id/edit", async (req, res) => {
  let { id } = req.params;
  const restaurant = await Restaurant.findById(id);
  res.send(restaurant);
});

//updating an existing restaurant by id
app.patch("/restaurant/:id", upload.single("image"), async (req, res) => {
  let { id } = req.params;
  const { title, description, location } = req.body;
  const filePath = req.file ? req.file.path : null;

  const updatedData = { title, description, location };
  if (filePath) updatedData.image = filePath;

  await Restaurant.findByIdAndUpdate(id, updatedData);
  // console.log(updatedData);
  res.sendStatus(200);
});

//adding new restaurant
app.post("/restaurant/new", upload.single("image"), async (req, res) => {
  let data = req.body;
  let image = req.file ? req.file.path : null;

  const newRestaurant = new Restaurant(data);

  newRestaurant.image = image;
  await newRestaurant.save();
  // console.log(newRestaurant);
  res.sendStatus(200);
});

// destroying restaurant by id
app.delete("/restaurant/:id", async (req, res) => {
  let { id } = req.params;
  await Restaurant.findByIdAndDelete(id);
  res.sendStatus(200);
});

app.listen(port, (req, res) =>
  console.log(`serve at http://localhost:${port}`)
);
