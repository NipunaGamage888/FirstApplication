var express= require("express")
const router = express.Router()
var userController= require('../src/user/userController')
var productController = require('../src/product/productController')
var productDetailController= require('../src/productDetails/productdetailsController')
var adminController= require('../src/Admin/adminController')
const multer = require('multer');
const upload = multer({});

router.route('/productsDetails/createdata', upload.single('itemImage')).post(productDetailController.postProductDetailControllerFn);
router.route('/Users/getAll').get(userController.getDataControllerFn)
router.route('/products/createdata').post(productController.postProductControllerFn)
//router.route('/productsDetails/createdata').post(productDetailController.postProductDetailControllerFn)
router.route('/productDetail/getAll').get(productDetailController.getProductDetailsControllerFn)
router.route('/product/getAll').get(productController.getProductControllerFn)
router.route('/admin/login').post(adminController.loginAdminControllerFn);
router.route('/admin/profile').get(adminController.profileAdminControllerFn)
router.route('/admin/create').post(adminController.postAdminControllerFn)
//router.route('/product/update').patch(productController.updateProductControllerFn)

module.exports = router;