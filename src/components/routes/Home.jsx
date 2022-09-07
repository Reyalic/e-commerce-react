import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice' 
import CardHome from '../home/CardHome'
import SearchInput from '../home/SearchInput'
import axios from 'axios'
import SelectProducts from '../home/SelectProducts'

const Home = () => {


  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  const [searchProduct, setSearchProduct] = useState("")
  const [productType, setProductType] = useState()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])


  return (
    <div className="home">
      <div className='filter-products'>
        <SearchInput 
          setSearchProduct={setSearchProduct}
        />
        <SelectProducts
          setProductType={setProductType}
          productType={productType}
          products={products}
        />
      </div>
      <div className="home-container-card">
        {
          products?.map(product => {

                if (searchProduct != ""){

                  if (product.title.toLowerCase().includes(`${searchProduct}`)){

                    return(<CardHome searchProduct={searchProduct} key={product.id} product={product} />)
                  } else {

                    return <br />  
                  }
                } else if (productType) {

                  if (product.category.name == productType) {

                    return <CardHome key={product.id}  product={product} />
                  } else if (productType == "All") {

                    return <CardHome searchProduct={searchProduct} key={product.id} product={product} />
                  }
                } else {

                  return <CardHome searchProduct={searchProduct} key={product.id} product={product} />
                }
              })
        }
      </div>
    </div>
  )
}

export default Home