/**
 * @description Admin section: add products page
 */

import React from "react";
//mui components
import { Container, Stack } from "@mui/material";
// app components
import Navbar from "../../../components/utility/appbar";
import Footer from "../../../components/utility/footer/Footer";
import PageHeader from "../../../components/utility/pageHeader/PageHeader";
import AdminFormsContainer from "../../../components/utility/admin/adminFormsContainer/AdminFormsContainer";
import AddProductform from "../../../components/admin/forms/addProductForm/AddProductForm";
import LeftAdminPannel from "../../../components/utility/admin/leftAdminPannel/LeftAdminPannel";
// imgs
import adminHeaderImg from "../../../assets/imgs/adminHeaderImg.png";
import addProductImg from "../../../assets/imgs/addProductImg.png";
const AddProduct = () => {
  return (
    <>
      <Navbar />
      <PageHeader title="Administration" img={adminHeaderImg} />
      <Container>
        <Stack
          spacing={3}
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          my={2}
        >
          <LeftAdminPannel />
          <AdminFormsContainer
            title="Add product"
            img={addProductImg}
            form={<AddProductform />}
          />
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default AddProduct;
