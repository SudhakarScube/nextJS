import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { CacheProvider } from "@emotion/react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import createCache from "@emotion/cache";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HeroBanner(props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(props?.data?.link);
  };

  const herobannerDescription = props?.data?.description
    ? documentToHtmlString(props?.data?.description)
    : "";

  /**
   * Primary UI component for user interaction
   */
  const cache = createCache({
    key: "css",
    prepend: true,
  });
  return (
    <Box
      component="section"
      className={` hero-banner-section ${props?.Class ? props?.Class : ""}`}
      sx={{
        mb: 4,
        backgroundImage: props?.data?.backgroundImage
          ? `url(${props?.data?.backgroundImage?.fields?.file?.url})`
          : "",
        paddingTop: props?.data?.logo ? "75px" : "108px",
      }}
    >
      <Container>
        <Box
          component={"div"}
          className={`hero-banner`}
          sx={{
            backgroundColor: props?.data?.backgroundColor
              ? props?.data?.backgroundColor
              : "",
            borderColor: props?.data?.borderColor
              ? props?.data?.borderColor
              : "",
            borderTop: props?.data?.borderColor ? "7px" : "none",
          }}
        >
          <Grid container>
            <Grid item className="hero-banner-grid" md={9}>
              <Box component={"div"} className="mui-text-holder">
                <Box component={"div"}>
                  {props?.data?.logo?.fields?.file?.url && (
                    <Image
                      src={`https:${props?.data?.logo?.fields?.file?.url}`}
                      alt={props?.data?.logo?.fields?.file?.fileName}
                      width={100}
                      height={100}
                      unoptimized={true}
                      className="primary-banner-image"
                    />
                  )}
                  {props?.data?.title && (
                    <Typography
                      variant="h1"
                      className="hero-banner-Heading "
                      sx={{
                        color: props?.data?.titleTextColor,
                        pl: 2,
                      }}
                      dangerouslySetInnerHTML={{
                        __html: props?.data?.title,
                      }}
                    />
                  )}
                  {herobannerDescription && (
                    <Box
                      className="description"
                      dangerouslySetInnerHTML={{
                        __html: herobannerDescription,
                      }}
                      sx={{
                        color: props?.data?.titleTextColor,
                        pl: 2,
                      }}
                    />
                  )}
                </Box>
                {props?.data?.button && (
                  <Box component={"div"} className="hero-button-column">
                    {props?.data?.button?.map((item, index) => {
                      return (
                        <Button
                          disableRipple
                          key={index}
                          href={
                            item?.fields?.buttonLink
                              ? item?.fields?.buttonLink
                              : ""
                          }
                          variant="text"
                          className="hero-button btn"
                          aria-label={item?.fields?.buttonName}
                          sx={{
                            backgroundColor: item?.fields?.buttonBackgroundColor
                              ? item?.fields?.buttonBackgroundColor
                              : "",
                            color: item?.fields?.buttonTextColor
                              ? item?.fields?.buttonTextColor
                              : "",
                            // "&:hover": {
                            //   backgroundColor: item?.fields
                            //     ?.buttonBackgroundHoverColor
                            //     ? item?.fields?.buttonBackgroundHoverColor
                            //     : "",
                            //   color: item?.fields?.textHoverColor
                            //     ? item?.fields?.textHoverColor
                            //     : "",
                            // },
                          }}
                          endIcon={
                            item?.fields?.buttonIcon === true ? (
                              <ArrowForwardIcon />
                            ) : (
                              ""
                            )
                          }
                        >
                          {item?.fields?.buttonName}
                        </Button>
                      );
                    })}
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
