import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'

const CardHome = ({product}) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  const handleAddClick = () => {
    e.stopPropagation()
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
      id: product.id,
      quantity: 1
    }
    axios.post(URL, obj, getConfig())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }
  return (
    <article onClick={handleClick} className='card-container'>
      <div className='product-card'>
        <header>
            <img src={product.productImgs[0]} alt="" />
        </header>
        <div className='card-body'>
            <h3>{product.title}</h3>
            <div className='product-data' >
              <section className='product-price' >
                <h4>Price</h4>
                <span>{product.price}</span>
              </section>
              <button className='card-home__btn' onClick={handleAddClick}><i className="fa-solid fa-cart-plus"></i></button>
            </div>
        </div>
      </div>
    </article>
  )
}

export default CardHome