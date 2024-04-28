import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css'

const Navbar = ({size,setShow}) => {
    return (
        <nav>
            <div className='nav_box'>
                <span className='my_shop'>
                    Mega Shop
                </span>
                <div className='cart' onClick={()=>setShow(false)}>
                    <span>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </span>
               <span>{size}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar