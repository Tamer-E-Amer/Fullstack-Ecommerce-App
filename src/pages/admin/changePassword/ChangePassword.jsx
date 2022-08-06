/**
 * @description administartion: change password
 */
import React from "react";
//mui components
import { Container, Stack } from "@mui/material";
// app components
import Navbar from "../../../components/utility/appbar";
import Footer from "../../../components/utility/footer/Footer";
import PageHeader from "../../../components/utility/pageHeader/PageHeader";
import AdminFormsContainer from "../../../components/utility/admin/adminFormsContainer/AdminFormsContainer";
import ChangePasswordForm from "../../../components/admin/forms/changePasswordForm/ChangePasswordForm";
import LeftAdminPannel from "../../../components/utility/admin/leftAdminPannel/LeftAdminPannel";
// imgs
import adminHeaderImg from "../../../assets/imgs/adminHeaderImg.png";
import changePassImg from "../../../assets/imgs/changePassImg.png";
const ChangePassword = () => {
  return (
    <>
      <Navbar />
      <PageHeader title="Administration" img={adminHeaderImg} />
      <Container>
        <Stack spacing={1} direction={{xs:"column",md:"row"}} alignItems={{xs:"center", md:"flex-start"}} my={2}>
        <LeftAdminPannel />
        <AdminFormsContainer
          title="Change Password"
          img={changePassImg}
          form={<ChangePasswordForm />}
        />
        </Stack>
        
      </Container>
      <Footer />
    </>
  );
};

export default ChangePassword;
