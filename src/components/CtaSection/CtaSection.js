import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";

export default function CtaSection(props) {
  const CtaDescription = props?.data?.description
    ? documentToHtmlString(props?.data?.description)
    : "";
  return (
    <Box
      component="section"
      className={`cta-section ${props?.Class ? props?.Class : ""} `}
    >
      <Container>
        <Box
          sx={{
            position:
              props?.data?.ctaPosition === "absolute" ? "relative" : "static",
          }}
        >
          <Box
            component={"div"}
            className="
          cta-section-content"
            sx={{
              "background-color": props?.data?.backgroundColor
                ? props?.data?.backgroundColor
                : "",
              backgroundImage: props?.data?.backgroundImage
                ? `url(${props?.data?.backgroundImage?.fields?.file?.url})`
                : "",

              px: 4,
              py: 8,
              position: props?.data?.ctaPosition
                ? props?.data?.ctaPosition
                : "relative",
              width: props?.data?.ctaPosition === "absolute" ? "91%" : "auto",
              left: props?.data?.ctaPosition === "absolute" ? "56px" : "auto",
              bottom:
                props?.data?.ctaPosition === "absolute" ? "-124px" : "auto",
            }}
          >
            {props?.data?.title && (
              <Typography
                variant="h4"
                className=" heading "
                sx={{
                  color: props?.data?.titleTextColor,
                }}
              >
                {props?.data?.title}
              </Typography>
            )}

            {CtaDescription && (
              <Box
                sx={{
                  color: props?.data?.descriptionTextColor
                    ? props?.data?.descriptionTextColor
                    : "",
                }}
                className="description"
                dangerouslySetInnerHTML={{ __html: CtaDescription }}
              />
            )}
            {props?.data?.button && (
              <Box component={"div"}>
                {props?.data?.button?.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <Button
                        disableTouchRipple
                        href={
                          item?.fields?.buttonUrl ? item?.fields?.buttonUrl : ""
                        }
                        className="cta-button btn"
                        aria-label={item?.fields?.buttonName}
                        sx={{
                          backgroundColor: item?.fields?.buttonBackgroundColor,
                          color: item?.fields?.buttonTextColor,
                          transition: "0.6s",
                          "&:hover": {
                            backgroundColor: item?.fields
                              ?.buttonBackgroundHoverColor
                              ? item?.fields?.buttonBackgroundHoverColor
                              : "",
                            color: item?.fields?.textHoverColor
                              ? item?.fields?.textHoverColor
                              : "",
                          },
                        }}
                        endIcon={item?.ButtonIcon}
                      >
                        {item?.fields?.buttonName}
                      </Button>
                    </Fragment>
                  );
                })}
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
