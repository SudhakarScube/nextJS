import { Masonry } from "@mui/lab";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function ThreeColumnSection(props) {
  return (
    <Box
      component={"section"}
      className={`three-column-section ${props?.Class ? props?.Class : ""}`}
    >
      <Box component={"div"}>
        {props?.data?.title && (
          <Typography
            variant="h6"
            className=" heading "
            sx={{
              color: props?.data?.titleTextColor,
            }}
          >
            {props?.data?.title}
          </Typography>
        )}
        <Masonry columns={{ md: "3", sm: "2" }} spacing={2}>
          {props?.data?.threeColumnItems?.map((item, index) => {
            return (
              <Box
                component={"div"}
                className="three-column-content"
                key={index}
              >
                {item?.fields?.icon?.fields?.file?.fileName && (
                  <Image
                    src={`https:${item?.fields?.icon?.fields?.file?.url}`}
                    alt={item?.fields?.icon?.fields?.file?.fileName}
                    width={40}
                    height={40}
                    className="two-column-logo"
                  />
                )}
                {item?.fields?.companyFillings && (
                  <Typography
                    variant="h6"
                    className=" title "
                    sx={{
                      color: props?.data?.titleTextColor,
                    }}
                  >
                    {item?.fields?.companyFillings}
                  </Typography>
                )}
              </Box>
            );
          })}
        </Masonry>
      </Box>
    </Box>
  );
}
