import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Restaurants({ serviceType }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurants/${serviceType}`)
      .then((res) => {
        setRestaurants(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log("ERROR:", err));
  }, [serviceType]);

  return (
    <>
      <section>
        <div className="mt-24 flex flex-wrap justify-evenly items-center">
          {restaurants.map((restaurant, index) => (
            <Link
              to={`/restaurant/${restaurant._id}`}
              className="w-[30%] h-[400px] m-5 cursor-pointer rounded-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] "
              key={index}
            >
              <img
                className="w-full max-h-[250px] rounded-tl-2xl rounded-tr-2xl "
                src={restaurant.image}
              />
              <h2 className="text-xl font-bold p-3">{restaurant.title}</h2>
              <p className="px-3">{restaurant.description}</p>
              <h4 className="p-3 font-semibold text-lg">
                <i className="pr-2 fa-solid fa-location-dot"></i>
                {restaurant.location}
              </h4>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
