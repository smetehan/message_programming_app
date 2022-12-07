import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
const Message = () => {
  return (
    <Grid
      container
      spacing={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            minWidth: 400,
            maxWidth: 400,
            minHeight: 600,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Message;
