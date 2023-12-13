import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import HeadingSection from "../HeadingSection/HeadingSection";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Link from "next/link";

export default function TwocolumnContent(props) {
  return (
    <Box component={"section"} className="two-column-content-section">
      <Container>
        <Grid container spacing={4}>
          {props?.data?.twoColumnItems?.map((item, index) => {
            const Description = item?.fields?.description
              ? documentToHtmlString(item?.fields?.description)
              : "";
            return (
              <Grid item key={index} md={6}>
                <Box component={"div"}>
                  {item?.fields?.title && (
                    <Typography
                      variant="h4"
                      className=" heading "
                      sx={{
                        color: props?.data?.titleTextColor,
                      }}
                      dangerouslySetInnerHTML={{ __html: item?.fields?.title }}
                    />
                  )}
                  {item?.fields?.subDescription && (
                    <Typography
                      variant="h4"
                      className=" sub-discription "
                      sx={{
                        color: props?.data?.titleTextColor,
                      }}
                      dangerouslySetInnerHTML={{
                        __html: item?.fields?.subDescription,
                      }}
                    />
                  )}
                </Box>
                <Box component={"div"} className="content-column">
                  {Description && (
                    <Box
                      sx={{
                        color: props?.data?.descriptionTextColor
                          ? props?.data?.descriptionTextColor
                          : "",
                      }}
                      className="description"
                      dangerouslySetInnerHTML={{ __html: Description }}
                    />
                  )}
                  <Box
                    component={"div"}
                    sx={{
                      backgroundColor: item?.fields?.button?.fields
                        ?.buttonBackgroundColor
                        ? item?.fields?.button?.fields?.buttonBackgroundColor
                        : "",
                      color: item?.fields?.button?.fields?.buttonTextColor
                        ? item?.fields?.button?.fields?.buttonTextColor
                        : "",
                    }}
                    display="inline-block"
                    width="fit-content"
                    className="content-button"
                  >
                    <Link
                      href={item?.fields?.button?.fields?.buttonLink}
                      className="two-column-btn "
                      style={{
                        color: item?.fields?.buttonTextColor
                          ? item?.fields?.buttonTextColor
                          : "",
                      }}
                    >
                      {item?.fields?.button?.fields?.buttonName}
                    </Link>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
