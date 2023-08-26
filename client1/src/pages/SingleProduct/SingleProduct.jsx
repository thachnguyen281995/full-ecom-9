import React, { useState } from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import ProductDetail from '../../components/productDetail/ProductDetail'
const SingleProduct = () => {
  return (
    <div>
      <Meta title={'Apple'} />
      <BreadCrumb title="Apple" />
      <ProductDetail/>
    </div>
  )
}

export default SingleProduct