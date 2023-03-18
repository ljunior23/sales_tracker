import React from 'react'
import Item from './SaleItem';

const SaleList = ({ sale}) => {
     

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }
  return (
    <div className='sale-list'>
        {
            sale.sort(sortByDate).map((value, index) => (
                <Item key={index}
                    income={value}
                    index ={index}
                />
            ))
        }
    </div>
  )
}

export default SaleList