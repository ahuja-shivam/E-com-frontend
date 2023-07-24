import React from 'react'

import { NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart'
const CardItem = (props) => {
    const {addItem}=useCart();
  return (
    <>
    <div className="card my-5 mx-3 ms-5 py-4" style={{width: "18rem"}}>
      <img src={props.img} className="card-img-top" alt={props.title} height="300px"/>
      <div className="card-body text-center">
        <h5 className="card-title">{props.title}</h5>
        <p className="lead">{'\u20B9'}{props.price}</p>
        <NavLink to={`/products/${props.id}`} className="btn btn-outline-secondary">
         View Details
        </NavLink><br/>
        <button className="btn  my-2" onClick={()=>addItem(props.item)}>Add to Cart</button>
      </div>
    </div>
  </>
  )
}

export default CardItem