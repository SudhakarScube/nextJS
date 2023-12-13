import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Box, Button, Grid, Typography, Container } from "@mui/material";
import Image from "next/image";
import React, { Fragment } from "react";
import HeadingSection from "../HeadingSection/HeadingSection";

export default function TwocolumSection(props) {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: props?.data?.backgroundImage
          ? `url(${props?.data?.backgroundImage?.fields?.file?.url})`
          : "",
        margin: props?.data?.margin ? props?.data?.margin : "",
      }}
      className={`two-column-section ${props?.Class ? props?.Class : ""}`}
    >
      <Container
        sx={{
          padding: props?.data?.twoColumnItems[0].fields?.backgroundColor
            ? { sm: "0", xs: "0" }
            : "",
        }}
      >
        {props?.data?.title && (
          <Box component={"div"}>
            <HeadingSection
              Title={props?.data?.title}
              Description={props?.data?.description}
              Class="two-column-heading"
            />
          </Box>
        )}
        <Grid
          container
          sx={{
            paddingTop: props?.data?.title ? "65px " : "96px",
            paddingBottom: props?.data?.title ? "80px " : "83px",
          }}
          className="two-column"
        >
          {props?.data?.twoColumnItems?.map((item, index) => {
            const twoColoumnDescription = item?.fields?.description
              ? documentToHtmlString(item?.fields?.description)
              : "";
            return (
              <>
                {item?.sys?.contentType?.sys?.id === "leftContent" && (
                  <Grid
                    item
                    key={index}
                    className="left-section"
                    md={6}
                    sx={{
                      color: item?.fields?.textColor
                        ? item?.fields?.textColor
                        : "",
                      backgroundColor: item?.fields?.backgroundColor
                        ? item?.fields?.backgroundColor
                        : "",
                      order: props?.data?.imagePosition === "Left" ? 2 : 1,
                      alignSelf:
                        item?.fields?.image || item?.fields?.contentItems
                          ? "auto"
                          : "center",
                      padding: item?.fields?.backgroundColor
                        ? { md: "0 24px ", sm: "56px ", xs: "56px 25px " }
                        : "0px 56px",
                    }}
                  >
                    <Box
                      component={"div"}
                      className="left-content"
                      sx={{
                        display: item?.fields?.image ? "flex" : "",
                        justifyContent: "center",
                      }}
                    >
                      {item?.fields?.title && (
                        <Box component={"div"}>
                          {item?.fields?.contentItems ? (
                            <>
                              {item?.fields?.title && (
                                <Typography
                                  variant="h4"
                                  className="left-title"
                                  sx={{
                                    color: item?.fields?.titleTextColor
                                      ? item?.fields?.titleTextColor
                                      : "",
                                  }}
                                >
                                  {item?.fields?.title}
                                </Typography>
                              )}
                            </>
                          ) : (
                            <>
                              {item?.fields?.title && (
                                <Typography
                                  variant="h2"
                                  className="two-column-heading h2"
                                  sx={{
                                    color: item?.fields?.titleTextColor
                                      ? item?.fields?.titleTextColor
                                      : "",
                                  }}
                                >
                                  {item?.fields?.title}
                                </Typography>
                              )}
                            </>
                          )}
                          {twoColoumnDescription && (
                            <Box
                              className="description"
                              dangerouslySetInnerHTML={{
                                __html: twoColoumnDescription,
                              }}
                              sx={{
                                color: item?.fields?.descriptionTextColor,
                                pl: 2,
                              }}
                            />
                          )}
                          <Box component={"div"} className="left-content">
                            {item?.fields?.contentItems?.map((items, index) => {
                              const twoColoumnDescription = items?.fields
                                ?.description
                                ? documentToHtmlString(
                                    items?.fields?.description
                                  )
                                : "";
                              return (
                                <Grid
                                  container
                                  className="content-column"
                                  key={index}
                                  sx={{
                                    alignItems: "center",
                                  }}
                                >
                                  {items?.fields?.logo?.fields?.file?.url && (
                                    <Grid
                                      item
                                      xs={2}
                                      md={1}
                                      sx={{
                                        display: "flex",
                                        alignContent: "space-between",
                                        flexWrap: "wrap",
                                      }}
                                    >
                                      {items?.fields?.logo?.fields?.file
                                        ?.fileName && (
                                        <Image
                                          src={`https:${items?.fields?.logo?.fields?.file?.url}`}
                                          alt={
                                            items?.fields?.logo?.fields?.file
                                              ?.fileName
                                          }
                                          width={17}
                                          height={17}
                                          className="two-column-logo"
                                        />
                                      )}
                                    </Grid>
                                  )}
                                  <Grid item xs={10} md={10}>
                                    {items?.fields?.title && (
                                      <Typography
                                        variant="h4"
                                        className="two-column-left-title"
                                        sx={{
                                          color: item?.fields?.titleTextColor,
                                        }}
                                      >
                                        {items?.fields?.title}
                                      </Typography>
                                    )}
                                    {twoColoumnDescription && (
                                      <Box
                                        className="description"
                                        dangerouslySetInnerHTML={{
                                          __html: twoColoumnDescription,
                                        }}
                                        sx={{
                                          color:
                                            item?.fields?.descriptionTextColor,
                                          pl: 2,
                                        }}
                                      />
                                    )}
                                  </Grid>
                                </Grid>
                              );
                            })}
                          </Box>

                          {item?.fields?.button && (
                            <Box component={"div"} className="two-column-btn">
                              <Button
                                className="btn"
                                disableRipple
                                key={index}
                                href={
                                  item?.fields?.button?.fields?.buttonLink
                                    ? item?.fields?.button?.fields?.buttonLink
                                    : "#"
                                }
                                aria-label={
                                  item?.fields?.button?.fields?.buttonName
                                }
                                sx={{
                                  background: item?.fields?.button?.fields
                                    ?.buttonBackgroundColor
                                    ? item?.fields?.button?.fields
                                        ?.buttonBackgroundColor
                                    : "",
                                  color: item?.fields?.button?.fields
                                    ?.buttonTextColor
                                    ? item?.fields?.button?.fields
                                        ?.buttonTextColor
                                    : "",
                                }}
                              >
                                {item?.fields?.button?.fields?.buttonName}
                              </Button>
                            </Box>
                          )}
                        </Box>
                      )}
                      {item?.fields?.image && (
                        <Box
                          component={"div"}
                          className="two-column-image"
                          sx={{
                            background: item?.fields?.imageBackgroundColor
                              ? item?.fields?.imageBackgroundColor
                              : "",
                            padding: "27px",
                            borderRadius: "30px",
                          }}
                        >
                          <Image
                            src={item?.fields?.image?.fields?.file?.url}
                            alt={item?.fields?.image?.fields?.file?.fileName}
                            width={100}
                            height={100}
                            unoptimized={true}
                            className="image-data"
                          />
                        </Box>
                      )}
                    </Box>
                  </Grid>
                )}

                {item?.sys?.contentType?.sys?.id === "rightContent" && (
                  <Grid
                    item
                    key={index}
                    md={6}
                    className="right-section"
                    sx={{
                      alignSelf: "center",
                      color: item?.fields?.textColor
                        ? item?.fields?.textColor
                        : "",
                      backgroundColor: item?.fields?.backgroundColor
                        ? item?.fields?.backgroundColor
                        : "",
                      order: props?.data?.imagePosition === "Left" ? 1 : 2,
                      padding: item?.fields?.backgroundColor
                        ? { md: "0", xs: "56px 25px 56px 0 " }
                        : "0px 0 56px 0",
                    }}
                  >
                    {item?.fields?.title && (
                      <Typography
                        variant="h4"
                        className=" right-title "
                        sx={{
                          color: item?.fields?.titleTextColor,
                        }}
                      >
                        {item?.fields?.title}
                      </Typography>
                    )}

                    <Box component={"div"} className="right-content">
                      {item?.fields?.contentItem?.map((items, index) => {
                        const twoColoumnDescription = items?.fields?.description
                          ? documentToHtmlString(items?.fields?.description)
                          : "";
                        return (
                          <Grid
                            container
                            key={index}
                            className="content-column"
                          >
                            {items?.fields?.logo?.fields?.file?.url && (
                              <Grid
                                item
                                xs={2}
                                md={2}
                                sx={{
                                  display: "flex",
                                  alignContent: "space-between",
                                  flexWrap: "wrap",
                                }}
                              >
                                {items?.fields?.logo?.fields?.file
                                  ?.fileName && (
                                  <Image
                                    src={`https:${items?.fields?.logo?.fields?.file?.url}`}
                                    alt={
                                      items?.fields?.logo?.fields?.file
                                        ?.fileName
                                    }
                                    width={110}
                                    height={100}
                                    unoptimized={true}
                                    className="two-column-logo"
                                  />
                                )}
                              </Grid>
                            )}
                            <Grid item xs={10} md={10}>
                              {items?.fields?.title && (
                                <Typography
                                  variant="h4"
                                  className="two-column-title h4"
                                  sx={{
                                    color: item?.fields?.titleTextColor,
                                  }}
                                >
                                  {items?.fields?.title}
                                </Typography>
                              )}
                              {twoColoumnDescription && (
                                <Box
                                  className="description"
                                  dangerouslySetInnerHTML={{
                                    __html: twoColoumnDescription,
                                  }}
                                  sx={{
                                    color: item?.fields?.descriptionTextColor,
                                    pl: 2,
                                  }}
                                />
                              )}
                            </Grid>
                          </Grid>
                        );
                      })}
                    </Box>
                  </Grid>
                )}
              </>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
