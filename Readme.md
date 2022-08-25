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
    * Endpoint : `/api/gudang/kategori/?size=0&page=1`
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
    * Headers :
        * Accept : `application/json`
        * Content-type : `application/json`
    * Body :
    ```json
    {
        "kode_kategori": "string, unique",
        "nama_kategori": "string",
        "sub_kategori": "string",
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

* Request :
    * Method : **PUT**
    * Endpoint : `/api/gudang/kategori/{id}`
    * Headers :
        * Accept : `application/json`
        * Content-Type : `application/json`
    * Body : 
    ```json
    {
        "kode_kategori" : "string, unique",
        "nama_kategori" : "string",
        "sub_kategori" : "string",
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
        "updatedAt": "number"
    }
}
```
### A.6 Delete Kategori Barang

* Request :
    * Method : **DELETE**
    * Endpoint : `/api/gudang/kategori/{id}`
    * Header :
        * Accept : `application/json`
     

* Response :
```json
{
    "code" : "number",
    "status" : "string"
}
```
---

## B. Barang

### B.1 Read List Barang

* Request : 
    * Method : **GET**
    * Endpoint : `/api/gudang/barang`
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
            "nama_kategori": "string",
            "nama_barang": "string",
            "jumlah_barang": "number",
            "deskripsi_barang": "string",
            "gambar_barang": [
                "string"   
            ],
            "createdAt": "number",
            "updatedAt": "number"
        }
    ]
}
```

### B.2 Read Barang By ID Barang

* Request :
    * Method : **GET**
    * Endpoint : `/api/gudang/barang/{id}`
    * Header : 
        * Accept : `application/json`

* Response :

```json
{
    "code": "number",
    "status": "string",
    "data": {
        "id": "string, unique",
        "nama_kategori": "string",
        "nama_barang": "string",
        "jumlah_barang": "number",
        "deskripsi_barang": "string",
        "gambar_barang": [
            "string"   
        ],
        "createdAt": "number",
        "updatedAt": "number"
    }
}
```
### B.3 Read List Barang With Pagination

* Request :
    * Method : 
    * Endpoint : `/api/gudang/barang/?size=0&page=0`
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
            "nama_kategori": "string",
            "nama_barang": "string",
            "jumlah_barang": "number",
            "deskripsi_barang": "string",
            "gambar_barang": [
                "string"   
            ],
            "createdAt": "number",
            "updatedAt": "number"
        }
    ]
}
```

### B.4 Create Barang

* Request :
    * Method : **POST**
    * Endpoint : `/api/gudang/barang`
    * Headers :
        * Accept : `application/json`
        * Content-Type : `application/json`
    * Body :
    ```json
    {
        "kategoriId": "string",
        "penggunaId": "string",
        "nama_barang": "string",
        "jumlah_barang": "number",
        "deskripsi_barang": "string",
        "gambar_barang": [
            "string"
        ],
        "tanggal_masuk": "number"
    }
    ```

* Response :
```json
{
    "code": "number",
    "status": "string",
    "data": {
        "id": "string, unique",
        "nama_kategori": "string",
        "nama_barang": "string",
        "jumlah_barang": "number",
        "deskripsi_barang": "string",
        "gambar_barang": [
            "string"   
        ],
        "createdAt": "number",
        "updatedAt": "number"
    }
}
```

### B.5 Update Barang

* Request :
    * Method : **PUT**
    * Endpoint : `/api/gudang/barang`
    * Headers : 
        * Accept : `application/json`
        * Content-Type : `application/json`
    * Body : 
    ```json
    {
        "id": "string, unique",
        "kategoriId": "string",
        "deskripsi_barang": "string",
        "gambar_barang": [
            "string"   
        ],
    }
    ```

* Response :
```json
{
    "code": "number",
    "status": "string",
    "data": {
        "id": "string, unique",
        "nama_kategori": "string",
        "nama_barang": "string",
        "jumlah_barang": "number",
        "deskripsi_barang": "string",
        "gambar_barang": [
            "string"   
        ],
        "updatedAt": "number"
    }
}
```

### B.6 Delete Barang

* Request : 
    * Method : **DELETE**
    * Endpoint : `/api/gudang/barang`
    * Header : 
        * Accept : `application/json`
    
* Response :
```json
{
    "code": "number",
    "status": "string"
}
```

---

## C. Transaksi Barang Keluar & Barang Masuk

### C.1 Create Transaksi Barang Masuk

* Request :
    * Method : **POST**
    * Endpoint : `/api/gudang/transaksi/masuk`
    * Headers : 
        * Accept : `application/json`
        * Content-Type : `application/json`
    * Body :
    ```json
    {
        "barangId": "string",
        "penggunaId": "string",
        "jumlah_barang": "number",
        "tanggal_masuk": "number"
    }
    ```

* Response :
```json
{
    "code" : "number",
    "status" : "string",
    "data" : {
        "id" : "string, unique",
        "nama_barang" : "string",
        "nama_pengguna" : "string",
        "jumlah_barang" : "number",
        "tanggal_masuk": "number",
        "createdAt": "number",
        "updatedAt": "number"  
    }
}
```

### C.2 Create Transaksi Barang Keluar

* Request :
    * Method : **POST**
    * Endpoint : `/api/gudang/transaksi/keluar`
    * Headers :
        * Accept : `application/json`
        * Content-Type : `application/json`
    * Body :
    ```json
    {
        "barangId": "string",
        "penggunaId": "string",
        "jumlah_barang": "number",
        "tanggal_keluar": "number"
    }

* Response :
```json
{
    "code" : "number",
    "status" : "string",
    "data" : {
        "id" : "string, unique",
        "nama_barang" : "string",
        "nama_pengguna" : "string",
        "jumlah_barang" : "number",
        "tanggal_keluar": "number",
        "createdAt": "number",
        "updatedAt": "number"  
    }
}
```