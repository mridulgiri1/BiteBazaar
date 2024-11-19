import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function New() {
  const [newData, setNewData] = useState({
    title: "",
    description: "",
    serviceType: "",
    location: "",
  });
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", newData.title);
    formData.append("location", newData.location);
    formData.append("description", newData.description);
    formData.append("serviceType", newData.serviceType);
    formData.append("image", file);

    sendDataToBackend(formData);

    setNewData({
      title: "",
      description: "",
      serviceType: "",
      location: "",
    });
  };

  const sendDataToBackend = (data) => {
    axios
      .post(`http://localhost:8080/restaurant/new`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        navigate(`/`);
      })
      .catch((err) => console.log("ERROR:", err));
  };

  return (
    <div className="m-24">
      <h1 className="m-5 text-3xl font-semibold text-center">
        Add New Restaurant
      </h1>
      {/* restaurant edit form */}
      <form
        className="flex flex-col"
        onSubmit={handleSubmit}
        // encType="multipart/form-data"
      >
        {/* title */}
        <input
          className="m-4 border border-black p-2 rounded-md outline-none"
          type="text"
          placeholder="title of your restaurant"
          value={newData.title}
          onChange={handleChange}
          name="title"
          required
        />
        {/* description */}
        <textarea
          className="m-4 border border-black p-2 rounded-md outline-none"
          placeholder="description of your restaurant"
          rows={5}
          cols={40}
          value={newData.description}
          onChange={handleChange}
          name="description"
        />
        {/* service type */}
        <input
          className="m-4 border border-black p-2 rounded-md outline-none"
          type="text"
          placeholder="service type"
          value={newData.serviceType}
          onChange={handleChange}
          name="serviceType"
          required
        />
        {/* location */}
        <input
          className="m-4 border border-black p-2 rounded-md outline-none"
          type="text"
          placeholder="restaurant location"
          value={newData.location}
          onChange={handleChange}
          name="location"
        />
        {/* image */}
        <input
          className="m-4 border border-black p-2 rounded-md outline-none"
          type="file"
          onChange={handleFileChange}
          name="image"
        />
        {/* submit button */}
        <button
          className="m-4 py-3 bg-red-500 text-white rounded-md"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}
