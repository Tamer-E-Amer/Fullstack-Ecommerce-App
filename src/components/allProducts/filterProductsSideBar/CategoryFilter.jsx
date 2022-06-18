/**
 * @description part of product filter sidebar that render the box of category filters
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
} from "@mui/material";
// colors theme
import { colors } from "../../../themes/theme";
//icons
import GridViewIcon from "@mui/icons-material/GridView";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import vegIcon from "../../../assets/icons/vegIcon.png";
import fruitIcon from "../../../assets/icons/fruitIcon.png";
import nutIcon from "../../../assets/icons/nutIcon.png";
const CategoryFilter = () => {
  // state to each collapse of vegetables type
  const [vegOpen, setVegOpen] = React.useState(false);
  const [fruitOpen, setFruitOpen] = React.useState(false);
  const [nutOpen, setNutOpen] = React.useState(false);

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
              <GridViewIcon />
              <Typography variant="h5">Categories</Typography>
            </Stack>
          </ListSubheader>
        }
      >
        {/* vegetables */}
        <ListItemButton
          onClick={() => {
            setVegOpen(!vegOpen);
          }}
        >
          <ListItemIcon>
            <img src={vegIcon} alt="" />
          </ListItemIcon>
          <ListItemText primary="Vegetables" />
          {vegOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={vegOpen} timeout="auto" unmountOnExit p={0}>
          <FormGroup sx={{ pl: 10 }}>
            <FormControlLabel control={<Checkbox />} label="Leaf vegetables" />
            <FormControlLabel control={<Checkbox />} label="Root vegetables" />
            <FormControlLabel control={<Checkbox />} label="Fruit vegetables" />
          </FormGroup>
        </Collapse>
        {/* Fruits */}
        <ListItemButton
          onClick={() => {
            setFruitOpen(!fruitOpen);
          }}
        >
          <ListItemIcon>
            <img src={fruitIcon} alt="" />
          </ListItemIcon>
          <ListItemText primary="Fruits" />
          {fruitOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={fruitOpen} timeout="auto" unmountOnExit p={0}>
          <FormGroup sx={{ pl: 10 }}>
            <FormControlLabel control={<Checkbox />} label="regular sruits" />
            <FormControlLabel control={<Checkbox />} label="Seasonal fruits" />
          </FormGroup>
        </Collapse>
        {/* Nuts */}
        <ListItemButton
          onClick={() => {
            setNutOpen(!nutOpen);
          }}
        >
          <ListItemIcon>
            <img src={nutIcon} alt="" />
          </ListItemIcon>
          <ListItemText primary="Nuts" />
          {nutOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={nutOpen} timeout="auto" unmountOnExit p={0}>
          <FormGroup sx={{ pl: 10 }}>
            <FormControlLabel control={<Checkbox />} label="Coconut" />
            <FormControlLabel control={<Checkbox />} label="Walnuts" />
            <FormControlLabel control={<Checkbox />} label="Raisins" />
            <FormControlLabel control={<Checkbox />} label="Almond" />
          </FormGroup>
        </Collapse>
      </List>
    </>
  );
};

export default CategoryFilter;
