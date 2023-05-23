import React from "react";
import SideBar from "./Sidebar";
import { Box } from "@mui/material";

const Drafts = () => {
  return (
    <Box
      sx={{
        width: "100px",
        height: "143px",
        bgcolor: "green",
        marginTop: "8px",
        color: "yellow",
        paddingTop: "5px",
        boxSizing: "border-box",
      }}
    >
      Drafts
    </Box>
  );
};

export default Drafts;
