import { v2 as cloudinary } from "cloudinary";
import exp from "constants";
import fs from "fs";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import "dotenv/config";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "bitebazaar",
    allowedformats: ["png", "jpg", "jpeg"],
  },
});

// const uploadOnCloudinary = async (localFilePath) => {
//   try {
//     if (!localFilePath) return null;
//     //upload the file on cloudinary
//     const response = await cloudinary.uploader.upload(localFilePath, {
//       resource_type: "auto",
//     });
//     // file has been uploaded successfull
//     //console.log("file is uploaded on cloudinary ", response.url);
//     fs.unlinkSync(localFilePath);
//     return response;
//   } catch (error) {
//     fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
//     return null;
//   }
// };

const upload = multer({ storage });

export default upload;
