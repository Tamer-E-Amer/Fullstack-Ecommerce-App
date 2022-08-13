/**
 * @description Administration: add category page
 */

import React from "react";
//mui components
import { Container, Stack } from "@mui/material";
// app components
import Navbar from "../../../components/utility/appbar";
import Footer from "../../../components/utility/footer/Footer";
import PageHeader from "../../../components/utility/pageHeader/PageHeader";
import AdminFormsContainer from "../../../components/utility/admin/adminFormsContainer/AdminFormsContainer";
import AddCategoryForm from "../../../components/admin/forms/addCategoryForm/AddCategoryForm";
import LeftAdminPannel from "../../../components/utility/admin/leftAdminPannel/LeftAdminPannel";
// imgs
import adminHeaderImg from "../../../assets/imgs/adminHeaderImg.png";
import addImgForAdmin from "../../../assets/imgs/addImgForAdmin.png";
const AddCategory = () => {
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
            title="Add category"
            img={addImgForAdmin}
            form={<AddCategoryForm />}
          />
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default AddCategory;
