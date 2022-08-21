import app from "../src/app";
import request from "supertest";

describe("GET /barang", () => {
    it("check barang /barang", async () => {
        const res = await request(app)
            .get("/api/gudang/barang")
            .send();
        // console.log(res.body.data.length);
        expect(res.statusCode).toEqual(200);
    });
});

describe("GET /barang?", () => {
    it("check array length /barang with query params size & page", async () => {
        const size: number = 2;
        const page: number = 1;

        const res = await request(app)
            .get(`/api/gudang/barang?size=${size}&page=${page}`)
            .send();
        
        expect(size).toEqual(res.body.data.length);
    })
});