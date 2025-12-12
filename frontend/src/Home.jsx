import React, { useEffect, useState } from 'react'
import Brand from './components/Brand.jsx';
import VIPLaunch from './components/VIPLaunch.jsx';
import Collection from './components/Collection.jsx';
import Trust from './components/Trust.jsx';
import Exclusive from './components/Exclusive.jsx';

const Home = ( {setdata,setlist,products,setproducts}) => {
const [cart, setCart] = useState([]);
const [wish,setwish] =useState([]);
const [prod, setprod]= useState([]);

useEffect(() => {
  setdata(cart);
  setlist(wish);
  setprod(products);

}, [cart, setCart, wish, setwish]);

  return (
    <div>

   <div id="collection">
  <Collection setCart={setCart} setwish={setwish}  setprod={setprod} prod={prod} />
</div>

<div id="exclusive">
  <Exclusive />
</div>

<div id="brand">
  <Brand />
</div>

<div id="vip-launch">
  <VIPLaunch />
</div>
              
    </div>
  )
}

export default Home