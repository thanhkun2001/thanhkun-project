import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header'
import { getAllProduct } from '../../redux/actions/productAction'
import ProductApi from '../../services/productApi'
import Products from '../Products/Products'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Products />
    </div>
  )
}

export default HomePage
