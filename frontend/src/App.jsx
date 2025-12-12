import React, { useEffect, useState,useRef } from 'react';
import './App.css';
import Navbar from './components/navbar.jsx';
import Featureimage from './components/Featureimage.jsx';
import Trust from './components/Trust.jsx';
import Footer from './components/Footer.jsx';
import Home from './Home.jsx';
import Catalog from './Catalog.jsx';
import Contact from './Contact.jsx';
import Wishlist from './wishlist.jsx';
import Cart from './Cart.jsx';
import ProductView from './components/Productview.jsx';
 import Four from './Route/Four.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
   window.scrollTo(0, 0);
  const [data, setdata] = useState(null );
  const [list, setlist] =useState([]);
  const[view, setview]= useState([]);
  const[item, setitem]= useState([]);
 const [products, setproducts] = useState([]);

  
useEffect(() => {
    // Fetch products from the backend API
    const fetchproducts =async () => {
      try {
        const res = await axios('http://localhost:5000/api/products');
        console.log("response from backend:", res.data);
        setproducts(res.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchproducts();
}, []);


useEffect(()=>{
 const createfun= async ()=>{
  try {
    const res = await axios.post ('http://localhost:5000/api/products',{
      
  // "title": "Signature Timepiece2",
  // "description": "Elevate your style",
  // "images": [
  //   "/1802SL06_2.webp",
  //   "/1802SL06_3.webp",
  //   "/1802SL06_4.webp",
  //   "/1802SL06_5.webp",
  //   "/1802SL06_6.webp"
  // ],
  // "originalPrice": 2000,
  // "price": 1200,
  // "discountPercent": 37,
  // "rating": 4,
  // "reviews": 45


    });
    console.log("product created:", res);
  } catch (error) {
    console.error('Error creating product:', error);
  }
 }
  createfun();
},[])


  useEffect(() => {
 
  },[data,list, view]);

  return (
  <Router>
         <Navbar data={data} item={item} view={view} />
      <Routes>   

        <Route path="/" element={
          <>
              <Featureimage />
              <div className="container">
              <Home setdata ={setdata} setlist ={setlist} setproducts={setproducts} products={products}    />
              </div>
              <Trust />
              <Footer />
          </>
              }
        />

        <Route path="/catalog" element={
          <>
              <div className="container">
              <Catalog  setdata ={setdata} setlist ={setlist} setproducts={setproducts} products={products} />
              </div>
              <Trust />
              <Footer />
          </>
           }
       />

         <Route path="/contact" element={
           <>
               <div className="container">
               <Contact/>
               </div>
               <Footer />
           </>
            
          }
        />
       
    

      <Route path="/wishlist" element={
           <>
              <div className="container">
              <Wishlist  list={list} setitem={setitem}/> 
              </div>
              <Footer />
          </>
        }
     />

      <Route path="/Cart" element={
          <>
              <div className="container">
              < Cart data ={data} view={view} item={item} />
              </div>
              <Footer />
          </>
        }
      />
       

       
      <Route path="/product/:id" element={
  
          <>
            <div className="container">
            <ProductView setview={setview} />
            </div>
            <Trust />
            <Footer />
         </>
        } 
      />


     <Route path="/Four" element={
     <>
            <div className="container">
            <Four/>
            </div>
            <Footer />
     </>
     } />
   </Routes>

 </Router>
  );
}

export default App;
