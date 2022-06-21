/**
 * @description product description component that appears in product details page
 */
import React from "react";
// mui components
import {
  Box,
  Button,
  Checkbox,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
// imgs
import mango from "../../assets/imgs/mango.png";
import { colors } from "../../themes/theme";
// icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
const ProductDescription = () => {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <>
      <Stack mt={5} direction={"row"} spacing={5}>
        {/* product imag */}
        <Box spacing={1}>
          <img
            src={mango}
            alt="product image"
            style={{ height: 328, width: 247 }}
          />
        </Box>
        {/* product details data */}
        <Box width="80%">
          <Typography variant="h4" sx={{ color: colors.dark_grey }}>
            {" "}
            Fruit
          </Typography>
          {/* name and price */}
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              borderBottom: `1px solid ${colors.light_gray}`,
            }}
            pb={1}
            spacing={15}
          >
            <Typography varinat="subtitle" sx={{ color: colors.mid_gray }}>
              Mango Alphonsos
            </Typography>
            {/* price box */}
            <Box
              sx={{
                borderRadius: 40,
                width: 130,
                height: 30,
                bgcolor: colors.dark_grey,
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h6" sx={{ color: "#fff" }}>
                1.3$
              </Typography>
            </Box>
          </Stack>
          {/* ratings */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            pt={1}
            pb={1}
            sx={{ borderBottom: `1px solid ${colors.light_gray}` }}
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
              4.5
            </Box>
            <Rating
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </Stack>
          {/* available in stock */}
          <Typography variant="h6" color="secondary">
            Availabe in stock
          </Typography>
          {/* color */}
          <Box
            sx={{
              height: 30,
              width: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "Center",
              backgroundColor: "yellow",
              borderRadius: "50%",
              margin: "0.5rem 0",
            }}
          ></Box>
          {/* description */}
          <Typography variant="h6" sx={{ color: colors.dark_grey }}>
            Description
          </Typography>
          <Typography variant="subtitle1" sx={{ color: colors.mid_gray }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
            Donec a neque libero. Pellentesque aliquet, sem eget laoreet
            ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget
            velit. Donec ac tempus ante. Fusce ultricies...
          </Typography>

          {/* action buttons */}
          <Stack direction="row" spacing={1} mt={3} mb={3}>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ width: 40, height: 40, borderRadius: 0, fontSize: 30 }}
            >
              -
            </Button>
            {/* quantity */}
            <Box
              display="flex"
              alignItems="center"
              sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
              width={80}
              px={2}
            >
              <input
                type="tel"
                value={quantity}
                name="quantity"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                style={{
                  outline: "none",
                  border: "none",
                  width: "100%",
                  height: 30,
                  fontSize: 16,
                  color: `${colors.mid_gray}`,
                  textAlign: "center",
                }}
                max={100}
                min={1}
              />
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ width: 40, height: 40, borderRadius: 0, fontSize: 30 }}
            >
              +
            </Button>

            <Button
              variant="contained"
              color="secondary"
              sx={{ width: 180, height: 40, borderRadius: 0 }}
              startIcon={<ShoppingCartIcon />}
            >
              Add to cart
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ width: 40, height: 40, borderRadius: 0 }}
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
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default ProductDescription;
