import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import CartDetails from '../cart/CartDetails'

const Cart = () => {

  const [cartProducts, setCartProducts] = useState()

  const getFullCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfig())
      .then(res => setCartProducts(res.data.data.cart.products))
      .catch(err => setCartProducts())
  }

  useEffect(() => {
    getFullCart()
  }, [])

  const handleCheckout = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const obj = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios.post(URL, obj, getConfig())
      .then(res => {
        console.log(res.data)
        getFullCart()
      })
      .catch(err => console.log(err))
  }

  return (
    <section className='cart'>
      <div className='cart__container-item'>
        {
          cartProducts?.map(product => (
            <CartDetails
              key={product.id}
              product={product}
              getFullCart={getFullCart}
            />
          ))
        }
      </div>
      <hr className='cart__hr' />
      <footer className='cart__footer'>
        <span className='cart__total-global-label'>Total:</span>
        <p className='cart__total-global-value'>1350</p>
        <button onClick={handleCheckout} className='cart__btn'>Checkout</button>
      </footer>
    </section>
  )
}

export default Cart