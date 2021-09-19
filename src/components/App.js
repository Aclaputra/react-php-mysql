import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Header from './Header'
import DaftarProduk from './DaftarProduk'

// Layout Website
function App() {
    return (
        <BrowserRouter>
            <Header />
            <DaftarProduk />
        </BrowserRouter>
    )
}
export default App
