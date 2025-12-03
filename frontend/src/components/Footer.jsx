import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Raynox & Co</h4>
            <p>Luxury timepieces crafted with precision and style.</p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/catalog">Catalog</a></li>
              <li><a href="/#exclusive">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Customer Service</h4>
            <ul>
              <li>
                <a href="/Four">Shipping</a>
                </li>
              <li>
                <a href="/Four">Returns</a>
                </li>
              <li>
                <a href="/Four">Warranty</a>
                </li>
              <li>
                <a href="/Four">FAQ</a>
                </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>Email: support@raynoxco.com</p>
            <p>Phone: +1 234 567 8901</p>
            <p>123 Luxury St, New York, NY</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Raynox & Co. All rights reserved.
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background-color: #1c1c1c;
  color: #f7f5f0;
  padding: 40px 20px;
  font-family: var(--font-primary);

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-columns {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .footer-column {
    flex: 1 1 220px;

    h4 {
      font-weight: 700;
      margin-bottom: 15px;
      color: var(--color-gold);
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 10px;

        a {
          color: #f7f5f0;
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: var(--color-gold);
          }
        }
      }
    }

    p {
      line-height: 1.5;
      font-size: 14px;
    }
  }

  .footer-bottom {
    text-align: center;
    font-size: 14px;
    border-top: 1px solid #444;
    padding-top: 15px;
    color: #aaa;
  }

  @media (max-width: 768px) {
    .footer-columns {
      flex-direction: column;
      gap: 20px;
    }
  }
`;
