import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const [originalData, setoriginalData] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    // image: null,
  });

  const [file, setFile] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurant/${params.id}/edit`)
      .then((res) => {
        setoriginalData(res.data);
      })
      .catch((err) => console.log("ERROR:", err));
  }, []);

  const handleChange = (e) => {
    setFormData((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const getChangedFields = () => {
    let changedData = {};

    for (const key in formData) {
      if (formData[key].length > 0) {
        changedData[key] = formData[key];
      }
    }

    // console.log(changedData);

    return changedData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const changedFields = getChangedFields();

    const changedData = new FormData();

    changedData.append("title", changedFields.title);
    changedData.append("description", changedFields.description);
    changedData.append("location", changedFields.location);
    changedData.append("image", file);

    sendDataToBackend(changedData);

    setFormData({ title: "", description: "", location: "" });
  };

  const sendDataToBackend = (data) => {
    axios
      .patch(`http://localhost:8080/restaurant/${params.id}`, data)
      .then((res) => {
        navigate(`/restaurant/${params.id}`);
      })
      .catch((err) => console.log("ERROR:", err));
  };

  return (
    <div className="m-24">
      <h1 className="m-5 text-3xl font-semibold text-center">
        Edit Your Restaurant
      </h1>
      {/* restaurant edit form */}
      <form className="flex flex-col" onSubmit={handleSubmit}>
        {/* title */}
        <input
          className="m-4 border border-black p-2 rounded-md outline-none"
          type="text"
          placeholder={originalData.title}
          value={formData.title}
          onChange={(e) => handleChange(e)}
          name="title"
        />

        {/* description */}
        <textarea
          className="m-4 border border-black p-2 rounded-md outline-none"
          placeholder={originalData.description}
          rows={5}
          cols={40}
          value={formData.description}
          onChange={(e) => handleChange(e)}
          name="description"
        />

        {/* <input
          className="m-4 border border-black p-2 rounded-md outline-none"
          type="text"
          placeholder={originalData.serviceType}
          value={formData.serviceType}
          onChange={(e) => handleChange(e)}
          name="serviceType"
        /> */}

        {/* location */}
        <input
          className="m-4 border border-black p-2 rounded-md outline-none"
          type="text"
          placeholder={originalData.location}
          value={formData.location}
          onChange={(e) => handleChange(e)}
          name="location"
        />

        {/* image */}
        <input
          className="m-4 border border-black p-2 rounded-md outline-none"
          type="file"
          name="image"
          onChange={handleFileChange}
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
