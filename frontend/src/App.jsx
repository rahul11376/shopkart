import React, { useEffect, useState,useRef } from 'react';
import './App.css';
import Navbar from './components/navbar.jsx';
import Featureimage from './components/Featureimage.jsx';
import Collection from './components/Collection.jsx';
import Trust from './components/Trust.jsx';
import Footer from './components/Footer.jsx';
import Brand from './components/Brand.jsx';
import VIPLaunch from './components/VIPLaunch.jsx';
import Exclusive from './components/Exclusive.jsx';
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



  useEffect(() => {
 
  },[data,list, view]);

  return (
  <Router>
         <Navbar data={data} item={item} view={view} />
      <Routes>

             {/* Home page */}
        {/* <Route path="/" element={
          <>
            <Featureimage />
           < Exclusive />
            <div className="container">
              <Collection />
              <Brand />
              <VIPLaunch />
              <Trust />
            </div>
             <Footer />
          </>
        } /> */}
        {/* Other routes can be added here*/}
         
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
} />


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
