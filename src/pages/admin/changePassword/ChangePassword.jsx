/**
 * @description administartion: change password
 */
import React from 'react'
import Navbar from "../../../components/utility/appbar";
import Footer from "../../../components/utility/footer/Footer";
import PageHeader from "../../../components/utility/pageHeader/PageHeader"
// imgs
import adminHeaderImg from '../../../assets/imgs/adminHeaderImg.png'
const ChangePassword = () => {
    return (
        <>
        <Navbar />
        <PageHeader title="Administration" img={adminHeaderImg}/>
      <Footer />    
        </>
    )
}

export default ChangePassword
