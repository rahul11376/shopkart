import React, { useEffect, useState, useRef} from "react";
import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";
import { MdLock } from "react-icons/md";

const Cart = ({data,view,item}) => {

  // console.log("cart data from app:", data);
 const [step, setstep] =useState(1);
  const [cartItems, setCartItems] = useState(
    [
    // {
    //   id: 1,
    //   title:
    //   "Titan Quartz Analog with Day and Date Black Dial Stainless Steel Strap",
    //   price: 2595,
    //   reviews: 45,
    //   discountpercent: 260,
    //   originalPrice: 1995,
    //   qty: 1,
    //   image: "1595SL06_1.webp",
    //   color: "Black",
    // },
   ]
  );

//0
// : 
// id: "1"
// title :  "Signature Timepiece"
// price: 1250
// reviews :  45
// description :  "Elegant watch with stainless steel finish"
// discountPercent :  37
// originalPrice :  1995
// images :  (5) ['/1802SL06_2.webp', '/1802SL06_3.webp', '/1802SL06_4.webp', '/1802SL06_5.webp', '/1802SL06_6.webp']
// rating :  4
//qty? color?


console.log("view data in cart component:",view );
// length: Array(0)
// useEffect(() => {
//   if(data && data.length > 0){
//  setCartItems(data);
// setCartItems(view);
//   }
 
// },[data,view]);


useEffect(() => {
  const newCartItems = [
    ...(Array.isArray(data) ? data : []),
    ...(Array.isArray(view) ? view : []),
    ...(Array.isArray(item) ? item : []),
  ];
  setCartItems(newCartItems);
}, [data, view,item]);
 
// console.log("cart data in cart:",cartItems.push(qty)  );
  

 // current progress step
   
  const subtotal = cartItems?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = cartItems?.reduce((sum, item) => sum + item.discountPercent, 0);
  const total = subtotal - discount;

  const formatCurrency = (num) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(num);



const handlercheckout=(e)=>{
  e.preventDefault();
  
  console.log("Proceeding to checkout...");
  setstep(prev=>prev+1)
  
}



const handlercontinue=(e)=>{
  e.preventDefault();

  const formData = new FormData(e.target); //e.target ==form 
  
  
  data={};
  for(let [key, value] of formData.entries()){
    data[key]=value;
  }
  // const data = Object.fromEntries(formData.entries());
   console.log("data:",data);

  setstep(prev=>prev+1)
  
}

  return (
    <Wrapper>
      {/* Progress Bar */}
      <ProgressWrapper>
        <Steps>
          <StepWrapper>
            <Step $active={step >= 1}>
              <Circle $active={step === 1}>01</Circle>
              <span>Cart</span>
            </Step>
            <Line $active={step > 1} />
          </StepWrapper>

          <StepWrapper>
            <Step $active={step >= 2}>
              <Circle $active={step === 2}>02</Circle>
              <span>Delivery Info</span>
            </Step>
            <Line $active={step > 2} />
          </StepWrapper>

          <StepWrapper>
            <Step $active={step >= 3}>
              <Circle $active={step === 3}>03</Circle>
              <span>Payment</span>
            </Step>
          </StepWrapper>
        </Steps>

        <Secure>
          <MdLock size={16} />
          <span>100% Secure</span>
        </Secure>
      </ProgressWrapper>

      {/* Offers */}
      <OfferBox>
        <p>
          Flat 10% Cashback* up to ₹1500 Snapmint. <a href="#">T&amp;C</a>
        </p>
      </OfferBox>

       {step === 1 &&  <Content>
        {/* Left Section: Cart Items */}
        <Left>
          <h4>
            {cartItems?.length}/{cartItems?.length} item selected (
            {formatCurrency(total)})
          </h4>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <img src={item.images?.[0]} alt={item.title} />
              <Details>
                <h3>{item.title}</h3>
                <p className="price">
                  {formatCurrency(item.price - (( item.discountPercent)))}{" "}
                  <span className="mrp">{formatCurrency(item.price)}</span>{" "}
                  <span className="off">10% off</span>
                </p>
                <p>Color: {item.color}</p>
                <Actions>
                  <Quantity>
                    
                    <button
                      onClick={() =>
                        setCartItems((prev) =>
                          prev.map((ci) =>
                            ci.id === item.id && ci.quantity > 1
                              ? { ...ci, quantity: ci.quantity - 1 }
                              : ci
                          )
                        )
                      }
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        setCartItems(
                          (prev) =>
                          prev.map((ci) =>
                            ci.id === item.id
                           
                              ? { ...ci, quantity: ci.quantity + 1 }
                               : ci
                          )
                         )
                      }
                    >
                      +
                    </button>
                  </Quantity>
                  <Delete
                    onClick={() =>
                      setCartItems((prev) =>
                        prev.filter((ci) => ci.id !== item.id)
                      )
                    }
                  >
                    <FiTrash2 />
                  </Delete>
                </Actions>
                <DeliveryInfo>
                  <p>
                    <span className="icon">🚚</span>
                    Free Delivery by 1 Oct, Wednesday
                  </p>
                  <p>
                    <span className="icon">↩</span>
                    7 Days Return
                  </p>
                </DeliveryInfo>
              </Details>
            </CartItem>
          ))}
        </Left>

        {/* Right Section: Summary */}
        <Right>
          <AddressBox>
            <p>
              Deliver To: <strong>Jaipur, India 302012</strong>
            </p>
            <button>Change</button>
          </AddressBox>

          <CouponBox>
            <p>No Coupons Available</p>
            <a href="#">View</a>
          </CouponBox>

          <Saving>
            You're saving {formatCurrency(discount)} on this purchase
          </Saving>

          <Summary>
            <h4>Order Summary ({cartItems.length} Item)</h4>
            <div className="row">
              <span>Order Value</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="row">
              <span>Shipping</span>
              <span style={{ color: "green" }}>Free</span>
            </div>
            <div className="row">
              <span>Product Discount</span>
              <span>- {formatCurrency(discount)}</span>
            </div>
            <div className="row total">
              <span>Grand Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <button className="checkout" onClick={handlercheckout}>Proceed to Checkout</button>
          </Summary>
        </Right>

      </Content> }
{step===2 && 
<Contentstep2>
<form  onSubmit={handlercontinue}>
  <div className="form-group title">
    <label>Title*</label>
    <label>
      <input type="radio" name="title" value="Mr." defaultChecked />
      Mr.
    </label>
    <label>
      <input type="radio" name="title" value="Ms." />
      Ms.
    </label>
  </div>

  <div className="form-group">
    <input
      type="text"
      name="fullName"
      placeholder="Full name *"
      required
    />
  </div>

  <div className="form-group phone-row">
    <div className="country-code">
      <span className="flag">🇮🇳</span>
      <span className="code">+91</span>
    </div>
    <input
      type="tel"
      name="mobileNumber"
      placeholder="Mobile Number *"
      required
    />
  </div>

  <div className="form-group">
    <input
      type="email"
      name="email"
      placeholder="Email Address *"
      required
    />
  </div>

  <div className="form-group location-button">
    <button type="button">🔍 Detect My Location</button>
    <small>Click to use current Location</small>
  </div>

  <div className="form-row">
    <textarea
      name="address"
      placeholder="Address (Building Name, Street, Area) *"
      required
    ></textarea>
    <input type="text" name="flatNumber" placeholder="Flat/House Number" />
  </div>

  <div className="form-row">
    <input type="text" name="landmark" placeholder="Landmark" />
  </div>

  <div className="form-row">
    <input type="text" name="pincode" placeholder="Pincode *" required />
    <input type="text" name="city" placeholder="City *" required />
  </div>

  <div className="form-row">
    <input type="text" name="state" placeholder="State *" required />
    <input
      type="text"
      name="country"
      placeholder="Country *"
      defaultValue="India"
      readOnly
    />
  </div>

  <div className="form-actions">
    <button type="button" className="cancel">
      CANCEL
    </button>
    <button type="submit" className="continue">
      CONTINUE
    </button>
  </div>
</form>


 {/* <div className="form-container">
    <h2>Add Address</h2>

    <form ref={formref}>
      <div className="form-group title">
        <label>Title*</label>
        <label>< input type="radio" name="title" checked/> Mr.</label>
        <label><input type="radio" name="title"/> Ms.</label>
      </div>

      <div className="form-group">
        <input type="text" placeholder="Full name *" required />
      </div>

      <div className="form-group phone-row">
        <div className="country-code">
          <span className="flag">🇮🇳</span>
          <span className="code">+91</span>
        </div>
        <input type="tel" placeholder="Mobile Number *" required />
      </div>

      <div className="form-group">
        <input type="email" placeholder="Email Address *" required />
      </div>

      <div className="form-group location-button">
        <button type="button">🔍 Detect My Location</button>
        <small>Click to use current Location</small>
      </div>

      <div className="form-row">
        <textarea placeholder="Address (Building Name, Street, Area) *" required></textarea>
        <input type="text" placeholder="Flat/House Number" />
      </div>

      <div className="form-row">
        <input type="text" placeholder="Landmark" />
      </div>

      <div className="form-row">
        <input type="text" placeholder="Pincode *" required />
        <input type="text" placeholder="City *" required />
      </div>

      <div className="form-row">
        <input type="text" placeholder="State *" required />
        <input type="text" placeholder="Country *" value="India" readonly />
      </div>

      <div className="form-actions">
        <button type="button" className="cancel">CANCEL</button>
        <button type="submit" className="continue" onSubmit={handlercheckout}>CONTINUE</button>
      </div>
     </form>
  </div> */}
</Contentstep2>
}


    </Wrapper>
  );
};

export default Cart;

/* ---------------- STYLES ---------------- */
const Wrapper = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 0 16px;
  font-family: "Segoe UI", sans-serif;
  color: #111;
 
`;

const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  position: relative;
`;

const Steps = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.85rem;
  color: ${(p) => (p.active ? "#000" : "#888")};
`;

const Circle = styled.div`
                                /**********steps***********/ 
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(p) => (p.$active ? "#0a8a0a" : "#bbb")};//bbb
  background: ${(p) => (p.$active ? "#0a8a0a" : "#fff")};
  color: ${(p) => (p.$active ? "#fff" : "#777")};
  font-weight: 600;
  font-size: 0.75rem;
`;

const Line = styled.div`
  height: 2px;
  background-color: ${(p) => (p.$active ? "#0a8a0a" : "#ccc")};
  flex: 1;
  margin: 0 6px;
`;

const Secure = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #333;

  svg {
    color: #0a8a0a;
  }
`;

const OfferBox = styled.div`
  background: #fff8f3;
  border: 1px solid #ffd9a0;
  padding: 10px;
  font-size: 0.85rem;
  margin-bottom: 16px;

  a {
    color: #c58500;
    font-weight: 500;
  }
`;

const Contentstep2 = styled.div`
 background: #f9f9f9;
  padding: 40px;
  display: flex;
  justify-content: center;




.form-container {
  
  position:relative;
  background: #fff;
  padding: 30px 40px;
  width: 650px;

 
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
}

h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group.title label {
  margin-right: 15px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  width: 100%;
  padding: 10px 12px;
  font-size: 15px;
  border: 1px solid #ccc;
 
}

textarea {
  resize: vertical;
  height: 60px;
}

.phone-row {
  display: flex;
  gap: 10px;
  align-items: center;
}

.country-code {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  background: #f1f1f1;
  border: 1px solid #ccc;
 
  gap: 5px;
  white-space: nowrap;
}

.location-button {
  text-align: center;
}

.location-button button {
  background: #000;
  color: #fff;
  padding: 10px 25px;
  border: none;
  
  font-weight: bold;
  cursor: default;
}

.location-button small {
  display: block;
  margin-top: 5px;
  color: #777;
  font-size: 12px;
}

.form-row {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.form-row input,
.form-row textarea {
  flex: 1;
  min-width: 240px;
}

.form-actions {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.form-actions .cancel,
.form-actions .continue {
  flex: 1;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
 
  border: none;
  cursor: pointer;
}

.form-actions .cancel {
  background: #fff;
  border: 2px solid #000;
  color: #000;
}

.form-actions .continue {
  background: #000;
  color: #fff;
}

  /* ✅ Laptop Optimization (1024px - 1440px) */
  @media (min-width: 1024px) and (max-width: 1440px) {
    .form-container {
      width: 700px;
    }
  }

  /* ✅ Tablet & Mobile Responsive Adjustments */
  @media (max-width: 768px) {
    padding: 20px;

    .form-container {
      padding: 20px;
      top: 0;
      width: 100%;
    }

    .form-row {
      flex-direction: column;
    }

    .form-actions {
      flex-direction: column;
    }
  }

`;

const Content = styled.div`

  display: flex;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 2;
  h4 {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

const Right = styled.div`
  flex: 1;
`;

const CartItem = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  align-items: flex-start;

  img {
    width: 70px;
    height: 70px;
    object-fit: contain;
  }
`;

const Details = styled.div`
  flex: 1;

  h3 {
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 2px;
  }

  .price {
    font-size: 0.85rem;
    font-weight: 600;
    margin: 2px 0;

    .mrp {
      text-decoration: line-through;
      font-size: 0.75rem;
      margin-left: 4px;
      color: #888;
    }

    .off {
      font-size: 0.75rem;
      color: #0a8a0a;
      margin-left: 4px;
      font-weight: 500;
    }
  }

  p {
    font-size: 0.8rem;
    margin: 2px 0;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-top: 4px;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;

  button {
    width: 22px;
    height: 22px;
    border: none;
    background: #f8f8f8;
    cursor: pointer;
    font-size: 0.8rem;

    &:hover {
      background: #eee;
    }
  }

  span {
    padding: 0 5px;
    font-size: 0.8rem;
  }
`;

const Delete = styled.button`
  border: 1px solid #ddd;
  background: #fff;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e63946;
  cursor: pointer;

  &:hover {
    background: #f8f8f8;
  }
`;

const DeliveryInfo = styled.div`
  margin-top: 8px;
  padding-top: 6px;
  border-top: 1px solid #ddd;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-around;
  gap: 12px;
  align-items: center;

  p {
    display: flex;
    align-items: center;
    gap: 3px;
    margin: 0;
    font-weight: 500;
  }

  p:first-child {
    color: #0a8a0a;
  }
  p:last-child {
    color: #555;
  }

  .icon {
    font-size: 0.9rem;
    line-height: 1;
  }
`;

const AddressBox = styled.div`
  border: 1px solid #eee;
  padding: 10px;
  background: #fff;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;

  button {
    border: 1px solid #000;
    background: none;
    padding: 3px 8px;
    font-size: 0.75rem;
    cursor: pointer;
  }
`;

const CouponBox = styled.div`
  border: 1px solid #eee;
  padding: 10px;
  background: #fff;
  margin-bottom: 12px;
  font-size: 0.85rem;
  display: flex;
  justify-content: space-between;

  a {
    color: #c58500;
    font-weight: 500;
  }
`;

const Saving = styled.div`
  background: #f3fff3;
  padding: 8px;
  color: green;
  font-size: 0.85rem;
  margin-bottom: 12px;
`;

const Summary = styled.div`
  border: 1px solid #eee;
  padding: 12px;
  background: #fff;

  h4 {
    margin-bottom: 10px;
    font-size: 0.9rem;
  }

  .row {
    display: flex;
    justify-content: space-between;
    margin: 4px 0;
    font-size: 0.85rem;
  }

  .total {
    font-weight: 600;
    margin-top: 6px;
    font-size: 0.95rem;
  }

  .checkout {
    margin-top: 12px;
    width: 100%;
    padding: 10px;
    font-size: 0.9rem;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #333;
    }
  }
`;
