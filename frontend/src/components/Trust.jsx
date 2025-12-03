import React from 'react';
import styled from 'styled-components';
import { FaShieldAlt, FaLock, FaTruck, FaUndo } from 'react-icons/fa';

const Trust = () => {
  return (
    <TrustF>
      <div className="trust-wrapper">
        <div className="trust-item">
          <FaShieldAlt className="icon" />
          <h4>2-Year Warranty</h4>
          <p>Guaranteed quality craftsmanship</p>
        </div>
        <div className="trust-item">
          <FaLock className="icon" />
          <h4>Secure Payments</h4>
          <p>100% safe & encrypted transactions</p>
        </div>
        <div className="trust-item">
          <FaTruck className="icon" />
          <h4>Free Shipping</h4>
          <p>On all orders over $200</p>
        </div>
        <div className="trust-item">
          <FaUndo className="icon" />
          <h4>Easy Returns</h4>
          <p>Hassle-free 30-day return policy</p>
        </div>
      </div>
    </TrustF>
  );
};

export default Trust;

const TrustF = styled.div`
  width: 100%;
  /* background-color: #f3f3f3; */
  padding: 40px 20px;

  .trust-wrapper {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    text-align: center;
  }

  .trust-item {
    flex: 1 1 220px;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
  }

  .trust-item:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 28px;
    color: var(--color-gold);
    margin-bottom: 10px;
  }

  h4 {
    margin: 10px 0 5px;
    font-size: 16px;
    color: var(--color-charcoal);
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;
