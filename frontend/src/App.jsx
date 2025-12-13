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
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Cart from './Cart.jsx';
import ProductView from './components/Productview.jsx';
 import Four from './Route/Four.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hidebar from './components/Hidebar.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import axios from 'axios';

function App() {
   useEffect(() => {
  window.scrollTo(0, 0);
}, []);
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
     //   console.log("response from backend:", res.data);
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
    });
   // console.log("product created:", res);
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
    <Hidebar>  <Navbar data={data} item={item} view={view} /></Hidebar>
       
      <Routes>   

        <Route path="/" element={
          <ProtectedRoute>
          <>
              <Featureimage />
              <div className="container">
                
              <Home setdata ={setdata} setlist ={setlist} setproducts={setproducts} products={products}    />
            
              </div>
              <Trust />
              <Footer />
          </>
            </ProtectedRoute>
              }
        />

        <Route path="/catalog" element={
           <ProtectedRoute>
          <>
              <div className="container">
              <Catalog  setdata ={setdata} setlist ={setlist} setproducts={setproducts} products={products} />
              </div>
              <Trust />
              <Footer />
          </>
          </ProtectedRoute>
           }
       />

         <Route path="/contact" element={
          <ProtectedRoute>
           <>
               <div className="container">
               <Contact/>
               </div>
               <Footer />
           </>
               </ProtectedRoute>
          }
        />
       
    

      <Route path="/wishlist" element={
        <ProtectedRoute>
           <>
              <div className="container">
              <Wishlist  list={list} setitem={setitem}/> 
              </div>
              <Footer />
          </>
          </ProtectedRoute>
        }
     />

      <Route path="/Cart" element={
        <ProtectedRoute>
          <>
              <div className="container">
              < Cart data ={data} view={view} item={item} />
              </div>
              <Footer />
          </>
           </ProtectedRoute>
        }
      />
       

       
      <Route path="/product/:id" element={
   <ProtectedRoute>
          <>
            <div className="container">
            <ProductView setview={setview} />
            </div>
            <Trust />
            <Footer />
         </>
         </ProtectedRoute>
        } 
      />


     <Route path="/Four" element={
       <ProtectedRoute>
     <>
            <div className="container">
            <Four/>
            </div>
            <Footer />
           
     </>
      </ProtectedRoute>
     } />

 <Route path="/Login" element={
      <Login />
 }/>

 <Route path="/Signup" element={
      <Signup />
 }/>

   </Routes>

 </Router>
  );
}

export default App;
