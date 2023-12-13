import React, { useEffect, useState } from "react";
import { Client } from "contentful/contentfulEntry";
import {
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

// mega menu Referance field function decleraceion

export default function HeaderMegaMenuref({ Id }) {
  const [updateData, setUpdateData] = useState([]);

  const getEntrydd = async (id) => {
    let detail = await Client.getEntry(id);
    setUpdateData(detail);
  };

  useEffect(() => {
    getEntrydd(Id);
  }, []);

  return (
    <ListItem disablePadding className="sub-menu-list">
      <ListItemButton
        component="a"
        href={updateData?.fields?.menuLink}
        sx={{ padding: 0 }}
      >
        {updateData?.fields?.menuName && (
          <ListItemText primary={updateData?.fields?.menuName} className="" />
        )}
      </ListItemButton>
    </ListItem>
  );
}
