/**
 * @description login page
 */

 import React from 'react'
import LoginFormContainer from '../../components/login/loginFormContainer/LoginFormContainer'
import Navbar from '../../components/utility/appbar'
import Footer from '../../components/utility/footer/Footer'
 
 const Login = () => {
     return (
         <div>
             <Navbar/>
             <LoginFormContainer/>
             <Footer/>
         </div>
     )
 }
 
 export default Login
 