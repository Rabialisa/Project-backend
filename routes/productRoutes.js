import express from "express";
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { createProductController, getProductController } from "../controllers/productController.js";
import formidable from 'express-formidable';


const router = express.Router()

//routes
router.post (
    '/create-product', 
    requireSignIn, 
    isAdmin, 
    formidable(), 
    createProductController 
    );

router.get('/get-products', getProductController);


export default router;