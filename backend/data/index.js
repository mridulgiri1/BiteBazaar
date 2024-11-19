import mongoose from "mongoose";
import sampleRestaurants from "./data.js";
import Restaurant from "../models/restaurant.js";

const MONGO_URL = "mongodb://127.0.0.1:27017/bitebazaar";

main()
  .then((res) => console.log("connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initData = async () => {
  await Restaurant.deleteMany({}); //delete restaurant data

  await Restaurant.insertMany(sampleRestaurants); //insert data
  console.log("Data was initialized");
};

initData();
