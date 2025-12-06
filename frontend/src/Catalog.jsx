import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import  axios from 'axios';
// Dummy product template
// const products1 = [
//  {
//    id: '1',
//   title: "Signature Timepiece",
//   description: "Elegant watch with stainless steel finish",
//   rating: 3,
//   reviews: 45,
//   price: 1250,
//   originalPrice: 1995,
//   discountPercent: 37,
//   images: [
//     "1802SL06_2.webp",
//     "1802SL06_3.webp",
//     "1802SL06_4.webp",
//     "1802SL06_5.webp",
//     "1802SL06_6.webp",
//   ]
// },
//  {
//     id: '2',
//     title: "Chronograph Classic",
//     description: "Sporty chronograph with leather strap",
//     rating: 5,
//     reviews: 78,
//     price: 6950,
//     originalPrice: 6999,
//     discountPercent: 25,
//     images: [
//       "public/Screenshot 2025-10-09 221019.png",
//       "public/Screenshot 2025-10-09 221030.png",
//       "public/Screenshot 2025-10-09 221041.png",
//       "public/Screenshot 2025-10-09 221119.png",
//        "public/Screenshot 2025-10-09 221140.png"

//     ]
//   },
//   {
//     id: '3',
//     title: "Elegant Fastrack",
//     description: "Modern design perfect for casual wear",
//     rating: 3,
//     reviews: 20,
//     price: 900,
//     originalPrice: 1200,
//     discountPercent: 25,
//     images: [
//           "public/Screenshot 2025-10-09 221019.png",
//       "public/Screenshot 2025-10-09 221030.png",
//       "public/Screenshot 2025-10-09 221041.png",
//       "public/Screenshot 2025-10-09 221119.png",
//        "public/Screenshot 2025-10-09 221140.png"
//     ]
//   },
//   {
//     id: '4',
//     title: "Sonata Gold Edition",
//     description: "Luxury gold-finish watch",
//     rating: 4,
//     reviews: 65,
//     price: 11750,
//     originalPrice: 2499,
//     discountPercent: 30,
//     images: [
//            "public/Screenshot 2025-10-09 221019.png",
//       "public/Screenshot 2025-10-09 221030.png",
//       "public/Screenshot 2025-10-09 221041.png",
//       "public/Screenshot 2025-10-09 221119.png",
//        "public/Screenshot 2025-10-09 221140.png"
//     ]
//   }

// ];

// const products = Array(12).fill(productTemplate);
// const products = productTemplate.map((products, index )=>{

// })


const banners = [
  "/9872330.jpg",
 "/4192922.jpg",
 ];
  

  const Catalog = ({setdata, setlist}) => {
    // const [currentImageIndex, setCurrentImageIndex] = useState(products.map(() => 0)); //[0, 0, 0, 0, 0] keep tracking which image is shown 0-1
  const [currentImageIndex, setCurrentImageIndex] = useState([]); //[0, 0, 0, 0, 0] keep tracking which image is shown 0-1
  // State to track wishlist toggle for each product
  // const [wishlist, setWishlist] = useState(products.map(() => false));

     // State to track wishlist toggle for each product
  // const [wishlist, setWishlist] = useState(products.map(() => false));
 const [wishlist, setWishlist] = useState([]);

   const[products, setproducts]=useState([]);
  const [currentBanner, setCurrentBanner] = useState(0);

useEffect(()=>{

  const fetchProducts = async () => {
    try {
         const response = await axios.get ('http://localhost:5000/api/products');
         console.log("products fetched:", response.data);
                // Set initial image index for each product after products are fetched
        setCurrentImageIndex(new Array(response.data.length).fill(0));

          setproducts(response.data);
    } catch (error) {
       console.error("Error fetching products:", error);
    }
  }
    fetchProducts();
},[]);




  

  const nextBanner = () => setCurrentBanner((prev) => (prev + 1) % banners.length);
  const prevBanner = () => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);







 



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

     const handleaddtocart = ( id ) => {
    const product= products.find((p)=>p.id === id);
    // alert(`Added ${product.title}`);

    setdata(prevCart => [...prevCart, product]);
  //  setlocalcart( prevCart => [...prevCart, product]); //newCart = prevCart + product;
   
  } ;

 const toggleWishlist = (id,index) => {
    alert("wishlist clicked");
       const newUI =[...wishlist];
    newUI[index] = !newUI[index];
    setWishlist(newUI);


              
             const product=products.find(p=>p.id == id);
            if(product){
              console.log("Product found for wishlist:", product);

            setlist(prewishlist => [...prewishlist, product]);
            }
            else{
              console.error("Product not found for wishlist");
            }
              };

   
const handlefilter = (min, max, checked) => {
  
  if(!checked){
    setproducts(products);
  }
 else{
          if(min>=0 && max<=5000){
          const filteredproducts =products.filter(p=>p.price >=min && p.price <=max);
            setproducts(filteredproducts);
          }
          if(min>=5000 && max<=10000){
            const filteredproducts =products.filter(p=>p.price >=min && p.price <=max);
          
            if(filteredproducts.length == 0){
            console.error("no product above 5000");
            return;
            
            }
            setproducts(filteredproducts);
          }
          if(min>=10000){
            const filteredproducts =products.filter(p=>p.price >=min && p.price <=max); 
            
            if(filteredproducts.length == 0){
            console.error("no product above 10000");
            return;
            }
            setproducts(filteredproducts);

          }
     }

};


  const handlefilterrating= (rating,checked) => {
   if(!checked){
      setproducts(products);
   }
   else{
    if (rating>=4){ 
      const filteredproducts =products.filter(p=>p.rating >=rating);
      setproducts(filteredproducts);   
    }
    else{
      setproducts(products);
    }
    if (rating>=3){
         const filteredproducts =products.filter(p=>p.rating >=rating);
      setproducts(filteredproducts);
  }
     else{
      setproducts(products);
    }
   }
  };
  
 const handlefilterreview =(reviews, checked)=>{
 
  if(!checked){
    setproducts(products1);
  }
  else{

  if(reviews <=50){
    const filteredproducts =products.filter(p=>p.reviews >=50);
    setproducts(filteredproducts);
 }
  else if(reviews >= 100){
    const filteredproducts =products.filter(p=>p.reviews >=100);
    if(filteredproducts.length == 0){
      console.error("no product above 100 reviews");
      return;
    };
    setproducts(filteredproducts)
 }
 else{
  setproducts(products);
 }
  }


}


  return (
    <CatalogWrapper>
      {/* Banner slideshow */}
      <Banner>
        <img src={banners[currentBanner]} alt="Catalog Banner" />
        <button className="arrow left" onClick={prevBanner}><FaChevronLeft /></button>
        <button className="arrow right" onClick={nextBanner}><FaChevronRight /></button>
      </Banner>

      <Content>
        {/* Left vertical filter */}
        <FilterSidebar>
          <h3>Filters</h3>
          <div className="filter-group">
            <h4>Price</h4>
            <ul>
              <li><input type="checkbox" onClick={(e)=>{handlefilter(0,5000,e.target.checked) }}  /> ₹0 - ₹5000</li>
              <li><input type="checkbox" onClick={(e)=>{handlefilter(5000, 10000,e.target.checked) }} /> ₹5000 - ₹10000</li>
              <li><input type="checkbox"  onClick={(e)=>{handlefilter(10000,Infinity,e.target.checked) }} /> ₹10000+</li>
            </ul>
          </div>
          <div className="filter-group">
            <h4>Rating</h4>
            <ul>
              <li><input type="checkbox"  onClick={(e)=>{handlefilterrating(4, e.target.checked) }}  /> 4★ & above</li>
              <li><input type="checkbox" onClick={(e)=>{handlefilterrating(3,e.target.checked) }} /> 3★ & above</li>
            </ul>
          </div>
          <div className="filter-group">
            <h4>Review</h4>
            <ul>
              <li><input type="checkbox"  onClick={(e)=>{handlefilterreview(50,e.target.checked) }}/> Above 50</li>
              <li><input type="checkbox"  onClick={(e)=>{handlefilterreview(100,e.target.checked) }}/> Above 100</li>
            </ul>
          </div>
        </FilterSidebar>

        {/* Product Grid */}
        <ProductGrid>
          {/* {products.map((product, i) => (
            <ProductCard key={i}>
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="price">
                ₹{product.price.toLocaleString()} <small>₹{product.originalPrice.toLocaleString()}</small>
              </div>
            </ProductCard>
          ))} */}

             {products.map((product, i) => (
          <article key={product.id} className="product-card">
            <div className="productimg">
              <Link to={`/product/${product.id}`}>
               {console.log("Current Image Index:", currentImageIndex[i])}  {/* Log the current image index */}
  {console.log("Product Images:", product.images)} 
                <img src={product.images[currentImageIndex[i]]
                } alt={`${product.title} - image ${currentImageIndex[i] + 1}`}  />
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
                onClick={() => toggleWishlist(product.id , i )} >
                {wishlist[i] ? "♥" : "♡"}
              </div>
            </div>

            <div className="info">
              <div className="rating">
                <span>{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</span>
                <span>({product.reviews})</span>
              </div>

              <Link to={`/product/${product.id}`   }
          
            className="product-title-link">
                <h3 className="product-title">{product.title}</h3>
                       {
                console.log(product.id)
              }
              </Link>
              <p className="description">{product.description}</p>

              <div className="price">
                ₹{product.price.toLocaleString()}
                <small>₹{product.originalPrice.toLocaleString()}</small>
                <span className="discount-percent">{product.discountPercent}% off</span>
              </div>

              <button className="add-cart" onClick={() => {handleaddtocart(product.id)}}>
                <FiShoppingBag /> Add to Cart
              </button>
            </div>
          </article>
        ))}
        </ProductGrid>
      </Content>
    </CatalogWrapper>
  )
}

export default Catalog;

// Styled Components
const CatalogWrapper = styled.div`
 /* margin-top: 0px;  account for navbar */
`;

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.7);
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }

  .arrow.left { left: 10px; }
  .arrow.right { right: 10px; }
`;

const Content = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 10px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FilterSidebar = styled.div`
  flex: 0 0 220px;
  background: #f8f8f8;
  padding: 15px;
  border-radius: 8px;

  h3 {
    margin-bottom: 10px;
  }

  .filter-group {
    margin-bottom: 20px;

    h4 {
      margin-bottom: 5px;
      font-size: 14px;
      color: #333;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-size: 13px;
        margin-bottom: 6px;
        display: flex;
        align-items: center;

        input {
          margin-right: 6px;
        }
      }
    }
  }
`;

const ProductGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
  gap: 20px;
 


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


  /* background: #fff; */
  /* border-radius: 10px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 3px 12px rgba(0,0,0,0.08); */

  /* img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 8px;
  } */

  /* h3 {
    font-size: 1rem;
    margin-bottom: 4px;
    font-weight: 600;
  }

  p {
    font-size: 0.85rem;
    color: #555;
    margin-bottom: 6px;
  }

  .price {
    font-weight: 600;
    font-size: 0.95rem;

    small {
      text-decoration: line-through;
      font-weight: 400;
      margin-left: 6px;
      color: #888;
    }
  } */
`;
