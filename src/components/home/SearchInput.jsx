import React from 'react'

const SearchInput = ({setSearchProduct}) => {


    const handleSearch = (e) =>{
        e.preventDefault()
        setSearchProduct(e.target.nameProduct.value)
      }

    return (
        <form className='search-form' action="" onSubmit={handleSearch}>
            <input type="text" id='nameProduct' placeholder='Search Product' />
            <button><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button>
        </form>
    )
}

export default SearchInput