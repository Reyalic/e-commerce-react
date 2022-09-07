import React, { useState } from 'react'

const ProductDescription = ({productInfo}) => {

    const [count, setCount] = useState(1)

    const handlePlus = () => setCount(count + 1)
    const handleMinus = () => count - 1 >= 1 ? setCount(count - 1) : setCount(1)

  return (
    <section className="product-info">
        <h2 className="product-info-name">{productInfo?.title}</h2>
        <p className="product-info-text">{productInfo?.description}</p>
        <div className="product-info-body">
            <article className="product-info-price">
                <h3>Price</h3>
                <span className="product-info-price-value">{productInfo?.price}</span>
            </article>
            <article className="product-info-stock">
                <h3 className="product-info-stock-value">Stock</h3>
                <div className="stock-container">
                    <button onClick={handlePlus} className="stock-button-plus">+</button>
                    <span className="stock-value">{count}</span>
                    <button onClick={handleMinus} className="stock-button-plus">-</button>
                </div>
            </article>
        </div>

    </section>
  )
}

export default ProductDescription