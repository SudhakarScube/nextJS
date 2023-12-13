import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

export default function NewsOverview(props) {
  const [limit, setLimit] = useState(7);
  const [startIndex, setStartIndex] = useState(0);

  const ItemsToShow = props?.data
    ?.sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date))
    ?.filter((item) => {
      return <></>;
    })
    .slice(startIndex, limit);

  // Handle "view more" button click

  function handleViewMore() {
    setStartIndex((prevStartIndex) => prevStartIndex);
    setLimit((prevLimit) => prevLimit + 7);
  }

  return (
    <Box
      component="section"
      className={`news-overview-section ${props?.Class ? props?.Class : ""}`}
    >
      <Container>
        {ItemsToShow?.length > 0 ? (
          <>
            <Grid
              container
              className="news-container"
              spacing={4}
              // sx={{ my: 4 }}
            >
              {ItemsToShow?.map((item, index) => {
                const elements = [];

                for (let i = 0; i < 7; i++) {
                  const itemIndex = index * 7 + i;

                  if (!ItemsToShow[itemIndex]) {
                    break;
                  }

                  const { BackgroundColor } = ItemsToShow[itemIndex];

                  const Heading = ItemsToShow[itemIndex]?.fields?.title;

                  let date = null;
                  if (ItemsToShow[itemIndex]?.fields?.date) {
                    const timestamp = Date.parse(
                      ItemsToShow[itemIndex]?.fields?.date
                    );
                    if (!isNaN(timestamp)) {
                      date = new Date(timestamp);
                    }
                  }

                  function truncateText(Heading, maxLength) {
                    if (
                      ItemsToShow[itemIndex]?.fields?.title.length > maxLength
                    ) {
                      return Heading.slice(0, maxLength) + "...";
                    } else {
                      return Heading;
                    }
                  }

                  const HeadingText = truncateText(Heading, 80);

                  elements.push(
                    <Grid className="news-grid" item xs={12} md={i < 4 ? 6 : 4}>
                      <Link
                        href={`news/${ItemsToShow[itemIndex]?.fields?.slug}`}
                      >
                        <Box
                          component="div"
                          className="news-box"
                          sx={{
                            backgroundColor: BackgroundColor
                              ? BackgroundColor
                              : "",
                          }}
                        >
                          <Box
                            component="div"
                            className={`newsbox-image`}
                            sx={{
                              backgroundImage: `url(${ItemsToShow[itemIndex]?.fields?.featuredImage?.fields?.file?.url})`,
                            }}
                          ></Box>
                          <Box
                            component={"div"}
                            className="news-content-column"
                          >
                            {ItemsToShow[itemIndex]?.fields?.category && (
                              <Typography
                                variant="h5"
                                className="newsbox-preheading"
                                sx={{ p: 0 }}
                              >
                                {ItemsToShow[itemIndex]?.fields?.category}
                              </Typography>
                            )}
                            {ItemsToShow[itemIndex]?.fields?.title && (
                              <Typography
                                variant="h2"
                                className="newsbox-heading h2"
                                sx={{ p: 0 }}
                                dangerouslySetInnerHTML={{
                                  __html: ItemsToShow[itemIndex]?.fields?.title,
                                }}
                              />
                            )}
                            {date && (
                              <Typography variant="p" className="newsbox-date">
                                {new Intl.DateTimeFormat("en-GB", {
                                  month: "short",
                                  day: "2-digit",
                                  year: "numeric",
                                }).format(date)}
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      </Link>
                    </Grid>
                  );
                }

                return elements;
              })}
            </Grid>

            {limit < props?.data.length && (
              <Box
                component="div"
                className="view-more"
                sx={{
                  textAlign: "center",
                  pt: 10,
                }}
              >
                <Button disableRipple
                  className={`button-white view-more-button`}
                  onClick={handleViewMore}
                >
                  View more
                </Button>
              </Box>
            )}
          </>
        ) : (
          <Typography sx={{ my: 6 }} variant="body1">
            No Results Found.
          </Typography>
        )}
      </Container>
    </Box>
  );
}
