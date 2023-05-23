import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import {Link, Outlet} from 'react-router-dom'

const SideBar = () => {
  const [selectedButton, setSelectedButton] = useState('inbox');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <Box sx={{ display:"flex",width: "100%", maxWidth: 500, bgcolor: "yellow",justifyContent:"space-between" }}>
     <Box>
     <List>
        <NavLink to="/sidebar/inbox">
          <ListItem
            sx={{
              bgcolor: selectedButton === "inbox" ? "blue" : "red",
              color: "white",
            }}
            disablePadding
            onClick={() => handleButtonClick("inbox")}
          >
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to="/sidebar/drafts">
          <ListItem
            sx={{
              bgcolor: selectedButton === "drafts" ? "blue" : "red",
              color: "white",
            }}
            disablePadding
            onClick={() => handleButtonClick("drafts")}
          >
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to="/sidebar/emails">
          <ListItem
            sx={{
              bgcolor: selectedButton === "emails" ? "blue" : "red",
              color: "white",
            }}
            disablePadding
            onClick={() => handleButtonClick("emails")}
          >
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
     </Box>

     <Box>
     <Outlet/>
     </Box>
    </Box>
  );
};

export default SideBar;
