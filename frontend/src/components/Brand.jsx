import React from 'react'
import styled from 'styled-components'
import { FaCogs, FaGem, FaClock } from 'react-icons/fa'

const Brand = () => {
  return (
    <CONTAINER>

      {/* 1️⃣ Brand Story */}
      <BrandStory>
        <div className="story-content">
          <h2>Our Legacy of Time</h2>
          <h3>Crafted for the Discerning Few</h3>
          <p>
            Since 1920, our timepieces have embodied the pinnacle of craftsmanship and sophistication. 
            Every watch is meticulously engineered, blending timeless design with modern precision. 
            From the delicate sweep of the hands to the gleam of the polished steel, each piece tells 
            a story of elegance and excellence.
          </p>
          <button className="cta">Discover Our Story</button>
        </div>
        <div className="story-image">
          <img src="\public\brandstory.jpg" alt="Luxury watch craftsmanship" />
        </div>
      </BrandStory>

      {/* 2️⃣ Craftsmanship Highlights */}
      <Craftsmanship>
        <h2>Crafted to Perfection</h2>
        <div className="features">
          <div className="feature">
            <FaCogs className="icon" />
            <h3>Swiss Precision</h3>
            <p>Engineered with exacting standards for unmatched accuracy.</p>
          </div>
          <div className="feature">
            <FaGem className="icon" />
            <h3>Premium Materials</h3>
            <p>Only the finest stainless steel, sapphire crystal, and leather straps.</p>
          </div>
          <div className="feature">
            <FaClock className="icon" />
            <h3>Timeless Design</h3>
            <p>Elegant, refined style for every occasion.</p>
          </div>
        </div>
      </Craftsmanship>

      {/* 3️⃣ Testimonials / Press */}
      <Testimonials>
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"Absolutely exquisite! The details are flawless."</p>
            <span>- Sarah K.</span>
          </div>
          <div className="testimonial">
            <p>"Every time I wear it, I feel the craftsmanship and luxury."</p>
            <span>- James L.</span>
          </div>
          <div className="testimonial">
            <p>"A timeless piece that elevates any outfit."</p>
            <span>- Olivia M.</span>
          </div>
        </div>
        <div className="press">
          <h3>Press Mentions</h3>
          <div className="logos">
            <span>Forbes</span>
            <span>GQ</span>
            <span>Robb Report</span>
          </div>
        </div>
      </Testimonials>

    </CONTAINER>
  )
}

export default Brand

// ================= STYLED COMPONENTS =================

const CONTAINER = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #111;
`

// ---------- Brand Story ----------
const BrandStory = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 80px 20px;
  background: #f8f8f8;
  align-items: center;

  .story-content {
    flex: 1;
    min-width: 280px;

    h2 { font-size: 2.5rem; margin-bottom: 12px; font-weight: 700; }
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

  .story-image {
    flex: 1;
    min-width: 280px;
    display: flex;
    justify-content: center;
    img { width: 100%; max-width: 500px; border-radius: 12px; object-fit: cover; box-shadow: 0 6px 18px rgba(0,0,0,0.1); }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 30px;
    padding: 60px 20px;
    .story-image img { max-width: 100%; }
  }
`

// ---------- Craftsmanship Highlights ----------
const Craftsmanship = styled.section`
  padding: 80px 20px;
  text-align: center;
  background: #fff;

  h2 { font-size: 2.5rem; margin-bottom: 50px; font-weight: 700; }

  .features {
    display: flex;
    justify-content: space-around;
    gap: 30px;
    flex-wrap: wrap;
  }

  .feature {
    flex: 1 1 250px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;

    .icon { font-size: 2.5rem; color: #bfa46f; }
    h3 { font-size: 1.25rem; font-weight: 600; }
    p { font-size: 1rem; color: #555; line-height: 1.5; }
  }

  @media (max-width: 768px) {
    .features { flex-direction: column; gap: 40px; }
  }
`

// ---------- Testimonials / Press ----------
const Testimonials = styled.section`
  padding: 80px 20px;
  background: #f8f8f8;
  text-align: center;

  h2 { font-size: 2.5rem; margin-bottom: 50px; font-weight: 700; }

  .testimonials-grid {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .testimonial {
    flex: 1 1 250px;
    max-width: 300px;
    background: #fff;
    padding: 30px 20px;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    gap: 16px;

    p { font-size: 1rem; color: #555; line-height: 1.5; }
    span { font-size: 0.9rem; font-weight: 600; color: #111; }
  }

  .press {
    margin-top: 60px;

    h3 { font-size: 1.5rem; margin-bottom: 20px; }
    .logos { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; font-weight: 600; color: #777; font-size: 1rem; }
  }

  @media (max-width: 768px) {
    .testimonials-grid { flex-direction: column; gap: 30px; }
    .logos { gap: 20px; }
  }
`
