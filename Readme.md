# Gudang API Specs (TyperScript)

## A. Kategori Barang

### A.1 Read List Kategori Barang

* Request :
    * Method : **GET**
    * Endpoint : `/api/gudang/kategori`
    * Header : 
        * Accept : `application/json`
    
* Response :

```json
{
    "code": "number",
    "status": "string",
    "data": [
        {
            "id": "string, unique",
            "kode_kategori": "string, unique",
            "nama_kategori": "string",
            "sub_kategori": "string",
            "createdAt": "number",
            "updatedAt": "number"
        }
    ]
}
```

### A.2 Read Kategori Barang By ID Kategori

* Request :
    * Method : **GET**
    * Endpoint : `/api/gudang/kategori/{id}`
    * Header : 
        * Accept : `application/json`

* Response :

```json
{
    "code": "number",
    "status": "string",
    "data": {
        "id": "string, unique",
        "kode_kategori": "string, unique",
        "nama_kategori": "string",
        "sub_kategori": "string",
        "createdAt": "number",
        "updatedAt": "number"
    }
}
```

### A.3 Read List Kategori Barang With Pagination

* Request :
    * Method : **GET**
    * Endpoint : `/api/gudang/kategori/?size=0&page=1`,
    * Header :
        * Accept : `application/json`
    * Params :
        | Key | Type |
        |-----|------|
        |size |number|
        |page |number|

* Response :
```json
{
    "code": "number",
    "status": "string",
    "data": [
        {
            "id": "string, unique",
            "kode_kategori": "string, unique",
            "nama_kategori": "string",
            "sub_kategori": "string",
            "createdAt": "number",
            "updatedAt": "number"
        }
    ]
}
```

### A.4 Create Kategori Barang

* Request :
    * Method : **POST**
    * Endpoint : `/api/gudang/kategori`
    * Header :
        * Accept : `application/json`
        * Content-type : `application/json`
    * Body :
    ```json
    {
        "kode_kategori": "string, unique",
        "nama_kategori": "string",
        "sub_kategori": "string",
        "createdAt": "number",
        "updatedAt": "number"
    }
    ```


* Response :
```json
{
    "code": "number",
    "status": "string",
    "data": {
        "id": "string, unique",
        "kode_kategori": "string, unique",
        "nama_kategori": "string",
        "sub_kategori": "string",
        "createdAt": "number",
        "updatedAt": "number"
    }
}
```

### A.5 Update Kategori Barang

### A.6 Delete Kategori Barang

---

## B. Barang

### B.1 Read List Barang

### B.2 Read Barang By ID Barang

### B.3 Read List Barang With Pagination

### B.4 Create Barang

### B.5 Update Barang

### B.6 Delete Barang

---

## C. Transaksi Barang Keluar & Barang Masuk

### C.1 Create Transaksi Barang Masuk

### C.2 Create Transaksi Barang Keluar
