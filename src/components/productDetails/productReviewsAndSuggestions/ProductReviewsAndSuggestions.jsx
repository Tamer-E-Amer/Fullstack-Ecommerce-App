/**
 * @description product reviews and suggestion container in the product details page
 */

import React from "react";
//mui components
import {
  Box,
  Button,
  Container,
  Divider,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
// app components
import PaginateComponent from "../../utility/paginatComponent/PaginateComponent";
import SectionTitle from "../../utility/sectionTitle/SectionTitle";
// icons
import StarIcon from "@mui/icons-material/Star";
import CommentIcon from "@mui/icons-material/Comment";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// colors and theme
import { colors } from "../../../themes/theme";
import ReviewCard from "./ReviewCard";
import SuggestedProducts from "./SuggestedProducts";

const ProductReviewsAndSuggestions = () => {
  return (
    <Box height={"auto"} bgcolor={colors.light_gray} pb={2}>
      <Container sx={{ pt: 3 }}>
        {/* title */}
        <Stack spacing={3} direction="row" alignItems="center" mb={2}>
          <Typography variant="h6" color={colors.dark_grey}>
            Reviews
          </Typography>
          <Stack spacing={1} direction="row" alignItems="center">
            <StarIcon sx={{ color: colors.yellow, fontSize: 16 }} />
            <Typography variant="subtitle1" color={colors.mid_gray}>
              (150 reviews)
            </Typography>
          </Stack>
        </Stack>
        {/* review form */}
        <Box
          p={3}
          bgcolor="#fff"
          border={`1px solid ${colors.light_gray}`}
          borderRadius={5}
          height="auto"
        >
          <Stack alignItems="center" spacing={2} direction="row">
            <Typography
              variant="h6"
              color={colors.mid_gray}
              sx={{ fontSize: 16 }}
            >
              Tamer Amer
            </Typography>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Stack>
          <Box mt={1} mb={1}>
            <TextField
              variant="outlined"
              sx={{
                width: "100%",
                fontSize: 16,
                color: `${colors.mid_gray}`,
                textAlign: "center",
                mb: 2,
              }}
              multiline
              rows={5}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: { xs: "50%", md: "25%" },
                height: { xs: 40, md: 40 },
                borderRadius: 0,
                mb: 3,
              }}
              startIcon={<CommentIcon />}
            >
              Add comment
            </Button>
            <Divider />
            {/*  reviews cards */}
            <Stack spacing={2} pt={3}>
              <ReviewCard
                user="Ahmad Ali"
                rateValue={4}
                ratingDate="1/1/2022"
              />
              <ReviewCard
                user="Youssef Tamer"
                rateValue={3.5}
                ratingDate="1/1/2022"
              />
              <ReviewCard
                user="Adam Tamer"
                rateValue={4.5}
                ratingDate="1/1/2022"
              />
              <PaginateComponent />
            </Stack>
          </Box>
        </Box>
      </Container>
      {/* You may like suggestion */}
      <Container>
        <Box mt={10}>
          <SectionTitle title={"You may also like"} width="280px" />
          {/* swiper of cards */}
          <Box>
            <SuggestedProducts />
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button
                variant="contained"
                color="secondary"
                sx={{ width: 240, height: 50, textDecoration: "none" }}
              >
                More...
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductReviewsAndSuggestions;
