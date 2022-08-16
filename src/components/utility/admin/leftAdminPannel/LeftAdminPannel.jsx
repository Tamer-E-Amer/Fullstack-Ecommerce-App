/**
 * @description this component is the left side bar that appears in pages of admin section and contains admin operation
 */

import React from "react";
// mui components
import {
  FormControlLabel,
  Stack,
  Typography,
  FormGroup,
  Checkbox,
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";
// router-dom
import { Link } from "react-router-dom";
// colors theme
import { colors } from "../../../../themes/theme";
//icons
import GridViewIcon from "@mui/icons-material/GridView";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const LeftAdminPannel = () => {
  // state to each collapse of admin options
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [productsOpen, setProductsOpen] = React.useState(false);
  const [managementOpen, setManagementOpen] = React.useState(false);

  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 280,
          height: "auto",
          bgcolor: "#fff",
          border: `1px solid ${colors.light_gray}`,
          mb: 2,
          borderRadius: "40px 40px 0 0 ",
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
              justifyContent="center"
              display="flex"
              p={1}
              sx={{
                backgroundColor: `${colors.mid_gray}`,
                color: "#fff",
                width: "100%",
                height: 48,
                borderRadius: "40px 40px 0 0 ",
              }}
            >
              <GridViewIcon />
              <Typography variant="h5" sx={{ fontSize: "20px" }}>
                Admin pannel
              </Typography>
            </Stack>
          </ListSubheader>
        }
      >
        {/* My profile */}
        <ListItemButton
          onClick={() => {
            setProfileOpen(!profileOpen);
          }}
        >
          <ListItemIcon>
            <ManageAccountsIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="My profile" />
          {profileOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={profileOpen} timeout="auto" unmountOnExit p={0}>
          <Stack spacing={2} pl={10}>
            <Link
              to="/admin/profile/changePassword/11111"
              style={{ textDecoration: "none" }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="left"
                color={colors.dark_grey}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: colors.green,
                  },
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                <Typography variant="body2" mx={1}>
                  Change password
                </Typography>
              </Box>
            </Link>
            <Link
              to="/admin/profile/updatemyprofile/11111"
              style={{ textDecoration: "none" }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="left"
                color={colors.dark_grey}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: colors.green,
                  },
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                <Typography variant="body2" mx={1}>
                  Update profile
                </Typography>
              </Box>
            </Link>
          </Stack>
        </Collapse>
        {/* products */}
        <ListItemButton
          onClick={() => {
            setProductsOpen(!productsOpen);
          }}
        >
          <ListItemIcon>
            <QrCodeIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="Products" />
          {productsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={productsOpen} timeout="auto" unmountOnExit p={0}>
          <Stack spacing={2} pl={10}>
            <Link
              to="/admin/products/addCategory"
              style={{ textDecoration: "none" }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="left"
                color={colors.dark_grey}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: colors.green,
                  },
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                <Typography variant="body2" mx={1}>
                  Add category
                </Typography>
              </Box>
            </Link>
            {/* add subcategory */}
            <Link
              to="/admin/products/addSubCategory/"
              style={{ textDecoration: "none" }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="left"
                color={colors.dark_grey}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: colors.green,
                  },
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                <Typography variant="body2" mx={1}>
                  Add sub category
                </Typography>
              </Box>
            </Link>
            <Link
              to="/admin/products/addProduct"
              style={{ textDecoration: "none" }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="left"
                color={colors.dark_grey}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: colors.green,
                  },
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                <Typography variant="body2" mx={1}>
                  Add Product
                </Typography>
              </Box>
            </Link>

            {/* add brands */}
            <Link
              to="/admin/products/addBrand"
              style={{ textDecoration: "none" }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="left"
                color={colors.dark_grey}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: colors.green,
                  },
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                <Typography variant="body2" mx={1}>
                  Add brand
                </Typography>
              </Box>
            </Link>
          </Stack>
        </Collapse>
        {/* Management */}
        <ListItemButton
          onClick={() => {
            setManagementOpen(!managementOpen);
          }}
        >
          <ListItemIcon>
            <AccountTreeIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="Management" />
          {managementOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={managementOpen} timeout="auto" unmountOnExit p={0}>
          <Stack spacing={2} pl={10}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="left"
              color={colors.dark_grey}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: colors.green,
                },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
              <Typography variant="body2" mx={1}>
                Orders management
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="left"
              color={colors.dark_grey}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: colors.green,
                },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
              <Typography variant="body2" mx={1}>
                Products managemment
              </Typography>
            </Box>
          </Stack>
        </Collapse>
      </List>
    </>
  );
};

export default LeftAdminPannel;
