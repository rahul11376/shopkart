import React from 'react'
import styled from 'styled-components'

const Featureimage = () => {
  return (
    <Feature>
       <img src="/pexels-cottonbro-8572163.jpg" alt="Feature" /> 



      <div className="alert">
        <h1>Complimentary shipping on all orders over $200</h1>
      </div>
    </Feature>
  )
}

export default Featureimage

const Feature = styled.div`
  position: relative;
  width: 100%;
   height: 100vh;  /* Full viewport height */
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;   /* Fill container height */
    display: block;
  }

  .alert {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(197, 164, 87, 0.85); /* warm gold semi-transparent */
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 1.1rem;
    text-align: center;
    max-width: 90%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);

    @media (max-width: 600px) {
      font-size: 1rem;
      padding: 8px 16px;
    }
  }
`
