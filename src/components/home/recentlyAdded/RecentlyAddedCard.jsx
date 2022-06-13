/**
 * @description the card that appears in recently added section
 */

import React from "react";
// mui components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Box, Checkbox } from "@mui/material";
import { colors } from "../../../themes/theme";
// rating
import Rating from "@mui/material/Rating";

// icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
const RecentlyAddedCard = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={props.cardData.picture}
        />
        <CardContent>
          <Stack
            alignItems={"center"}
            justifyContent={"space-between"}
            direction="row"
            m="1rem 0"
          >
            <Typography gutterBottom variant="h5" component="div">
              {props.cardData.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                width: 130,
                backgroundColor: "#ECECEC",
                border: "1px solid ##6CA12B",
                borderRadius: 20,
              }}
            >
              <Typography
                variant="h5"
                color={colors.green}
                sx={{
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                {props.cardData.price}/{props.cardData.forWhat}
              </Typography>
            </Box>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {props.cardData.description}
          </Typography>
        </CardContent>
        <CardActions>
          {/* rating and hear like  */}
          <Stack
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            m="0.5rem 0"
            width="100%"
          >
            <Checkbox
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon />}
              sx={{
                color: "red",
                "&.Mui-checked": {
                  color: "red",
                },
                "& .MuiSvgIcon-root": { fontSize: 35 },
              }}
            />
            {/* rating */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
            >
              <Box
                sx={{
                  height: 35,
                  width: 35,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "Center",
                  backgroundColor: colors.green,
                  color: "#fff",
                  fontSize: 14,
                  borderRadius: "50%",
                }}
              >
                {props.cardData.rate}
              </Box>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack>
          </Stack>
        </CardActions>
      </Card>
    </>
  );
};

export default RecentlyAddedCard;
