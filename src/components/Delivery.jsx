import React from "react";

import { Box, Paper } from "@mui/material";
import Language from "../shared/Language";

const Delivery = () => {
  const { DELIVERY_ADDRESS, NOT_DETERMINED } = Language.SHIPMENT_TRACKING;
  return (
    <React.Fragment>
      <Box className="section-title">{DELIVERY_ADDRESS}</Box>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#fafafa",
          border: "1px solid #f1f1f1",
          padding: "10px 20px",
        }}
      >
        {NOT_DETERMINED}
      </Paper>
    </React.Fragment>
  );
};

export default Delivery;
