import React, { Component } from 'react'
import CardProduk from './CardProduk';
import API from '../axios/Api'

export class DaftarProduk extends Component {
    /**
     * state is a variable
     * componentDidMount axios.get used for retreiving data from MySQL
     * then response.data will transfer it to the state.produk.
     * something like that~
     */
    state = {
        produk: []
    }

    async componentDidMount() {
        await API.get('ambildata.php')
        .then(response => this.setState({
            produk: response.data
        }))

        console.log(this.state);
    }

    render() {

        /**
         * map state(variabel) dari produk ke variabel renderData dengan mengambil data dari CardProduk.js
         * pass data dari axios get menggunakan props ke file CardProduk.js
         * then->
         * panggil render data dan tampilkan pada daftarProduk layout.
         */
        const renderData = this.state.produk.map(produk => {
            return(
                <CardProduk produk={produk} key={produk.id}/>
            )
        })

        return (
            <div className="container">
                <div className="row d-flex justify-content-evenly">
                    {renderData}
                </div>
            </div>
        )
    }
}

export default DaftarProduk
