import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'

const CartDetails = ({product, getFullCart}) => {

  const handleDeleteProduct = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
      .then(() => getFullCart())
      .catch(err => console.log(err))
  }

  return (
    <article className='cart-item'>
      <header className='cart-item-header'>
        <h4 className='cart-category'>{product.brand}</h4>
        <h3 className='cart-name'>{product.title}</h3>
      </header>
      <div className='cart-card-body'>
        <i onClick={handleDeleteProduct} className="cart-trash fa-regular fa-trash-can"></i>
        <span className='cart-quantity'>{product.productsInCart.quantity}</span>
        <footer className='cart-item-footer'>
          <span className='cart-total-label'>Total:</span>
          <p className='cart-total-number'>{product.price}</p>
        </footer>
      </div>
    </article>
  )
}

export default CartDetails