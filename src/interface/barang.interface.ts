export default interface Barang {
    id?: string,
    nama_barang: string,
    jumlah_barang: number,
    deskripsi_barang: string,
    gambar_barang: string[],
    kategoriId: string,
    createdAt: number,
    updatedAt: number
}