/**
 * @description update profile form in Admin system
 */

import React from "react";
// mui components
import { Stack, Typography, Box, Button, IconButton } from "@mui/material";
// icons
import SaveIcon from "@mui/icons-material/Save";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import PersonIcon from '@mui/icons-material/Person';
// colors
import { colors } from "../../../../themes/theme";
const UpdateProfileForm = () => {
  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={1}>
        <Typography
          variant="h6"
          sx={{ fontSize: 18, fontWeight: 400, color: colors.dark_grey }}
        >
          Update my profile
        </Typography>
        {/* first and last name */}
        <Stack
          spacing={1}
        //   alignItems="center"
          justifyContent="space-between"
          direction={{xs:"column",md:"row"}}
          
        >
          {/*  first name */}
          <Box
            display="flex"
            alignItems="center"
            sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
            px={2}
          >
            <PersonIcon sx={{ color: `${colors.mid_gray}` }} />
            <input
              type="text"
              placeholder="first name"
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
          {/* last name */}
          <Box
            display="flex"
            alignItems="center"
            sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
            px={2}
          >
            <PersonIcon sx={{ color: `${colors.mid_gray}` }} />
            <input
              type="text"
              placeholder="first name"
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
        {/* E-mail */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
          px={2}
        >
          <EmailIcon sx={{ color: `${colors.mid_gray}` }} />
          <input
            type="email"
            placeholder="your mail"
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
        {/* Phone */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
          px={2}
        >
          <PhoneAndroidIcon sx={{ color: `${colors.mid_gray}` }} />
          <input
            type="tel"
            placeholder="your phone"
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
        {/* location */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
          px={2}
        >
          <LocationOnIcon sx={{ color: `${colors.mid_gray}` }} />
          <input
            type="text"
            placeholder="Your address"
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

export default UpdateProfileForm;
