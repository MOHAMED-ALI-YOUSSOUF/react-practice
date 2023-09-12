import React from 'react'
import ProductHeader from '../product-header/product-header'
import ProductFooter from '../product-footer/ProductFooter';
import ProductList from '../product.list/Product-list';


const ProductMain = () => {
  return (
    <div>
      <ProductHeader/> <ProductList />
      <ProductFooter />
    </div>
  )
}

export default ProductMain
