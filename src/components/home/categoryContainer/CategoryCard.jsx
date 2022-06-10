/**
 * @description category card component
 */

import React from "react";
// styled components
import {
  CatCardWrapper,
  GreenCardTitle,
} from "../../../styles/home/categoryContainer";
// img
import { Typography } from "@mui/material";
const CategoryCard = (props) => {
  const { title, img } = props.data;
  return (
    <>
      <CatCardWrapper>
        <img src={img} alt="" />
        <GreenCardTitle className="cardTitle">
          <Typography
            variant="h3"
            sx={{ color: "#fff", fontWeight: 400, fontSize: 40 }}
          >
            {title}
          </Typography>
        </GreenCardTitle>
      </CatCardWrapper>
    </>
  );
};

export default CategoryCard;
