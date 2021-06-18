import React, { Component } from 'react'
import axios from 'axios'

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
        await axios.get('http://localhost/tokoAPI/ambildata.php')
        .then(response => this.setState({
            produk: response.data
        }))

        console.log(this.state);
    }

    render() {
        return (
            <div>
                Daftar Produk
            </div>
        )
    }
}

export default DaftarProduk
