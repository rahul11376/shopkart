import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import styled from 'styled-components';

// Mock data for product (replace this with actual data)
const products = [
  {
    id: '1',
    title: 'Titan Quartz Analog with Day and Date Black Dial Stainless Steel Strap Watch for Men',
    brand: 'Titan',
    images: ['/1802SL06_2.webp', '/1802SL06_3.webp', '/1802SL06_4.webp'],
    price: 2335,
    originalPrice: 2595,
    discountPercent: 10,
    description: 'Elegant and modern watch with a classic black dial and a stainless steel strap.',
    rating: 4,
    reviews: 0,
    stock: 10,
    deliveryDate: 'By 26 Sep, Friday',
    features: ['Water resistant', 'Stainless steel strap', 'Day and Date display'],
  },
 {
    id: '2',
    title: 'Chronograph Classic Leather Strap Watch',
    brand: 'Fossil',
    images: [
       "/Screenshot 2025-10-09 221019.png",
      "/Screenshot 2025-10-09 221030.png",
      "/Screenshot 2025-10-09 221041.png",
      "/Screenshot 2025-10-09 221119.png",
       "/Screenshot 2025-10-09 221140.png"
    ],
    price: 2250,
    originalPrice: 2999,
    discountPercent: 25,
    description: 'Sporty chronograph with a genuine leather strap and durable casing.',
    rating: 5,
    reviews: 78,
    stock: 5,
    deliveryDate: 'By 26 Sep, Friday',
    features: ['Chronograph functionality', 'Leather strap', 'Scratch-resistant glass'],
  },
  {
    id: '3',
    title: 'Fastrack Analog Casual Watch for Men',
    brand: 'Fastrack',
    images: [
       "/Screenshot 2025-10-09 221019.png",
      "/Screenshot 2025-10-09 221030.png",
      "/Screenshot 2025-10-09 221041.png",
      "/Screenshot 2025-10-09 221119.png",
       "/Screenshot 2025-10-09 221140.png"
    ],
    price: 900,
    originalPrice: 1200,
    discountPercent: 25,
    description: 'Modern design perfect for casual and daily wear.',
    rating: 3,
    reviews: 20,
    stock: 12,
    deliveryDate: 'By 26 Sep, Friday',
    features: ['Trendy design', 'Water resistant', 'Comfort fit'],
  },
  {
    id: '4',
    title: 'Sonata Gold Edition Analog Watch for Men',
    brand: 'Sonata',
    images: [
       "/Screenshot 2025-10-09 221019.png",
      "/Screenshot 2025-10-09 221030.png",
      "/Screenshot 2025-10-09 221041.png",
      "/Screenshot 2025-10-09 221119.png",
       "/Screenshot 2025-10-09 221140.png"
    ],
    price: 1750,
    originalPrice: 2499,
    discountPercent: 30,
    description: 'Luxury gold-finish watch with premium feel and build.',
    rating: 4,
    reviews: 65,
    stock: 8,
    deliveryDate: 'By 26 Sep, Friday',
    features: ['Gold finish', 'Metal strap', 'Water resistant'],
  }

];

const ProductView = ({setview}) => {

  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [isInCart, setIsInCart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [isContainerform, setContainerform] = useState(false);
  const [isopen, setopen] = useState(false);


   
      if (!product) {
    return (
      <Wrapper>
        <h2>Product Not Found</h2>
        <Link to="/">Go back to Home</Link>
      </Wrapper>
    );
  }

  const handleAddToCart = (id) => {
      // alert( alert(`Added ${product.title}`));
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsInCart(true);
    }, 1000);
    
    const product = products.find((p) => p.id == id);
    console.log("product view to app:", product);
    setview(prevview => [...prevview, product]);
  
  };

  const handlereview = () => {
    setContainerform(true);
  };
  
 const handlerinfo = (id) =>{
  console.log(id);
     setopen(prev =>(prev ===id ?false:id));
  
 }
  

  const [form, setForm] = useState({
    headline: '',
    review: '',
    name: '',
    email: ''
  });
  const [rating, setRating] = useState(product.rating || 0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Review submitted! Thank you.");
    setTimeout(() => {
        setContainerform(false);
    }, 1000/2);
  
  };


  return (
    <Wrapper>
      <div>
        <div className="box">
        <div className="image-gallery">
          <div className="thumbnail-gallery">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`product-thumbnail-${idx}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={selectedImage} alt="Product" />
          </div>
        </div>

        <div className="details">
          <div className='bestseller'> <span>{product.brand}</span></div>
          <h1>{product.title}</h1>
          {/* <p className="description">{product.description}</p> */}
          <div className="price">
            ₹{product.price.toLocaleString()}
            <small>₹{product.originalPrice.toLocaleString()}</small>
            <span className="discount">{product.discountPercent}% off</span>
          </div>
          <p>Inclusive of all taxes*</p>
          <div className="btnaddbuy">
            <button onClick={()=>{handleAddToCart(product.id)}} className="add-cart-btn" disabled={isInCart || isLoading}>
              {isLoading ? 'Adding...' : isInCart ? 'Added to Cart' : <><FiShoppingBag /> Add to Cart</>}
            </button>
            <button className="add-cart-btn" disabled={isInCart || isLoading}>
              {isLoading ? 'Adding...' : isInCart ? 'Buy now' : <> Buy now</>}
            </button>
          </div>
          <div className="box">
            <p>⛟</p>
            <p className="delivery-info">Check Delivery Availability: {product.deliveryDate}</p>
            <p> ≫ </p>
          </div>
          <div className="box">
            <div className="trust-signals">
              <span>
                <icon>🛡</icon>
                <p>24 Months Warranty</p>
              </span>
              <span>
                <icon>⛟</icon>
                <p>Free Shipping Countrywide</p>
              </span>
              <span>
                <icon>📦</icon>
                <p>Easy Return</p>
              </span>
              <span>
                <icon>🛍</icon>
                <p>Pay on Delivery Available</p>
              </span>
              <span>
                <icon>⚙</icon>
                <p>Serviced Across India</p>
              </span>
            </div>
          </div>
          <div className="box">
            <div className="offers-section">
              <h3>Available Offers</h3>
              <ul>
                <li>Flat 10% cashback up to ₹1500</li>
                <li>0% EMI available</li>
              </ul>
            </div>
          </div>
          <div className="boxsmall"  onClick={() => handlerinfo('desc')}>
            <p> product Description</p>
            <icon>⌄</icon>
           
          </div>
          { isopen === 'desc' && (
            <div className="boxheight" >  <p>{product.description}</p></div>
           )}


          <div className="boxsmall" onClick={() => handlerinfo('spec')}>
            <p>product specification</p>
            <icon>⌄</icon>
          </div>
          { isopen === 'spec' && (
            <div className="boxheight"  > <p>{product.title}</p></div>
           )}


          <div className="boxsmall" onClick={() => handlerinfo('spet')}>
            <p>More information</p>
            <icon>⌄</icon>
          </div>
          { isopen === 'spet' && (
            <div className="boxheight"  > <p>{product.title}</p></div>
           )}

          <div className="boxsmall" onClick={() => handlerinfo('spen')}>
            <p>FAQ's</p>
            <icon>⌄</icon>
          </div>
         { isopen === 'spen' && (
            <div className="boxheight"  > <p>{product.title}</p></div>
           )}


          </div>
        </div>
        <Review>
          <Button onClick={handlereview}>Write a Review</Button>

          {isContainerform &&( <Containerform >
            <Title>Customer Review</Title>
            {/* Star Rating */}
            <Stars>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={star <= rating ? "active" : ""}
                >
                  ★
                </button>
              ))}
            </Stars>
            {/* Form*/}
            <form onSubmit={handleSubmit}>
              <Label>Headline *</Label>
              <Input
                type="text"
                name="headline"
                value={form.headline}
                onChange={handleChange}
                required
              />
              <Label>Write a review *</Label>
              <TextArea
                name="review"
                rows="4"
                value={form.review}
                onChange={handleChange}
                required
              />
              <Label>Your Name *</Label>
              <Input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Label>Your Email *</Label>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Button type="submit">Submit Review</Button>
            </form>
          </Containerform>)}
         
        </Review>
      </div>
    </Wrapper>
  );
};

export default ProductView;

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  margin: 40px 0;
  flex-wrap: wrap;
  justify-content: center;


  .image-gallery {
    /* background-color:green; */
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 40%;
  
    max-width: 400px;
  
    .thumbnail-gallery {
      display: flex;
      gap: 10px;
    }

    .thumbnail-gallery img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      cursor: pointer;
      border-radius: 8px;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }

    .main-image img {
      width: 100%;
      height:400px;
      cursor: pointer;
      border-radius: 14px;
      object-fit: cover;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }


  .bestseller{
    display: flex;
    justify-content: space-between;
  } 
   .details {
    flex: 1 1 300px;
    max-width: 500px;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1rem;
      margin-bottom: 12px;
      color: #111;
    }

    .rating {
      font-size: 1.2rem;
      color: #bfa46f;
      margin-bottom: 16px;
    }

    .price {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 12px;

      small {
        text-decoration: line-through;
        font-weight: 400;
        font-size: 1.1rem;
        color: #999;
      }

      .discount {
        color: #2a8f2a;
        font-weight: 700;
        font-size: 1.2rem;
      }
    }
    

    .btnaddbuy{
      display: flex;
      gap:20px;
      margin-bottom:20px;

    }
    .add-cart-btn {
      width: 100%;
      height: 50px;
      padding: 12px 24px;
       background: linear-gradient(135deg, #bfa46f, #947a2d); 
      color: #1b1313;
      border: none;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: background 0.3s ease;

      &:hover {
        background: linear-gradient(135deg, #947a2d, #bfa46f);
      }

      &:disabled {
        cursor: not-allowed;
        background: #ccc;
      }
    }
  .box{
    /* margin-top: 20px; */
    border: 1px solid #ddd;
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .box p{
    padding: 0 20px;
  }
    .delivery-info {
      font-size: 1rem;
      color: #555;
      margin-top: 20px;
    }

    /* .trust-signals {
      margin-top: 20px;
      display: flex;
     
       
    } */





.trust-signals {
  display: flex;
  
}

.trust-signals span {
  
  gap: 12px;
  
  color: #333;
  font-weight: 600;
  font-size: 0.55rem;
}

.trust-signals icon {
  
  font-style: normal; /* Because <icon> is not a standard HTML tag */
  font-size: 3rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #007BFF; /* Blue color for icons */
}

.trust-signals p {
  margin: 0;
}


    .offers-section {
      margin-top: 20px;
      
    }
    .offers-section h3 {
      padding-left: 20px;
    }

    .offers-section ul {
      padding-left: 20px;
      font-size: 1rem;
      list-style:none;
    }

    .boxsmall{
      /* margin-top:5px; */
      padding:2px 20px;
      border: 1px solid #ddd;
      /* height: isopen ? '100px':'50px'; */
      height: 50px;
      width:100%;
      display:flex;
      align-items: center;
      justify-content: space-between;
    }

.boxheight{
  height:100px;
  /* width:1050px; */
  padding:1px 20px;
   border: 1px solid #ddd;
}

    .buy-options {
      margin-top: 30px;
    }

    .buy-options button {
      padding: 10px 20px;
      background-color: #ff5733;
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .buy-options button:hover {
      background-color: #c74124;
    }
  }

.box{
  display:flex;
  justify-content:space-between;
}


`;

const Review = styled.div`
margin-top: 40px;
`;


const Containerform = styled.div`
  max-width: 500px;
  margin: 20px auto;
  padding: 24px;
  /* background: #fff; */

  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
`;

const Stars = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 16px;
  button {
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
    color: #ccc;
    transition: color 0.2s ease;
    &:hover {
      color: gold;
    }
  }
  .active {
    color: gold;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
 
  font-size: 0.95rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #ddd;

  font-size: 0.95rem;
  resize: vertical;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
 
  background:var( --color-gray);
  color: white;
  border: none;

  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
     background:var(  --color-charcoal);
  }
`;

