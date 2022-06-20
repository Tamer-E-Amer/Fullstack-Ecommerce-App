/**
 * @description productDetail page
 */

 import React from 'react'
 // mui components
 import { Container } from '@mui/material'
 // app components
 import Navbar from '../../components/utility/appbar/index'
 import Footer from '../../components/utility/footer/Footer'
 import PageHeader from '../../components/utility/pageHeader/PageHeader'
 // img
 import headerImg2 from '../../assets/imgs/headerImg2.png'
import ProductDescription from '../../components/productDetails/ProductDescription'

 const ProductDetails = () => {
     return (
         <>
             <Navbar/>
             <PageHeader title="Product details" img={headerImg2} />
             <Container>
                 <ProductDescription/>
             </Container>
             <Footer/>
         </>
     )
 }
 
 export default ProductDetails
 