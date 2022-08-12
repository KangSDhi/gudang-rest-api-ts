import express, { Express, Request, Response, Router } from "express";
import barangRouter from "./routes/barang.route";
import kategoriRouter from "./routes/kategori.route";
import penggunaRouter from "./routes/pengguna.route";

const app: Express = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

const routes = [
    barangRouter,
    kategoriRouter,
    penggunaRouter
];

app.use('/api/gudang', routes);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});