import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Box, Button, Typography } from "@mui/material";
import React, { Fragment } from "react";

export default function HeadingSection({ ...props }) {
  const Description = props?.Description
    ? documentToHtmlString(props?.Description)
    : "";
  return (
    <Box
      component={"section"}
      className={`heading-section ${props?.Class ? props?.Class : ""}`}
      sx={{
        width: props?.TextAlign === "left" || props?.TextAlign!==true ? "100%" : "65.6%",
        margin:"auto"
      }}
    >
      {props?.Title && (
        <Typography
          variant="h2"
          className=" heading h2 "
          sx={{
            color: props?.data?.titleTextColor,
            textAlign: props?.TextAlign === "left" ? "left" : "center",
          }}
          dangerouslySetInnerHTML={{ __html: props?.Title }}
        />
      )}

      {Description && (
        <Box
          sx={{
            color: props?.data?.descriptionTextColor
              ? props?.data?.descriptionTextColor
              : "",
            textAlign: props?.TextAlign === "left" ? "left" : "center",
          }}
          className="description"
          dangerouslySetInnerHTML={{ __html: Description }}
        />
      )}
      {props?.Button && (
        <Box component={"div"}>
          {props?.Button?.map((item, index) => {
            return (
              <Fragment key={index}>
                <Button
                  href={item?.buttonUrl ? item?.buttonUrl : ""}
                  className="button-data btn"
                  aria-label={item?.buttonName}
                  sx={{
                    backgroundColor: item?.buttonBackgroundColor,
                    color: item?.buttonTextColor,
                    transition: "0.6s",
                    "&:hover": {
                      backgroundColor: item?.buttonBackgroundHoverColor
                        ? item?.buttonBackgroundHoverColor
                        : "",
                      color: item?.textHoverColor ? item?.textHoverColor : "",
                    },
                  }}
                  endIcon={item?.ButtonIcon}
                >
                  {item?.buttonName}
                </Button>
              </Fragment>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
