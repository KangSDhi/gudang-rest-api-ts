export default interface transaksiBarang {
    id? : string,
    tanggal_masuk? : number,
    tanggal_keluar? : number,
    jumlah_barang : number,
    barangId : string,
    penggunaId: string,
    createdAt : number,
    updatedAt: number
}