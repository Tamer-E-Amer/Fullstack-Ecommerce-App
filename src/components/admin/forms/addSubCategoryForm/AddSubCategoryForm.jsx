/**
 * @description Add subCategory form in admin system
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
import CategoryIcon from "@mui/icons-material/Category";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
// colors
import { colors } from "../../../../themes/theme";
// categories
import { categoryData } from "../../../../data/category.js";
const AddSubCategoryForm = () => {
  // category name state
  const [catName, setCatName] = React.useState(0);
  const handleCatNameChange = (event) => {
    setCatName(event.target.value);
  };
  //  looping through categories
  const catList = categoryData.map((cat) => (
    <MenuItem value={cat.id} key={cat.id}>
      {cat.title}
    </MenuItem>
  ));
  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={1}>
        <Typography
          variant="h6"
          sx={{ fontSize: 18, fontWeight: 400, color: colors.dark_grey }}
        >
          Add sub category to your market
        </Typography>
        {/* category name */}
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
            <MenuItem value={0}>Select Category Name</MenuItem>

            {catList}
          </Select>
        </FormControl>

        {/* sub category name */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
          px={2}
        >
          <CategoryIcon sx={{ color: `${colors.mid_gray}` }} />
          <input
            type="text"
            placeholder="Subcategory name"
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
        {/* upload image */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
          px={2}
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
            Upload your image here
          </Typography>
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

export default AddSubCategoryForm;
