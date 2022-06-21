/**
 * @description review card that render the review of a user about certain product
 * @param {string} user: the name of the reviewer
 * @param {number} rateValue: the value of the user rating
 */

import React from "react";
// mui components
import { Stack, Typography, Rating } from "@mui/material";
// colors and theme
import { colors } from "../../../themes/theme";
import { Box } from "@mui/system";
const ReviewCard = ({ user, rateValue, ratingDate }) => {
  return (
    <>
      {/* card header */}
      <Stack
        alignItems="center"
        spacing={2}
        direction={{ xs: "column", md: "row" }}
      >
        <Typography variant="h6" color={colors.dark_grey} sx={{ fontSize: 16 }}>
          {user}
        </Typography>
        <Box display="flex" alignItems="center">
          <Rating
            name="half-rating"
            defaultValue={rateValue}
            precision={0.5}
            readOnly
          />
          <Typography color={colors.light_gray} fontSize={16} ml={2}>
            on {ratingDate}
          </Typography>
        </Box>
      </Stack>
      {/* card rating data */}
      <Box width={"90%"}>
        <Typography variant={"subtitle2"} color={colors.mid_gray}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
          augue nec est tristique auctor. Donec non est at libero vulputate
          rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus
          mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque
          libero. Pellentesque aliquet
        </Typography>
      </Box>
    </>
  );
};

export default ReviewCard;
