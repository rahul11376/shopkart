import React from 'react';
import styled from 'styled-components';

const Exclusive = () => {
  return (
    <Wrapper>
      <img src="/exclusive.jpg" alt="Exclusive" />
     
      <Overlay>
        <h1> Exclusive Timepiece Collection</h1>
        <p>Limited editions crafted for connoisseurs of luxury.</p>
        <h1>Raynox& co</h1>
      </Overlay>
    </Wrapper>
  )
}

export default Exclusive;

const Wrapper = styled.div`
  margin-top: 40px;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  height: 400px;  
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;             
  transform: translateY(-50%);
  text-align: right;
  z-index: 10;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;      /* white text for visibility */
    margin-bottom: 10px;
    text-shadow: 0 2px 6px rgba(0,0,0,0.5);  /* subtle shadow for readability */
  }

  p {
    font-size: 1.2rem;
    color: #fff;
    margin: 0;
    text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  }

  @media (max-width: 768px) {
    right: 5%;  

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`
