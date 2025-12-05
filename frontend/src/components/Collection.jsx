import React, { useState,useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { FiShoppingBag } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Sample product data array (different products with unique IDs)
const products = [
  {
    id: '1',
    title: "Signature Timepiece",
    description: "Elegant watch with stainless steel finish",
    quantity: 1,
    rating: 4,
    reviews: 45,
    price: 1250,
    originalPrice: 1995,
    discountPercent: 37,
    images: [
      "/1802SL06_2.webp",
      "/1802SL06_3.webp",
      "/1802SL06_4.webp",
      "/1802SL06_5.webp",
      "/1802SL06_6.webp",
    ]
  },
  {
    id: '2',
    title: "Chronograph Classic",
     quantity: 1,
    description: "Sporty chronograph with leather strap",
    rating: 5,
    reviews: 78,
    price: 2250,
    originalPrice: 2999,
    discountPercent: 25,
    images: [
      "public/Screenshot 2025-10-09 221019.png",
      "public/Screenshot 2025-10-09 221030.png",
      "public/Screenshot 2025-10-09 221041.png",
      "public/Screenshot 2025-10-09 221119.png",
       "public/Screenshot 2025-10-09 221140.png"

    ]
  },
  {
    id: '3',
    title: "Elegant Fastrack",
     quantity: 1,
    description: "Modern design perfect for casual wear",
    rating: 3,
    reviews: 20,
    price: 900,
    originalPrice: 1200,
    discountPercent: 25,
    images: [
          "public/Screenshot 2025-10-09 221019.png",
      "public/Screenshot 2025-10-09 221030.png",
      "public/Screenshot 2025-10-09 221041.png",
      "public/Screenshot 2025-10-09 221119.png",
       "public/Screenshot 2025-10-09 221140.png"
    ]
  },
  {
    id: '4',
    title: "Sonata Gold Edition",
    description: "Luxury gold-finish watch",
     quantity: 1,
    rating: 4,
    reviews: 65,
    price: 1750,
    originalPrice: 2499,
    discountPercent: 30,
    images: [
           "public/Screenshot 2025-10-09 221019.png",
      "public/Screenshot 2025-10-09 221030.png",
      "public/Screenshot 2025-10-09 221041.png",
      "public/Screenshot 2025-10-09 221119.png",
       "public/Screenshot 2025-10-09 221140.png"
    ]
  }
];

const Collection = ({setCart,setwish, cartRef}) => {
   
  
  // console.log("cart in collection:", cart);
 const [cart, setlocalcart] = useState([]);
  // const cart = []; // 
  
  const [currentImageIndex, setCurrentImageIndex] = useState(products.map(() => 0));
  
  const [wishlist, setWishlist] = useState(products.map(() => false));
////////////////////////////////////



  const nextImage = (index) => {
    setCurrentImageIndex(prev => {
      const newIndexes = [...prev];
      newIndexes[index] = (newIndexes[index] + 1) % products[index].images.length;
      return newIndexes;
    });
  };

  const prevImage = (index) => {
    setCurrentImageIndex(prev => {
      const newIndexes = [...prev];
      newIndexes[index] = (newIndexes[index] - 1 + products[index].images.length) % products[index].images.length;
      return newIndexes;
    });
  };

  const toggleWishlist = (index,id) => {
    alert("wishlist clicked");
        // Toggle local UI
    const newUI =[...wishlist];
    newUI[index] = !newUI[index];
    setWishlist(newUI);
   
  const product=products.find(p=>p.id === id);
 console.log("collection to home", [product]);
setwish(prevwish => [...prevwish, product]);

  };





const handleaddtocart = (id) => {

  
          
           setTimeout(() => {
           
              const product = products.find((p) => p.id === id);
              setCart((prevCart) => [...prevCart, product]); }, 500);
             
       };
      



useEffect(() => {
     setCart(cart);
  // console.log("collection to home:", cart);
},[cart ]);

  return (
    <COLLECTIONS>
      <h2 className="headline">Best Sellers</h2>

      <div className="grid-container">
        {products.map((product, i) => (
          <article key={product.id} className="product-card"
          
         
          >
           
            <div className="productimg">
              <Link to={`/product/${product.id}`}>
                <img src={product.images[currentImageIndex[i]]} alt={`${product.title} - image ${currentImageIndex[i] + 1}`} />
              </Link>

              <div className="discount-tag">
                <span>{product.discountPercent}% off</span>
              </div>

              <button className="arrow left" onClick={() => prevImage(i)} aria-label="Previous image">
                <FaChevronLeft />
              </button>
              <button className="arrow right" onClick={() => nextImage(i)} aria-label="Next image">
                <FaChevronRight />
              </button>

              <div
                className={`wish ${wishlist[i] ? "active" : ""}`}
                role="button"
                aria-pressed={wishlist[i]}
                onClick={() => toggleWishlist(i,product.id)}
              >
                {wishlist[i] ? "♥" : "♡"}
              </div>
            </div>

            <div className="info">
              <div className="rating">
                <span>{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</span>
                <span>({product.reviews})</span>
              </div>

              <Link to={`/product/${product.id}`} className="product-title-link">
                <h3 className="product-title">{product.title}</h3>
              </Link>
              <p className="description">{product.description}</p>

              <div className="price">
                ₹{product.price.toLocaleString()}
                <small>₹{product.originalPrice.toLocaleString()}</small>
                <span className="discount-percent">{product.discountPercent}% off</span>
              </div>

              <button     className="add-cart" onClick={() => handleaddtocart(product.id)}>
                <FiShoppingBag /> Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="view-all-container">
        <Link  to ={`/catalog`}className="view-all">View All</Link>
      </div>



    </COLLECTIONS>
  );
};

export default Collection;

// =================== STYLED COMPONENT ===================
const COLLECTIONS = styled.div`
  .headline {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    color: #111;
    margin-bottom: 30px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 22px;
    padding: 0 14px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .product-card {
    background: #fff;
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
  }
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 24px rgba(0,0,0,0.12);
  }
  .productimg {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    background: #f9f9f9;
  }
  .productimg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  .product-card:hover .productimg img {
    transform: scale(1.04);
  }
  .discount-tag {
    position: absolute;
    top: 8px;
    left: 8px;
    background: linear-gradient(135deg, #bfa46f, #947a2d);
    color: white;
    font-weight: 600;
    font-size: 10px;
    padding: 2px 8px;
    border-radius: 12px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    box-shadow: 0 0 4px rgba(191,164,111,0.5);
    pointer-events: none;
  }
  .wish {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: #666;
    cursor: pointer;
    transition: all 0.3s ease;
    user-select: none;
  }
  .wish.active {
    color: #e63946;
    transform: scale(1.15);
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.85);
    border: none;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    color: #bfa46f;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 6px rgba(191,164,111,0.35);
    z-index: 10;
    transition: background 0.3s ease, color 0.3s ease;
  }
  .arrow.left {
    left: 8px;
  }
  .arrow.right {
    right: 8px;
  }
  .arrow:hover {
    background: #bfa46f;
    color: white;
  }

  .info {
    padding: 10px 12px;
    color: #222;
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex-grow: 1;
  }
  .rating {
    font-size: 11px;
    color: #bfa46f;
    display: flex;
    gap: 4px;
  }
  .rating span:last-child {
    color: #666;
    font-weight: 500;
    font-size: 11px;
  }
  .product-title {
    font-weight: 600;
    font-size: 0.95rem;
    margin: 2px 0;
    color: #111;
    line-height: 1.2;
  }
  .product-title-link {
    text-decoration: none;
    color: inherit;
  }
  .product-title-link:hover {
    text-decoration: underline;
  }
  .description {
    font-size: 0.78rem;
    color: #555;
    margin: 0;
    line-height: 1.25;
    min-height: 36px;
  }
  .price {
    margin-top: auto;
    font-size: 0.95rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
  }
  .price small {
    text-decoration: line-through;
    color: #999;
    font-weight: 400;
    font-size: 0.82rem;
  }
  .discount-percent {
    color: #2a8f2a;
    font-weight: 600;
    font-size: 0.85rem;
  }
  .add-cart {
    margin-top: 6px;
    padding: 7px 12px;
    font-size: 0.82rem;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(135deg, #bfa46f, #947a2d);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: center;
    transition: all 0.3s ease;
  }
  .add-cart:hover {
    background: linear-gradient(135deg, #947a2d, #bfa46f);
    transform: scale(1.02);
  }

  .view-all-container {
    text-align: center;
    margin-top: 30px;
  }

  .view-all {
    padding: 10px 24px;
    font-size: 1rem;
    font-weight: 600;
    background: linear-gradient(135deg, #bfa46f, #947a2d);
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .view-all:hover {
    background: linear-gradient(135deg, #947a2d, #bfa46f);
    transform: scale(1.05);
  }

`;
































// import React, { useState } from 'react'
// import styled from 'styled-components'
// import { FiShoppingBag } from 'react-icons/fi'
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// const productTemplate = {

//   title: "Signature Timepiece",
//   id : "1",
//   description: "Elegant watch with stainless steel finish",
//   rating: 4,
//   reviews: 45,
//   price: 1250,
//   originalPrice: 1995,
//   discountPercent: 37,
//   images: [
//     "/1802SL06_2.webp",
//     "/1802SL06_3.webp",
//     "/1802SL06_4.webp",
//     "/1802SL06_5.webp",
//     "/1802SL06_6.webp",
//   ]
// }

// const Collection = () => {
//   const products = Array(9).fill(productTemplate)
//   const bestSellers = products.slice(0, 4) // only 4 best sellers

//   const [currentImageIndex, setCurrentImageIndex] = useState(bestSellers.map(() => 0))
//   const [wishlist, setWishlist] = useState(bestSellers.map(() => false))

//   const nextImage = (index) => {
//     setCurrentImageIndex(prev => {
//       const newIndexes = [...prev]
//       newIndexes[index] = (newIndexes[index] + 1) % productTemplate.images.length
//       return newIndexes
//     })
//   }

//   const prevImage = (index) => {
//     setCurrentImageIndex(prev => {
//       const newIndexes = [...prev]
//       newIndexes[index] = (newIndexes[index] - 1 + productTemplate.images.length) % productTemplate.images.length
//       return newIndexes
//     })
//   }

//   const toggleWishlist = (index) => {
//     setWishlist(prev => {
//       const newList = [...prev]
//       newList[index] = !newList[index]
//       return newList
//     })
//   }

//   return (
//     <COLLECTIONS>
//       <h2 className="headline">Best Sellers</h2>

//       <div className="grid-container">
//         {bestSellers.map((_, i) => (
//           <article key={i} className="product-card">
//             <div className="productimg">
//               <img 
//                 src={productTemplate.images[currentImageIndex[i]]} 
//                 alt={`${productTemplate.title} - view ${currentImageIndex[i] + 1} of ${productTemplate.images.length}`} 
//               />

//               <div className="discount-tag">
//                 <span></span>
//               </div>

//               <button className="arrow left" onClick={() => prevImage(i)} aria-label="Previous image">
//                 <FaChevronLeft />
//               </button>
//               <button className="arrow right" onClick={() => nextImage(i)} aria-label="Next image">
//                 <FaChevronRight />
//               </button>

//               <div 
//                 className={`wish ${wishlist[i] ? "active" : ""}`} 
//                 role="button" 
//                 aria-pressed={wishlist[i]} 
//                 onClick={() => toggleWishlist(i)}
//               >
//                 {wishlist[i] ? "♥" : "♡"}
//               </div>
//             </div>

//             <div className="info">
//               <div className="rating">
//                 <span>{'★'.repeat(productTemplate.rating)}{'☆'.repeat(5 - productTemplate.rating)}</span>
//                 <span>({productTemplate.reviews})</span>
//               </div>

//               <h3 className="product-title">{productTemplate.title}</h3>
//               <p className="description">{productTemplate.description}</p>

//               <div className="price">
//                 ₹{productTemplate.price.toLocaleString()} 
//                 <small>₹{productTemplate.originalPrice.toLocaleString()}</small> 
//                 <span className="discount-percent">{productTemplate.discountPercent}% off</span>
//               </div>

//               <button className="add-cart">
//                 <FiShoppingBag /> Add to Cart
//               </button>
//             </div>
//           </article>
//         ))}
//       </div>

//       <div className="view-all-container">
//         <button className="view-all">View All</button>
//       </div>
//     </COLLECTIONS>
//   )
// }

// export default Collection

// // =================== STYLED COMPONENT ===================
// const COLLECTIONS = styled.div`
//   .headline {
//     text-align: center;
//     font-size: 2rem;
//     font-weight: 700;
//     color: #111;
//     margin-bottom: 30px;
//   }

//   .grid-container {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
//     gap: 22px;
//     padding: 0 14px;
//     max-width: 1200px;
//     margin: 0 auto;
//   }

//   /* Product card styles (same as before, keep your styling) */
//   .product-card { background: #fff; border-radius: 14px; overflow: hidden; display: flex; flex-direction: column; transition: all 0.3s ease; }
//   .product-card:hover { transform: translateY(-5px); box-shadow: 0 10px 24px rgba(0,0,0,0.12); }
//   .productimg { position: relative; width: 100%; aspect-ratio: 1; overflow: hidden; background: #f9f9f9; }
//   .productimg img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
//   .product-card:hover .productimg img { transform: scale(1.04); }
//   /* .discount-tag { position: absolute; top: 8px; left: 8px; background: linear-gradient(135deg, #bfa46f, #947a2d); color: white; font-weight: 600; font-size: 10px; padding: 2px 8px; border-radius: 12px; text-transform: uppercase; letter-spacing: 0.03em; box-shadow: 0 0 4px rgba(191,164,111,0.5); pointer-events: none; }
//   .wish { position: absolute; top: 10px; right: 10px; font-size: 24px; color: #666; cursor: pointer; transition: all 0.3s ease; } */
//   .wish.active { color: #e63946; transform: scale(1.15); }
//   .arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.85); border: none; border-radius: 50%; width: 28px; height: 28px; color: #bfa46f; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(191,164,111,0.35); z-index: 10; transition: background 0.3s ease, color 0.3s ease; }
//   .arrow.left { left: 8px; }
//   .arrow.right { right: 8px; }
//   .arrow:hover { background: #bfa46f; color: white; }

//   .info { padding: 10px 12px; color: #222; display: flex; flex-direction: column; gap: 4px; flex-grow: 1; }
//   .rating { font-size: 11px; color: #bfa46f; display: flex; gap: 4px; }
//   .rating span:last-child { color: #666; font-weight: 500; font-size: 11px; }
//   .product-title { font-weight: 600; font-size: 0.95rem; margin: 2px 0; color: #111; line-height: 1.2; }
//   .description { font-size: 0.78rem; color: #555; margin: 0; line-height: 1.25; min-height: 36px; }
//   .price { margin-top: auto; font-size: 0.95rem; font-weight: 600; display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
//   .price small { text-decoration: line-through; color: #999; font-weight: 400; font-size: 0.82rem; }
//   .discount-percent { color: #2a8f2a; font-weight: 600; font-size: 0.85rem; }
//   .add-cart { margin-top: 6px; padding: 7px 12px; font-size: 0.82rem; font-weight: 600; color: #fff; background: linear-gradient(135deg, #bfa46f, #947a2d); border: none; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 6px; justify-content: center; transition: all 0.3s ease; }
//   .add-cart:hover { background: linear-gradient(135deg, #947a2d, #bfa46f); transform: scale(1.02); }

//   .view-all-container {
//     text-align: center;
//     margin-top: 30px;
//   }

//   .view-all {
//     padding: 10px 24px;
//     font-size: 1rem;
//     font-weight: 600;
//     background: linear-gradient(135deg, #bfa46f, #947a2d);
//     color: #fff;
//     border: none;
//     border-radius: 6px;
//     cursor: pointer;
//     transition: all 0.3s ease;
//   }

//   .view-all:hover {
//     background: linear-gradient(135deg, #947a2d, #bfa46f);
//     transform: scale(1.05);
//   }
// `
