import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { CacheProvider } from "@emotion/react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import createCache from "@emotion/cache";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function TemplatetempaleBanner(props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(props?.data?.link);
  };

  const tempalebannerDescription = props?.data?.description
    ? documentToHtmlString(props?.data?.description)
    : "";

  /**
    Primary UI component for user interaction
   **/
  const cache = createCache({
    key: "css",
    prepend: true,
  });
  let date = null;
  if (props?.data?.date) {
    const timestamp = Date.parse(props?.data?.date);
    if (!isNaN(timestamp)) {
      date = new Date(timestamp);
    }
  }
  return (
    <CacheProvider value={cache}>
      <Box
        component="section"
        className={` tempale-banner-section ${
          props?.Class ? props?.Class : ""
        }`}
        sx={{
          backgroundImage: props?.data?.heroBannerBackground
            ? `url(${props?.data?.heroBannerBackground?.fields?.file?.url})`
            : "",
          paddingTop: props?.data?.logo ? "75px" : "108px",
        }}
      >
        <Container>
          <Box
            component={"div"}
            className={`tempale-banner`}
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
            <Grid
              container
              mx="auto"
              // spacing={2}
            >
              <Grid item className="tempale-banner-grid" md={6}>
                <Box component={"div"} className="mui-text-holder">
                  <Box component={"div"}>
                    {date && (
                      <Typography variant="p" className="newsbox-date">
                        {new Intl.DateTimeFormat("en-GB", {
                          month: "long",
                          day: "2-digit",
                          year: "numeric",
                        }).format(date)}{" "}
                        ⋅ OrbitData
                      </Typography>
                    )}
                    {props?.data?.title && (
                      <Typography
                        variant="h1"
                        className="tempale-banner-Heading h1"
                        sx={{
                          color: props?.data?.titleTextColor,
                          pl: 2,
                          margin: props?.data?.heroBanner
                            ? { xs: "41px 0 0 0 " }
                            : { xs: "41px 0 51px 0" },
                        }}
                        dangerouslySetInnerHTML={{
                          __html: props?.data?.title,
                        }}
                      />
                    )}
                    {tempalebannerDescription && (
                      <Box
                        className="description"
                        dangerouslySetInnerHTML={{
                          __html: tempalebannerDescription,
                        }}
                        sx={{
                          color: props?.data?.titleTextColor,
                          pl: 2,
                        }}
                      />
                    )}
                  </Box>
                  {props?.data?.buttonLink && (
                    <Box component={"div"} className="tempale-button-column">
                      <Button disableRipple
                        href={
                          props?.data?.buttonLink ? props?.data?.buttonLink : ""
                        }
                        variant="text"
                        className="tempale-button btn"
                        aria-label={props?.data?.buttonName}
                        sx={{
                          backgroundColor: props?.data?.buttonBackgroundColor
                            ? props?.data?.buttonBackgroundColor
                            : "",
                          color: props?.data?.buttonTextColor
                            ? props?.data?.buttonTextColor
                            : "",
                        }}
                        endIcon={
                          props?.data?.buttonIcon === true ? (
                            <ArrowForwardIcon />
                          ) : (
                            ""
                          )
                        }
                      >
                        {/* {props?.data?.buttonName} */}
                        Request Data
                      </Button>
                    </Box>
                  )}
                </Box>
              </Grid>
              <Grid item md={6} sx={12}>
                <Box component={"div"}>
                  {props?.data?.heroBanner?.fields?.file?.url && (
                    <Image
                      src={`https:${props?.data?.heroBanner?.fields?.file?.url}`}
                      alt={props?.data?.heroBanner?.fields?.file?.fileName}
                      width={100}
                      height={100}
                      // layout="fill"
                      unoptimized={true}
                      className="primary-banner-image"
                    />
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </CacheProvider>
  );
}
