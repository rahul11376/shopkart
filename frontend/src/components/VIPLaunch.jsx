import React from 'react'
import styled from 'styled-components'

const VIPLaunch = () => {
  return (
    <VIP>
      <div className="vip-content">
        <h2>Limited Editions</h2>
        <h3>Exclusive Timepieces for VIP Collectors</h3>
        <p>
          Explore our handpicked collection of limited edition watches, crafted for the discerning few.
          Each piece is unique, numbered, and designed to elevate your style with timeless luxury.
        </p>
        <button className="cta">Explore Collection</button>
      </div>
      <div className="vip-image">
        <img src="\public\LIMITED.jpg" alt="Limited Edition Watch" />
      </div>
    </VIP>
  )
}

export default VIPLaunch

// ================= STYLED COMPONENT =================

const VIP = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 80px 20px;
  background: #fff;
  align-items: center;

  .vip-content {
    flex: 1;
    min-width: 280px;

    h2 { font-size: 2.5rem; color: #111; margin-bottom: 12px; font-weight: 700; }
    h3 { font-size: 1.5rem; color: #bfa46f; margin-bottom: 16px; font-weight: 600; }
    p { font-size: 1rem; color: #444; line-height: 1.6; margin-bottom: 24px; }

    .cta {
      padding: 10px 24px;
      font-size: 1rem;
      font-weight: 600;
      background: linear-gradient(135deg, #bfa46f, #947a2d);
      color: #fff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: transform 0.3s ease;

      &:hover { transform: scale(1.05); }
    }
  }

  .vip-image {
    flex: 1;
    min-width: 280px;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      max-width: 500px;
      border-radius: 12px;
      object-fit: cover;
      box-shadow: 0 6px 18px rgba(0,0,0,0.1);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 30px;
    padding: 60px 20px;
    .vip-image img { max-width: 100%; }
  }
`
