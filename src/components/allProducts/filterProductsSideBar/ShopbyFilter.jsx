/**
 * @description shop by filter that appearrs in category filter side bar and contains shoping by color and price
 */
import React from "react";
// mui components
import {
  Stack,
  Typography,
  Checkbox,
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Button,
} from "@mui/material";
// colors theme
import { colors } from "../../../themes/theme";
//icons
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import colorIcon from "../../../assets/icons/colorIcon.png";
import moneyIcon from "../../../assets/icons/moneyIcon.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const ShopbyFilter = () => {
  // state to each collapse of shop by price and color types
  const [priceOpen, setPriceOpen] = React.useState(false);
  const [colorOpen, setColorOpen] = React.useState(false);
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 280,
          bgcolor: "#fff",
          border: `1px solid ${colors.light_gray}`,
          mb: 2,
        }}
        component="nav"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ width: "100%", bgcolor: "#fff", padding: 0 }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              display="flex"
              p={1}
              sx={{
                backgroundColor: `${colors.mid_gray}`,
                color: "#fff",
                width: "100%",
              }}
            >
              <ShoppingCartIcon />
              <Typography variant="h5">Shop by</Typography>
            </Stack>
          </ListSubheader>
        }
      >
        {/* price */}
        <ListItemButton
          onClick={() => {
            setPriceOpen(!priceOpen);
          }}
        >
          <ListItemIcon>
            <img src={moneyIcon} alt="" />
          </ListItemIcon>
          <ListItemText primary="Price" />
          {priceOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={priceOpen} timeout="auto" unmountOnExit p={0}>
          {/*  from to Form */}
          <Stack alignItems="center" justifyContent="center" spacing={1} m={2}>
            {/* from */}
            <Box
              display="flex"
              alignItems="center"
              sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
              width={200}
              px={2}
            >
              <Typography variant="h6" sx={{ fontSize: 16 }}>
                From
              </Typography>
              <input
                type="Number"
                // placeholder="from"
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
            {/* to */}
            <Box
              display="flex"
              alignItems="center"
              sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
              width={200}
              px={2}
            >
              <Typography variant="h6" sx={{ fontSize: 16 }}>
                To
              </Typography>
              <input
                type="number"
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
            {/* submit button */}
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: 200,
                height: { xs: 40, md: 40 },
                borderRadius: 0,
              }}
              startIcon={<FilterAltIcon />}
              mb={7}
            >
              Apply
            </Button>
          </Stack>
        </Collapse>

        {/* color */}
        {/* TODO: these colors will sppears from API that send the real colors of the products */}
        <ListItemButton
          onClick={() => {
            setColorOpen(!colorOpen);
          }}
        >
          <ListItemIcon>
            <img src={colorIcon} alt="" />
          </ListItemIcon>
          <ListItemText primary="Color" />
          {colorOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={colorOpen} timeout="auto" unmountOnExit p={0}>
          <Stack direction="row" alignItems="center" justifyContent="center">
            <Checkbox
              icon={<CircleOutlinedIcon sx={{ color: "red" }} />}
              checkedIcon={<CircleIcon sx={{ color: "red" }} />}
            />
            <Checkbox
              icon={<CircleOutlinedIcon sx={{ color: "green" }} />}
              checkedIcon={<CircleIcon sx={{ color: "green" }} />}
            />
            <Checkbox
              icon={<CircleOutlinedIcon sx={{ color: "Blue" }} />}
              checkedIcon={<CircleIcon sx={{ color: "Blue" }} />}
            />
            <Checkbox
              icon={<CircleOutlinedIcon sx={{ color: "yellow" }} />}
              checkedIcon={<CircleIcon sx={{ color: "yellow" }} />}
            />
          </Stack>
        </Collapse>
      </List>
    </>
  );
};

export default ShopbyFilter;
