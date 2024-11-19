import mongoose from "mongoose";
import { Schema } from "mongoose";

const restaurantSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: String,
  location: String,
  serviceType: {
    type: String,
    enum: ["online", "dine-in", "nightlife"],
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
