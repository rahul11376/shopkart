import React, { useState } from 'react'
import {useEffect } from 'react'
import styled from 'styled-components'
import { FaCartArrowDown } from 'react-icons/fa'
import { SiWish } from 'react-icons/si'
import { Link } from 'react-router-dom'



const Navbar = ({data, view, item}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const newCartItems = [
      ...(Array.isArray(data) ? data : []),
      ...(Array.isArray(view) ? view : []),
      ...(Array.isArray(item) ? item : []),
    ];

    setCount(newCartItems.length);

  }, [data, view, item]);

  console.log("navbar_count", count);


  return (
    <Nav>
      <div className="container">
        <div className="list">
          <Link to="/">Home</Link>
          <Link to="/Catalog">Catalog</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="logo">Raynox & Co</div>
        <div className="cart">
          <Link to="/wishlist"><SiWish /></Link>

           <Link to="/cart" className='cart_icon'>
           <FaCartArrowDown />  {count > 0 && <span className="badge">{count}</span>}
           </Link> 
        </div>
      </div>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  background-color: var(--color-gray);
  color: white;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .list {
    display: flex;
    gap: 20px;

     a{
      background: none;
      border: none;
      color: white;
      font-size: 16px;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover,
      &:focus {
        color: var(--color-gold);
        outline: none;
      }
    }
  }

  .logo {
    font-size: 26px;
    font-weight: bold;
    user-select: none;
    white-space: nowrap;
  }

  .cart {
    display: flex;
    gap: 16px;

     a{
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover,
      &:focus {
        color: var(--color-gold);
        outline: none;
      }
    }
  }
.cart-icon {
  display: inline-block; /* or 'block' depending on layout */
  position: relative; /* Ensure it's positioned for transformations */
  cursor: pointer;
}
.badge {
  position: absolute;
  top:-8px;
 color:gold;
}




`
