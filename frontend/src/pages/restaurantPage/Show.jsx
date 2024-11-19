import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Show() {
  const [restaurant, setRestaurant] = useState({});
  
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurant/${params.id}`)
      .then((res) => {
        setRestaurant(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log("ERROR:", err));
  }, [params.id]);

  // delete restaurant
  const restaurantDelete = (restaurant) => {
    axios
      .delete(`http://localhost:8080/restaurant/${restaurant._id}`)
      .then((res) => {
        // console.log(res);
        navigate(`/${restaurant.serviceType}`);
      })
      .catch((err) => console.log("ERROR:", err));
  };

  return (
    <>
      <div className="m-24">
        <h2 className="text-4xl font-bold">{restaurant.title}</h2>
        <p className="py-1">{restaurant.description}</p>
        <h4 className="font-semibold">
          <i className="pr-2 fa-solid fa-location-dot"></i>
          {restaurant.location}
        </h4>
        <img
          className="mt-5 w-full h-[450px] rounded-lg"
          src={restaurant.image}
        />

        {/* delete & edit button */}
        <div className="mt-10">
          <Link
            to={`/restaurant/${restaurant._id}/edit`}
            className="py-1 px-5 rounded-lg bg-red-500 text-white"
          >
            Edit
          </Link>
          <button
            className="mx-4 py-1 px-5 rounded-lg bg-red-500 text-white"
            onClick={() => restaurantDelete(restaurant)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
