import React from "react";
import serviceType from "../../data/home";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = (type) => {
    if (type === "online") {
      navigate("online");
    } else if (type === "dine-in") {
      navigate("dine-in");
    } else {
      navigate("nightlife");
    }
  };

  return (
    <>
      {/* search */}
      <search>
        <div className="flex items-center justify-center m-auto w-full mt-14">
          <div className="border w-[700px] bg-white rounded-xl">
            <i className="fa-solid fa-burger text-xl ml-3 text-textColor1"></i>
            <input
              className="w-[80%] h-12 border-none outline-none text-lg p-3"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
          <button className="bg-red-500 text-white h-12 text-lg px-5 rounded-xl ml-2">
            <i className="fa-solid fa-magnifying-glass mr-1"></i>
            Search
          </button>
        </div>
      </search>

      {/* serviceType restaurant */}
      <section className="serviceType">
        <div className="mt-24 flex justify-center items-center">
          {serviceType.map((category, index) => (
            <div
              className="w-[30%] border rounded-xl m-4 cursor-pointer "
              key={index}
              onClick={() => handleClick(category.title)}
            >
              <img
                className="w-full rounded-tr-xl rounded-tl-xl h-[200px]"
                src={category.img}
              />
              <p className="p-3">
                <span className="text-xl font-bold uppercase">
                  {category.title}
                </span>{" "}
                <br />
                <span className="font-semibold">{category.slogan}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
