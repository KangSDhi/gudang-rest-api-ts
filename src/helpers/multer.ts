import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `images/${uuidv4()}.${ext}`);
    }
});

const upload = multer({ storage: multerStorage });

export default upload;