import { Box, Container, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function TemplateSidebar(props) {
  return (
    <Box component={"section"} className="template-sidebar">
      <Box component={"div"}>
        {props?.data?.fields?.title && (
          <Typography
            variant="h3"
            className=" heading  "
            sx={{
              color: props?.data?.titleTextColor,
            }}
            dangerouslySetInnerHTML={{ __html: props?.data?.fields?.title }}
          />
        )}
      </Box>
      <Box component={"div"}>
        <List>
          {props?.data?.fields?.fieldItem?.map((item, index) => {
            const handleclick = (event) => {
              document.getElementById("scrollLink");
              {
                event.preventDefault(); // Prevents the default link behavior
                var targetElement = document.getElementById(
                  `${item?.fields?.fieldId}`
                );
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            };
            return (
              <>
                {item?.fields?.fieldName && (
                  <Link
                    className="menu-list"
                    href={`#${item?.fields?.fieldId}`}
                    onClick={handleclick}
                    style={{
                      display: "block",
                    }}
                  >
                    <ListItem
                      className="h5 menu-list-title"
                      sx={{
                        pl: 0,
                      }}
                    >
                      {item?.fields?.fieldName}
                    </ListItem>
                  </Link>
                )}
              </>
            );
          })}
        </List>
      </Box>
    </Box>
  );
}
