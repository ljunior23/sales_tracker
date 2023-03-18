import React from 'react';

const Header = ({totalSale}) => {
  return (
    <header>
        <h1>Sales Tracker</h1>
        <div className="total-sale">${totalSale}</div>
    </header>
  )
}

export default Header