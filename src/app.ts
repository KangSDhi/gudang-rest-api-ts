import express, { Express, Request, Response, Router } from "express";
import multer from "multer";
import bodyParser from "body-parser";
import expressValidator from "express-validator";
import barangRouter from "./routes/barang.route";
import kategoriRouter from "./routes/kategori.route";
import penggunaRouter from "./routes/pengguna.route";

const app: Express = express();
const port = 3000;

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "public");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
    }
});

const upload = multer({ storage: multerStorage });


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.post('/', upload.array('foto', 5), (req: Request, res: Response) => {
    res.send(req.files);
});

const routes = [
    barangRouter,
    kategoriRouter,
    penggunaRouter
];

app.use('/api/gudang', routes);

export default app;