import React from 'react'

function CardProduk({produk}) {
    return (
        <div className="col-md-3 card">
            <h3>{produk.nama_produk}</h3>
            <p>{produk.harga}</p>
            <p>{produk.deskripsi}</p>
            <p>{produk.stok}</p>
        </div>
    )
}

export default CardProduk
