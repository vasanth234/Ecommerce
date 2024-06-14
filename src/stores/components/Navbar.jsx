import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='Navsection'>
        <div className='title'>
            <h2>E-Mart</h2>
        </div>
        <div className='search'>
            <input type='search' placeholder='search'/>
        </div>
        <div className='user'>
            <div className='user-detail'>signIn/sign</div>
            <Link to='/cart'><div className='cart'>cart</div></Link>
            
        </div>
    </div>
    <div className='submenu'>
     <ul>
     <Link to='/mobiles'><li>Mobiles</li></Link>
     <Link to='/computers'><li>Computers</li></Link>
     <Link to='/acs'><li>Acs</li></Link>
     <Link to='/books'><li>Books</li></Link>
<Link to='/fridge'><li>Fridge</li></Link>
<Link to='/furniture'><li>Furniture</li></Link>
<Link to='/kitchen'><li>Kitchen</li></Link>
<Link to='/men'><li>Men</li></Link>
<Link to='/tv'><li>TV</li></Link>
<Link to='/watch'><li>Watch</li></Link>
<Link to='/speaker'><li>Speaker</li></Link>
<Link to='/woman'> <li>Woman</li></Link>

     </ul>
     
    </div>
    </>
  )
}


export default Navbar