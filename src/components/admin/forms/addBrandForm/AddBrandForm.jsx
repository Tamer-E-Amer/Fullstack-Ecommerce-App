/**
 * @description Add brand form in admin system
 */

import React from "react";
// mui components
import { Stack, Typography, Box, Button, IconButton } from "@mui/material";
// icons
import SaveIcon from "@mui/icons-material/Save";
import CategoryIcon from "@mui/icons-material/Category";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
// colors
import { colors } from "../../../../themes/theme";
const AddBrandForm = () => {
  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={1}>
        <Typography
          variant="h6"
          sx={{ fontSize: 18, fontWeight: 400, color: colors.dark_grey }}
        >
          Add brand to your market
        </Typography>
        {/* Brand name */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
          px={2}
        >
          <CategoryIcon sx={{ color: `${colors.mid_gray}` }} />
          <input
            type="text"
            placeholder="Brand name"
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
            Upload brand logo here
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

export default AddBrandForm;
