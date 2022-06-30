/**
 * @description product suggestion card
 */

import React from "react";
// mui components
import { Paper, Stack, Box, Typography, Rating, Button } from "@mui/material";
import { colors } from "../../../themes/theme";
const ProductSuggestionCard = (props) => {
  return (
    <>
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 120,
          borderRadius: "10px",
        }}
      >
        {/* product description */}
        <Stack alignItems="flex-end" width="100%" pr={2}>
          {/* title */}
          <Typography
            variant="h5"
            color={colors.dark_grey}
            fontWeight="500"
            fontSize={16}
          >
            {`${props.productData.title} ${props.productData.id}`}
          </Typography>
          {/* rating */}
          <Stack direction="row" alignItems="center" spacing={1} pt={1} pb={1}>
            <Box
              sx={{
                height: 25,
                width: 25,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.green,
                color: "#fff",
                fontSize: 12,
                borderRadius: "50%",
              }}
            >
              {props.productData.rating}
            </Box>
            <Rating
              name="half-rating"
              defaultValue={props.productData.rating}
              precision={0.5}
              readOnly
              size="small"
            />
          </Stack>

          <Box
            width="80%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* add to cart button */}
            <Button
              variant="contained"
              sx={{
                width: "60%",
                height: 25,
                bgcolor: colors.mid_gray,
                borderRadius: 40,
                textTransform: "none",
                fontSize:14,
                mr:2
              }}
            >
              {" "}
              Add to cart
            </Button>
            {/* price */}
            <Typography
              variant="h6"
              color={colors.green}
              fontSize={25}
              fontWeight={600}
            >
              {props.productData.price}
            </Typography>
          </Box>
        </Stack>
        {/* product image */}
        <Box
          width={120}
          height={120}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img
            src={props.productData.productPicture}
            alt="product img"
            width="100%"
            height="100%"
          />
        </Box>
      </Paper>
    </>
  );
};

export default ProductSuggestionCard;
