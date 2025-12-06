import Product from '../Modals/Product.js';
// const Product = require('../Modals/Product');

// All products

export const getAllProducts = async (req, res, next) => { 
          console.log("someone is fetching  data",req)
    try{

        const products= await Product.find();
        res.status(200).json(products);
    }
    catch(err){
           next(err);
           console.log(err);
    } };

// Get a single product by id
export const getProductById = async (req, res,next) => {
  const { id } = req.params;  // Extract product id from the route parameter
  try {
    const product = await Product.findById(id);  // Find product by id in the database
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
     console.error(err);
    res.status(500).json({ message: 'Error fetching product', error: err });
  }
};



 //create
export const createProduct  = async (req, res, next) => {
    try{
        const newProduct= new Product(req.body);
        await newProduct.save();
          res.status(201).json(newProd);
    }
    catch(err){
        next(err);
         console.log(err);

    }};

    //update
export const updateProduct = async (req, res) => {
  try {
    
    const updatedproduct = await Product.findByIdAndUpdate(
      req.params.id,   // which product?
      req.body,        // what to update?
      { new: true }    // return the updated product
    );

    
    res.json( updatedproduct); //  Send updated product back

  } catch (err) {
    
    res.status(500).json({ error: err.message });
  }
};

//delete
export const deleteProduct = async (req, res) => {
    try{

        const deleteproduct =await Product.findByIdAndDelete(
            req.params.id, // which product?
        );
        res.json( deleteproduct);
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
}
