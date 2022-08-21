import express, { Express, Request, Response, Router } from "express";
import multer from "multer";
import expressValidator from "express-validator";
import barangRouter from "./routes/barang.route";
import kategoriRouter from "./routes/kategori.route";
import penggunaRouter from "./routes/pengguna.route";

const app: Express = express();
const port = 3000;

const upload = multer({ dest: 'uploads/cache' });

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.post('/', upload.single('foto'), (req: Request, res: Response) => {
    console.log(req.file);
});

const routes = [
    barangRouter,
    kategoriRouter,
    penggunaRouter
];

app.use('/api/gudang', routes);

export default app;