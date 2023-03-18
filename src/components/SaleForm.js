import React, { useRef } from 'react'

const SalesForm = ({sale, setSale}) => {
    const desc = useRef(null);
    const date =useRef(null);
    const price = useRef(null);

    const AddSales = e => {
        e.preventDefault();

        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1], d[2]);
        
        setSale([...sale, {
            "desc": desc.current.value,
            "price": price.current.value,
            "date": newD.getTime()
        }]);

        desc.current.value ="";
        price.current.value = null;
        date.current.value =null;
    }
  return (
   <form className="sale-form" onSubmit={AddSales}>
        <div className="form-inner">
            <input type='text' name='desc' id='desc' 
            placeholder='Sale Description...' ref={desc} />
            <input type='number' name='price' id='price' placeholder='Price...' ref={price}/>
            <input type='date' name='date' id='date' placeholder='Income date...' ref={date}/>
            <input type="submit" value="Add Sale" />
        </div>
   </form>
  )
}

export default SalesForm