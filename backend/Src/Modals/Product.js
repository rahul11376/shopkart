import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
title: { type: String,
      required: true },
description: String,
price: {
     type: Number,
      required: true },

  originalPrice: Number,
  discountPercent: Number,
  rating: Number,
  reviews: Number,
  images: [String],  

}, { timestamps: true });
export default mongoose.model('Product', ProductSchema);