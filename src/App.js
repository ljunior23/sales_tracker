import React, { useState, useEffect } from 'react'

import Header from './components/Header';
import Form from './components/SaleForm'
import List from './components/SaleList'

const App = () => {
    const [sale, setSale ] = useState([]);
    const [totalSale, setTotalSale ] = useState(0);

    useEffect(() => {
        let temp = 0;
        for(let i = 0; i< sale.length; i++){
            temp += parseInt(sale[i].price);
        }

        setTotalSale(temp);
    }, [sale])
  return (
    <div className='App'>
        <Header totalSale={totalSale} />
        <Form sale={sale} setSale={setSale} />
        <List sale={sale} setSale={setSale} />
    </div>
  )
}

export default App