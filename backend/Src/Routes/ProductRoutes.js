import express from 'express';
const router = express.Router();
 import { getAllProducts,createProduct,  updateProduct, deleteProduct, getProductById} from '../Controllers/productController.js';
import { Login, Signup } from '../Controllers/authController.js';
  
// const productController = require('../Controllers/productController');

router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

router.post ('/Login',Login);
router.post ('/Signup',Signup);

export default router;  


