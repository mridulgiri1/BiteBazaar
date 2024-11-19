import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="p-4 flex justify-between border-b">
        {/* website name */}
        <Link to={"/"} className="text-3xl font-extrabold px-5 text-textColor2">
          BiteBazaar
        </Link>

        {/* navbar menu */}
        <div className="flex justify-evenly items-center">
          <Link to={"/restaurant/new"} className="px-5 text-xl font-semibold">
            Add restaurant
          </Link>
          <div className="px-5 text-xl font-semibold">Login/Signup</div>
        </div>
      </div>
    </>
  );
}
