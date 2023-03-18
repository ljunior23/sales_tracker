import React from 'react'

const SaleItem = ({sale}) => {
    let date = new Date(sale.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

  return (
    <div className="sale-item">
            <div className="desc">{sale.desc}</div>
            <div className="price">${sale.price}</div>
            <div className="date">{day + "/" + month + "/" + year}</div>
    </div>
  )
}

export default SaleItem