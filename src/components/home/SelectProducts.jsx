import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectProducts = ({setProductType, productType}) => {

const [categories, setCategories] = useState()

useEffect(()=>{
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(url)
    .then(res => setCategories(res.data.data.categories))
    .catch(err => console.log(err))
},[])


const handleChange = (e) =>{
    e.preventDefault()
    setProductType(e.target.value)
}


  return (
    <div>
        <select className='select-category' value={productType} onChange={handleChange}>
            <option value="All">All Products</option>
            {categories?.map(option =>(
                <option value={option.name} key={option.id}>{option.name}</option>
            ))}
        </select>
    </div>
  )
}

export default SelectProducts