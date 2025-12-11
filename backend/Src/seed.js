import mongoose from 'mongoose';
// import Product from '../Modals/Product.js';
import Product from './Modals/Product.js';

const products = [
  {
    // id: '1',
    title: "Signature Timepiece",
    description: "Elegant watch with stainless steel finish",
    // quantity: 1,
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
    // id: '2',
    title: "Chronograph Classic",
    //  quantity: 1,
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
    // id: '3',
    title: "Elegant Fastrack",
    //  quantity: 1,
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
    // id: '4',
    title: "Sonata Gold Edition",
    description: "Luxury gold-finish watch",
    //  quantity: 1,
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

// mongodb+srv://v53866450_db_user:<db_password>@cart.yokvzxh.mongodb.net/?appName=cart
async function seedDB() {
  try {
   await mongoose.connect("mongodb+srv://v53866450_db_user:6rRQOrx53jd9OLiI@cart.yokvzxh.mongodb.net/shopkartDB?appName=cart");
    console.log('MongoDB connected');

    // Clear existing products
    await Product.deleteMany({});
     console.log('🧹 Old products cleared');


    // Insert seed products
    await Product.insertMany(products);
    console.log('Seed products inserted');

    // Close connection
    await mongoose.connection.close();
    console.log('🔒 MongoDB connection closed');
  } catch (err) {
     console.error('❌ Error seeding database:', err);
  }
}

seedDB();