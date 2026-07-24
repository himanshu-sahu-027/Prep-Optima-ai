import multer from "multer";


const uploadPdf = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 4 * 1024 * 1024, // Limit file size to 4MB
    },
});

export default uploadPdf;
