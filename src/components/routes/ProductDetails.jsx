import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductDescription from '../ProductDetail/productDescription'
import SimilarProducts from '../ProductDetail/SimilarProducts'

const ProducDetail = () => {

  const [productInfo, setProductInfo] = useState()
  const {id} = useParams()


  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}` 
    axios.get(URL)
    .then(res => setProductInfo(res.data.data.product))
    .catch(err => console.log(err))
  }
  , [])

  console.log(productInfo)

  return (
    <div className='content'>
    <ProductDescription key={productInfo?.id} productInfo={productInfo} />
    <hr></hr>
    <SimilarProducts key={productInfo?.id} productInfo={productInfo} />
    </div>
  )
}

export default ProducDetail