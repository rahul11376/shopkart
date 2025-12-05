import express from 'express';
const router = express.Router();
 import { getAllProducts,createProduct,  updateProduct, deleteProduct} from '../Controllers/productController.js';

  
// const productController = require('../Controllers/productController');

router.get('/',getAllProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;  
// module.default exports = router;