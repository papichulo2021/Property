import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  // Note the consistent capitalization
    api_key: process.env.CLOUDINARY_API_KEY,        // Same here
    api_secret: process.env.CLOUDINARY_API_SECRET,  // And here
});

export default cloudinary;
