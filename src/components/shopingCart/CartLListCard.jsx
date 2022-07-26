/**
 * @description card item in shooping cart list.
 */

import React from "react";
import { Paper, Grid, Stack, Typography, Box, IconButton } from "@mui/material";
// react router dom
import { Link } from "react-router-dom";
// colors anf themes
import { colors } from "../../themes/theme";
// icons
import CircleIcon from "@mui/icons-material/Circle";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
// imgs
import mango from "../../assets/imgs/mango.png";
// css
import "../../app.css";
const CartLListCard = () => {
  return (
    <>
      <Paper
        elevation={0}
        sqauer
        sx={{
          display: "flex",
          alignItems: "center",
          border: `1px solid ${colors.light_gray}`,
          height: "auto",
          width: "100%",
          p: "1rem",
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="flex-start"
          justifyContent="center"
        >
          {/* image */}
          <Grid item xs={12} sm={3} md={3}>
            <Link to="/productDetails/11111111111">
              <Box width={{ xs: 120, md: 160 }} height={{ xs: 120, md: 160 }}>
                <img
                  src={mango}
                  alt="product image"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Link>
          </Grid>
          {/* description */}
          <Grid item xs={12} sm={9} md={7}>
            <Stack
              spacing={2}
              alignItems="flex-start"
              justifyContent="center"
              pl={2}
            >
              {/* title */}
              <Link
                to="/productDetails/1111111"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h5"
                  color={colors.dark_grey}
                  sx={{ "&:hover": { color: colors.green } }}
                >
                  Mamngo alphonsos
                </Typography>
              </Link>
              {/* category */}
              <Typography
                variant="h5"
                color={colors.mid_gray}
                sx={{ fontSize: 25 }}
              >
                Fruit
              </Typography>
              {/* color and raring */}
              <Stack direction="row" spacing={3} alignItems="center">
                {/* color */}
                <CircleIcon sx={{ color: "red" }} fontSize="large" />
                <Box display="flex" alignItems={"center"} flexDirection="row">
                  <StarIcon
                    sx={{ color: colors.yellow, mr: 1 }}
                    fontSize="medium"
                  />
                  <Typography color={colors.mid_gray}>4.5</Typography>
                </Box>
              </Stack>
              {/* quantity */}
              <Box display="flex" flexDirection="row" alignItems={"center"}>
                <Typography variant="h5" fontSize={18}>
                  Quantity
                </Typography>
                <Box
                  sx={{
                    border: `1px solid${colors.light_gray}`,
                    height: 40,
                    width: 80,
                    ml: 2,
                  }}
                >
                  <input
                    type="number"
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      color: colors.dark_grey,
                      outline: "none",
                      border: "none",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              </Box>
            </Stack>
          </Grid>
          {/* price and delete */}
          <Grid item xs={12} sm={12} md={2}>
            <Stack
              spacing={{ xs: 1, md: 10 }}
              alignItems="center"
              justifyContent={"space-between"}
              direction={{ xs: "row", md: "column" }}
              pl={3}
              pr={3}
            >
              <Typography variant="h5" color={colors.dark_grey}>
                4$
              </Typography>
              <IconButton>
                <DeleteIcon sx={{ color: "red" }} />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default CartLListCard;
