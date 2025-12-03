import { useState,useEffect } from 'react'
import React from 'react'
import styled from 'styled-components'


 const questions = {
    disc1: [
      { q: "WHAT'S YOUR SHIPPING POLICY?", a: "We ship all products via trusted courier partners within India. Shipping charges depend on your location and order value." },
      { q: "HOW MANY DAYS PRODUCT DELIVER?", a: "Delivery typically takes 3-7 business days depending on your location." },
      { q: "CASH ON DELIVERY AVAILABLE?", a: "Yes, COD is available for orders within India. Additional charges may apply." },
      { q: "WHAT IF NOT DELIVER?", a: "If your product is not delivered within the expected timeframe, contact our support for assistance." },
    ],
    disc2: [
      { q: "Does the product come with a warranty?", a: "Yes, all products come with a manufacturer warranty as specified in the product details." },
      { q: "How long is the warranty valid?", a: "The warranty period ranges from 6 months to 2 years depending on the product." },
      { q: "How do I claim the warranty?", a: "You can claim warranty by contacting our support team and providing the purchase details and product information." },
      { q: "What does the warranty cover?", a: "The warranty covers manufacturing defects and malfunctions under normal usage." },
    ],
    disc3: [
      { q: "CAN I RETURN OR EXCHANGE A PRODUCT?", a: "Yes, products can be returned or exchanged within 15 days of delivery, provided they are unused and in original packaging." },
      { q: "WHAT IS THE TIME FRAME FOR RETURNS?", a: "Return requests should be made within 15 days of receiving the product." },
      { q: "ARE THERE ANY RETURN CHARGES?", a: "No, return shipping is free for defective or wrong products. Standard returns may have nominal charges." },
      { q: "WHEN WILL I RECEIVE MY REFUND?", a: "Refunds are processed within 5-7 business days after the returned product is received." },
    ],
    disc4: [
      { q: "HOW CAN I CONTACT CUSTOMER SUPPORT?", a: "You can contact us via email at support@example.com or call us at 1800-123-456." },
      { q: "CAN I MODIFY OR CANCEL MY ORDER?", a: "Orders can be modified or canceled within 2 hours of placement. Contact support immediately." },
      { q: "WHAT PAYMENT METHODS DO YOU ACCEPT?", a: "We accept credit/debit cards, net banking, UPI, and Cash on Delivery." },
      { q: "DO YOU OFFER GIFT WRAPPING OR SPECIAL PACKAGING?", a: "Yes, gift wrapping is available at checkout for select products." },
    ],
  };


const Four = () => {
  const [isstep, setStep] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null); // Declare active question state

  const handleCheck = (id) => {
    setStep(id);
    setActiveQuestion(null); // Reset active question when switching sections
  };

  const handleClick = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null); // Toggle the answer visibility
    } else {
      setActiveQuestion(index);
    }
  };

  return (
    
    <Box>
      
<div className="type">
  <div className="querybox" onClick={()=>handleCheck('disc1' )} >
    <p>shipping</p>
  </div>
  <div className="querybox" onClick={()=>handleCheck('disc2' )}>
    <p>warranty</p>
  </div>
  <div className="querybox"onClick={()=>handleCheck('disc3' )}>
    <p>Returns</p>
  </div>
  <div className="querybox"onClick={()=>handleCheck('disc4' )}>
    <p>F&Q</p>
  </div>
</div>

<div className="QA">
  {isstep &&
    questions[isstep].map((item, idx) => (
      <div key={idx} className="QABOX">
        <p onClick={() => handleClick(idx)}>{item.q}</p>
      </div>
    ))}
</div>

<div className="Board">
  {isstep !== null && activeQuestion !== null && (
    <div className="Boardbox">
      <p>{questions[isstep][activeQuestion].a}</p>
    </div>
  )}
</div>
    </Box>
  );
}

export default Four

const Box = styled.div`
  height: 340px;
  display: flex;
  font-family: Arial, sans-serif;

  .type {
    border-right: 1px solid grey;
    width: 20%;
    padding: 15px;
    box-sizing: border-box;
  }

  .querybox {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid grey;
    margin-top: 15px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    p {
      font-size: 16px; /* smaller than before */
      margin: 0;
    }

    &:hover {
      background-color: #f5f5f5;
    }
  }

  .QA {
    border-right: 1px solid grey;
    width: 40%;
    padding: 15px;
    box-sizing: border-box;
    overflow-y: auto;
  }

  .QABOX {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid grey;
    margin-top: 15px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    p {
      font-size: 14px; /* smaller than before */
      margin: 0;
    }

    &:hover {
      background-color: #f0f0f0;
    }
  }
.BOARD {
 
  height: 100%;
  width: 30%;
  display: flex;             /* make it flex container */
  flex-direction: column;    /* vertical stacking */
  justify-content: center;   /* center vertically */
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;          /* scroll if answer is long */
}

.BOARDBOX {

  padding: 15px 20px;
  border: 1px solid grey;
  border-radius: 4px;
  background-color: #fafafa;
  max-height: 80%;           /* don't fill whole height */
  overflow-y: auto;

  p {
    font-family: "Times New Roman", Times, serif;
    line-height: 1.4;
    text-align: left;        /* normal left alignment */
    font-size: 14px;
    margin: 0;
  }
}
`;
