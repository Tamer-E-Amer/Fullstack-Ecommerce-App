/**
 * @description the bar appears in all products page and contains number of products, list to sort and icons to change the view
 */

import React from "react";
// mui components
import { Stack, Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { colors } from "../../../themes/theme";
// icons
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
const ProductsCountSortViewBar = () => {
  // sort state
  const [sortType, setSortType] = React.useState(0);

  const handleChange = (event) => {
    setSortType(event.target.value);
  };
  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        m={4}
        p={1}
        sx={{ borderBottom: `1px solid ${colors.light_gray}` }}
        direction={{ md: "row", xs: "column" }}
        spacing={{ xs: 2 }}
      >
        {/* products count */}
        <Typography variant="h6" sx={{ color: colors.dark_grey, fontSize: 16 }}>
          600 products found
        </Typography>
        {/* sort and view */}
        <Stack direction="row" alignItems="center" spacing={2}>
          {/* sort */}
          <Typography
            variant="h6"
            sx={{ color: colors.dark_grey, fontSize: 16 }}
          >
            Sort by
          </Typography>
          <Box sx={{ width: 220 }}>
            <FormControl fullWidth>
              <Select
                name="sortType"
                value={sortType}
                onChange={handleChange}
                SelectDisplayProps={{
                  style: { paddingTop: 3, paddingBottom: 3 },
                }}
              >
                <MenuItem value={0}>Sort according to</MenuItem>
                <MenuItem value={1}>Prices - Asc</MenuItem>
                <MenuItem value={2}>Prices - Desc</MenuItem>
                <MenuItem value={3}>Alphabetic - Asc</MenuItem>
                <MenuItem value={4}>Prices - Desc</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {/*  view */}

          <ListIcon sx={{ fontSize: 40, color: `${colors.mid_gray}` }} />
          <GridViewIcon sx={{ fontSize: 40, color: `${colors.mid_gray}` }} />
        </Stack>
      </Stack>
    </>
  );
};

export default ProductsCountSortViewBar;
