import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import {FaShoppingCart} from "react-icons/fa"

const CartBtn = () => {
const {totalItems}=useCart()
  return (
   <>
   <NavLink to='/cart' className='btn btn-outline ms-2'>
   <FaShoppingCart /> {totalItems} 

   </NavLink>
   </>
  )
}

export default CartBtn;