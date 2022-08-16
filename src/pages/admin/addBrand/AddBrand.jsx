/**
 * @description Administration: Add brand page
 */

import React from "react";
//mui components
import { Container, Stack } from "@mui/material";
// app components
import Navbar from "../../../components/utility/appbar";
import Footer from "../../../components/utility/footer/Footer";
import PageHeader from "../../../components/utility/pageHeader/PageHeader";
import AdminFormsContainer from "../../../components/utility/admin/adminFormsContainer/AdminFormsContainer";
import AddBrandForm from "../../../components/admin/forms/addBrandForm/AddBrandForm";
import LeftAdminPannel from "../../../components/utility/admin/leftAdminPannel/LeftAdminPannel";
// imgs
import adminHeaderImg from "../../../assets/imgs/adminHeaderImg.png";
import addBrandImg from "../../../assets/imgs/addBrandImg.png";
const AddBrand = () => {
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
            title="Add Brand"
            img={addBrandImg}
            form={<AddBrandForm />}
          />
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default AddBrand;
