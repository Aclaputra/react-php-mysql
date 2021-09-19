import axios from 'axios';

export default axios.create({
    // locate your own connections/ambildata.php
    baseURL: 'http://localhost/latihan-react/react-php-mysql/connections/ambildata.php'
});