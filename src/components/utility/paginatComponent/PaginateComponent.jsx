/**
 * @description Paginate component
 */

import React from "react";
import Pagination from "@mui/material/Pagination";
const PaginateComponent = () => {
  return (
    <div>
      <Pagination count={10} size="large" />
    </div>
  );
};

export default PaginateComponent;
