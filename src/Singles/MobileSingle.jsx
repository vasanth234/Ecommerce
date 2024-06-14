import React from 'react'
import {mobileData} from '../stores/data/mobiles'
import {useParams} from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
import { useCart } from '../stores/Context/CardContext'
const MobileSingle = () => {

    const {id}=useParams();
    const [addToCart,cartItems]=useCart()
    const product=mobileData.find((item)=>item.id===id)
    console.log(id)
  return (
    <>
    <Navbar/>
    
        <div className='ind-rt'>
            <div className='ind-img'>
                <img src={product.image} alt=""/>
            </div>
        <div className='ind-details space'>
            <div className='ind-comp'>
                <h2>{product.company}</h2>
            </div>
            <div className='ind-model space'>
                <h2>{product.model}</h2>

            </div>
            <div className='ind-price space'>
                <h2>{product.price}</h2>

            </div>
            <div className='ind-des space'>
                <p>{product.description}</p>

            </div>
            <button onClick={()=>addToCart(product)}>Add to cart</button>
        </div>
       
            
        </div>
    
    </>
  )
}

export default MobileSingle