/**
 * @description this is a js helper file to export all pages in order to be imported easly in app in one line
 */

export { default as Home } from "./home/Home";
export { default as Login } from "./login/Login";
export { default as Register } from "./register/Register";
export { default as AllProducts } from "./allProducts/AllProducts";
export { default as ProductDetails } from "./productDetails/ProductDetails";
export { default as ShopingCart } from "./shopingCart/ShopingCart";
// admin pages
export {default as ChangePassword} from "./admin/changePassword/ChangePassword";
export {default as UpdateProfile} from "./admin/updateProfile/UpdateProfile";
export {default as AddCategory} from "./admin/addCategory/AddCategory";
export {default as AddSubCategory} from "./admin/addSubCategory/AddSubCategory";
export {default as AddProduct} from "./admin/addProduct/AddProduct";