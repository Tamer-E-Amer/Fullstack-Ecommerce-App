/**
 * @description Add product form in addmin system
 */

import React from "react";
// mui components
import {
  Stack,
  Typography,
  Box,
  Button,
  IconButton,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
// icons
import SaveIcon from "@mui/icons-material/Save";

import PhotoCamera from "@mui/icons-material/PhotoCamera";
import InfoIcon from "@mui/icons-material/Info";
import TitleIcon from "@mui/icons-material/Title";
import PaletteIcon from "@mui/icons-material/Palette";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
// colors
import { colors } from "../../../../themes/theme";
// categories
import { categoryData } from "../../../../data/category.js";
const AddProductForm = () => {
  // category name state
  const [catName, setCatName] = React.useState(0);
  const [brand, setBrand] = React.useState(0)
  const handleCatNameChange = (event) => {
    setCatName(event.target.value);
  };
  //  looping through categories
  const catList = categoryData.map((cat) => (
    <MenuItem value={cat.id} key={cat.id}>
      {cat.title}
    </MenuItem>
  ));

  // brand change
  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };
  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={1}>
        <Typography
          variant="h6"
          sx={{ fontSize: 18, fontWeight: 400, color: colors.dark_grey }}
        >
          Add product to the market
        </Typography>
        {/* product title */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
          px={2}
        >
          <TitleIcon sx={{ color: `${colors.mid_gray}` }} />
          <input
            type="text"
            placeholder="Product title"
            style={{
              outline: "none",
              border: "none",
              width: "100%",
              height: 30,
              fontSize: 16,
              color: `${colors.mid_gray}`,
              textAlign: "center",
            }}
          />
        </Box>
        {/* category and subcategory */}
        <Stack
          spacing={1}
          //   alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row" }}
        >
          {/* category */}
          <FormControl fullWidth>
            <Select
              name="catName"
              value={catName}
              onChange={handleCatNameChange}
              SelectDisplayProps={{
                style: { paddingTop: 3, paddingBottom: 3 },
              }}
              sx={{
                height: "40px",
                borderRadius: 0,
              }}
            >
              <MenuItem value={0}>Category</MenuItem>

              {catList}
            </Select>
          </FormControl>
          {/* subcategory */}
          <FormControl fullWidth>
            <Select
              name="catName"
              value={catName}
              onChange={handleCatNameChange}
              SelectDisplayProps={{
                style: { paddingTop: 3, paddingBottom: 3 },
              }}
              sx={{
                height: "40px",
                borderRadius: 0,
              }}
            >
              <MenuItem value={0}>Subcategory</MenuItem>

              {catList}
            </Select>
          </FormControl>
        </Stack>
        {/* Brand */}
        {/* category */}
        <FormControl fullWidth>
          <Select
            name="brand"
            value={brand}
            onChange={handleBrandChange}
            SelectDisplayProps={{
              style: { paddingTop: 3, paddingBottom: 3 },
            }}
            sx={{
              height: "40px",
              borderRadius: 0,
            }}
          >
            <MenuItem value={0}>Select brand</MenuItem>
            <MenuItem value={1}>Brand 1</MenuItem>
            <MenuItem value={2}>Brand 2</MenuItem>
            <MenuItem value={3}>Brand 3</MenuItem>
          </Select>
        </FormControl>
        {/* color and price */}
        <Stack
          spacing={1}
          //   alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row" }}
        >
          {/*  color */}
          <Box
            display="flex"
            alignItems="center"
            sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
            px={2}
            width="100%"
          >
            <PaletteIcon sx={{ color: `${colors.mid_gray}` }} />
            <input
              type="text"
              placeholder="color"
              style={{
                outline: "none",
                border: "none",
                width: "100%",
                height: 30,
                fontSize: 16,
                color: `${colors.mid_gray}`,
                textAlign: "center",
              }}
            />
          </Box>

          {/*  price */}
          <Box
            display="flex"
            alignItems="center"
            sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
            px={2}
            width="100%"
          >
            <MonetizationOnIcon sx={{ color: `${colors.mid_gray}` }} />
            <input
              type="number"
              min={1}
              max={50}
              placeholder="Price"
              style={{
                outline: "none",
                border: "none",
                width: "100%",
                height: 30,
                fontSize: 16,
                color: `${colors.mid_gray}`,
                textAlign: "center",
              }}
            />
          </Box>
        </Stack>
        {/* upload image */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
          px={2}
          width="100%"
        >
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
          <Typography sx={{ color: colors.mid_gray, fontSize: "14px" }}>
            Upload image
          </Typography>
        </Box>

        {/* Dscription */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ border: `0.5px solid ${colors.light_gray}`, height: 150 }}
          px={2}
        >
          <InfoIcon sx={{ color: `${colors.mid_gray}` }} />
          <textarea
            // type="text"
            placeholder="Description"
            rows={6}
            style={{
              outline: "none",
              border: "none",
              width: "100%",
              height: 130,
              fontSize: 16,
              resize: "none",
              color: `${colors.mid_gray}`,
              textAlign: "center",
            }}
          />
        </Box>

        {/*  save changes button */}
        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: "100%",
            height: { xs: 40, md: 40 },
            borderRadius: 0,
            textTransform: "none",
          }}
          startIcon={<SaveIcon />}
          mb={7}
        >
          Save changes
        </Button>
      </Stack>
    </>
  );
};

export default AddProductForm;
