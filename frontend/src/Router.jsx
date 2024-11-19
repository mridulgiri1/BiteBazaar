import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/restaurantPage/Home";
import Restaurants from "./pages/restaurantPage/Restaurants";
import Show from "./pages/restaurantPage/Show";
import Edit from "./pages/restaurantPage/Edit";
import New from "./pages/restaurantPage/New";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      {/* restaurant type */}
      <Route path="online" element={<Restaurants serviceType={"online"} />} />
      <Route path="dine-in" element={<Restaurants serviceType={"dine-in"} />} />
      <Route
        path="nightlife"
        element={<Restaurants serviceType={"nightlife"} />}
      />
      {/* show restaurnat route */}
      <Route path="restaurant/:id" element={<Show />} />
      {/* edit restaurant route  */}
      <Route path="restaurant/:id/edit" element={<Edit />} />
      {/* added new restaurant route */}
      <Route path="restaurant/new" element={<New />} />
    </Route>
  )
);

export default router;
