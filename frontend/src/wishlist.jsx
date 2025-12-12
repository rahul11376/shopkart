import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiTrash2, FiShoppingCart } from "react-icons/fi";

const Wishlist = ({list,setitem}) => {
   window.scrollTo(0, 0);
  const [wishlistItems, setWishlistItems] = useState(

    [

// description:  "Elegant watch with stainless steel finish"
// discountPercent :  37
// id :  "1"
// images :  (5) ['/1802SL06_2.webp', '/1802SL06_3.webp', '/1802SL06_4.webp', '/1802SL06_5.webp', '/1802SL06_6.webp']
// originalPrice :  1995
// price:  1250
// quantity :  1
// rating :  4
// reviews :  45
// title: "Signature Timepiece"

//description
// : 
// "Elegant watch with stainless steel finish"
// discountPercent
// : 
// 37
// id
// : 
// "1"
// images
// : 
// (5) ['1802SL06_2.webp', '1802SL06_3.webp', '1802SL06_4.webp', '1802SL06_5.webp', '1802SL06_6.webp']
// originalPrice
// : 
// 1995
// price
// : 
// 1250
// rating
// : 
// 4
// reviews
// : 
// 45
// title
// : 
// "Signature Timepiece"







  //   {
  //     id: 1,
  //     brand: "Titan",
  //     category: "Men's Watch",
  //     title: "Titan Quartz Multifunction Blue Dial Stainless Steel Strap",
  //     price: 4795,
  //     oldPrice: 6395,
  //     discount: 25,
  //     image: "1595SL06_1.webp",
  //   },
  //   {
  //     id: 2,
  //     brand: "Fossil",
  //     category: "Men's Watch",
  //     title: "Fossil Analog Leather Strap Watch",
  //     price: 3499,
  //     oldPrice: 4999,
  //     discount: 30,
  //      image: "1595SL06_1.webp",
  //   },
  //   {
  //     id: 3,
  //     brand: "Casio",
  //     category: "Women's Watch",
  //     title: "Casio Digital Silver Tone Watch",
  //     price: 2599,
  //     oldPrice: 3999,
  //     discount: 35,
  //      image: "1595SL06_1.webp",
  //   },
   ]
);
console.log("wishlist received from app:", list);

useEffect(() => {
setWishlistItems(list);
}, [list]);


const handleadd=(id)=>{
  
  const itemToadd = wishlistItems.find(item => item.id == id);
  console.log(" Item details :", itemToadd);
  setitem(prev=> [...prev, itemToadd]);
};

  return (
    <Wrapper>
      <Sidebar>
        <h3>Account</h3>
        <ul>
          <li>Overview</li>
          <li>Personal Info</li>
          <li>Address Book</li>
          <li className="active">Wishlist</li>
          <li>Order History</li>
          <li>Gift Card Balance</li>
        </ul>
      </Sidebar>

      <MainContent>
        <Header>
          <h2>My Wishlist</h2>
        </Header>

        <CardsContainer>
          {wishlistItems?.map((item) => (
            <Card key={item.id}>
              <ImageWrapper>
                <img src={item.images[0]} alt={item.title} />
              </ImageWrapper>

              <CardContent>
                <div>
                  <Brand>{item.title}</Brand>
                  <Category>{item.category}</Category>
                  <Title>{item.title}</Title>
                 <div>{item.description}</div>
                </div>

                   <div>
                   <PriceWrapper>
                    <CurrentPrice>₹ {item.price}</CurrentPrice>
                    <OldPrice>₹ {item.oldPrice}</OldPrice>
                    <Discount>{item.discount}% off</Discount>
                   </PriceWrapper>

                   <Buttons>
                    <AddToCart onClick={()=>{handleadd(item.id) }}>
                      <FiShoppingCart style={{ marginRight: "4px" }}  /> Add to Cart
                    </AddToCart>
                    <Remove
                      onClick={() =>
                        setWishlistItems((prev) =>
                          prev.filter((i) => i.id !== item.id)
                        )
                      }
                     >
                      <FiTrash2 /> Remove
                    </Remove>
                  </Buttons>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardsContainer>
      </MainContent>
    </Wrapper>
  );
};

export default Wishlist;

/* ---------------- STYLES ---------------- */

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 16px;
  font-family: "Segoe UI", sans-serif;
  color: #111;
  gap: 20px;
`;

const Sidebar = styled.div`
  width: 220px;
  background: #f7f7f7;
  border-radius: 6px;
  padding: 16px;

  h3 {
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 10px 6px;
      font-size: 14px;
      cursor: pointer;
      
      margin-bottom: 4px;

      &:hover,
      &.active {
      background-color:  #403c3c;
        font-weight: 600;
      }
    }
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: 16px;

  h2 {
    font-size: 22px;
    font-weight: 600;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Card = styled.div`
  width: 250px;
  height: 400px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const CardContent = styled.div`
  padding: 8px 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Brand = styled.div`
  font-weight: bold;
  font-size: 13px;
  color: #111;
`;

const Category = styled.div`
  font-size: 11px;
  color: #666;
  margin-bottom: 4px;
`;

const Title = styled.div`
  font-size: 12px;
  color: #555;
  margin-bottom: 6px;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
`;

const CurrentPrice = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: #111;
`;

const OldPrice = styled.div`
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
`;

const Discount = styled.div`
  font-size: 11px;
  color: #28a745;
  font-weight: 500;
`;

const Buttons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const AddToCart = styled.button`
  flex: 1;
  height: 36px;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #111;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

const Remove = styled.button`
  flex: 1;
  height: 36px;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #e63946;
  color: #e63946;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #fde0e0;
  }
`;
