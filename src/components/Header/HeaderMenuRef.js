import { Masonry } from "@mui/lab";
import { Button, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Client } from "contentful/contentfulEntry";
import HeaderMegaMenuref from "./HeaderMegaMenuref";

// menu Referance field function decleraceion


export default function HeaderMenuRef({ Id }) {
  const [updateData, setUpdateData] = useState([]);


  const getEntrydd = async (id) => {
    let detail = await Client.getEntry(id);
    setUpdateData(detail);
  };

    useEffect(() => {
    getEntrydd(Id);
  }, []);
  
  return (
    <>
      <Button
        className="SubHeading"
        href={updateData?.fields?.megaMenuTitleLink}
      >
        {updateData?.fields?.megaMenuTitle}
      </Button>
      <Box
        component={"div"}
        sx={{
          display: "flex",
        }}
      >
        <Masonry className="Mainmenu-list" columns="4" spacing={1}>
          {updateData?.fields?.menuItems?.map((item, index) => {
            return (
              <Box component={"div"} className="mui-list" key={index}>
                <List>
                  {item?.fields?.title && (
                    <Typography variant="h6" className="list-title">
                      {item?.fields?.title}
                    </Typography>
                  )}

                  {item?.fields?.menus?.map((items, index) => {
                    return (
                      <HeaderMegaMenuref Id={items?.sys?.id} key={index} />
                    );
                  })}
                </List>
              </Box>
            );
          })}
        </Masonry>
      </Box>
    </>
  );
}
