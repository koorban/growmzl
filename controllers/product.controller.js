import Product from '../models/product.model';
import extend from 'lodash/extend';

const createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        await product.save();
        return res.status(200).json({
            message: "New Product Saved"
        });
    } catch(err) {
        return res.status(400).json({
            error: "Error occured while saving new product"
        });
    };
};

const listAll = async (req, res) => {
    try {
        let allProducts = await Product.find()
        res.json(allProducts)
    } catch(err) {
        return res.status(400).json({
            error: "An error occured while attempting to retrieve all products"
        })
    }
};

const read = async (req, res) => {
    return res.json(req.product)
};

const update = async (req, res) => {
    try {
        let product = req.profile
        product = extend(product, req.body)
        await product.save()
        res.json(product)
    } catch(err) {
        return res.status(400).json({
            error: "An error occured while updating the product"
        })
    }
};

const remove = async (req, res) => {
    try {
        let product = req.profile
        let deletedProduct = await product.remove()
        res.json(deletedProduct)
    } catch(err) {
        return res.status(400).json({
            error: "An error occured while removing the selected product"
        })
    }
};

const productById = async (req, res, next, id) => {
    try {
        let product = await Product.findById(id)
        if (!product)
          return res.status(400).json({
              error: "Product not found"
            })
      req.product = product
      next()
    } catch (err) {
        return res.status(400).json({
            error: "Another error ocurred"
        })
    }   
};

const productByCategory = async (req, res, next, category) => {
    try {
        let products = await Product.find({'category' : category}).select()
        if(products) {
            req.profile = products
            next()
        } else {
            return res.status(400).json({
            error: "Product Category not found"
            })
        }
    } catch(err) {
        return res.status(400).json({
            error: "An error occurred."
        })
    }   
};

const listByCategory = async (req, res) => {
    return res.json(req.profile)
};

export default {
    createProduct,
    listAll,
    read,
    update,
    remove,
    productById,
    productByCategory,
    listByCategory,
};