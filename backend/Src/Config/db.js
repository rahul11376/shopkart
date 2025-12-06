import mongoose from "mongoose";
// 6rRQOrx53jd9OLiI
//v53866450_db_user
//mongodb+srv://v53866450_db_user:6rRQOrx53jd9OLiI@cart.yokvzxh.mongodb.net/
//mongodb+srv://v53866450_db_user:6rRQOrx53jd9OLiI@cart.yokvzxh.mongodb.net/?appName=cart


//"mongodb+srv://v53866450_db_user:6rRQOrx53jd9OLiI@cart.yokvzxh.mongodb.net/shopkartDB?appName=cart"

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://v53866450_db_user:6rRQOrx53jd9OLiI@cart.yokvzxh.mongodb.net/shopkartDB?appName=cart");
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1); // stop server if DB connection fails
  }
};

export default connectDB;