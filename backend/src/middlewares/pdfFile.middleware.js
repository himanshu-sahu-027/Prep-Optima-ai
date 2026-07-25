import multer from "multer";

// Configure multer to handle PDF file uploads 

/*  why multer ? 
    Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files.
    It makes it easy to handle file uploads in Node.js applications by providing a simple API to process incoming files 
    and store them in memory or on disk. 
    
    In this case, multer is used to handle PDF file uploads, ensuring that the uploaded files are processed correctly 
    and can be accessed in the application and also ensures that the uploaded files are limited to a specific size (4MB in this case) to prevent excessive resource usage.
*/

const uploadPdf = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 4 * 1024 * 1024, // Limit file size to 4MB
    },
});

export default uploadPdf;
