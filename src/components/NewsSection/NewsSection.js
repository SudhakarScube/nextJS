import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import React, { Fragment } from "react";

export default function NewsSection(props) {
  return (
    <Box component="section" className="news-section">
      <Container>
        {props?.data?.title && (
          <Typography variant="h3" className="news-title h3">
            {props?.data?.title}
          </Typography>
        )}
        <Grid container spacing={2} className="news-column-box">
          {props?.data?.newsItems?.map((item, index) => {
            const title = item?.fields?.title;

            function truncateText(text, maxLength) {
              if (text && text.length > maxLength) {
                return text.slice(0, maxLength) + "...";
              } else {
                return text;
              }
            }
            const HeadingText = truncateText(title, 40);

            const newsDescription = item?.fields?.excrept
              ? documentToHtmlString(item?.fields?.excrept)
              : "";

            return (
              <Fragment key={index}>
                <Grid item md={4} sm={12} className="news-column-box">
                  <Link href={`#`} className="news-link">
                    <Box component={"div"} className="news-column">
                      <Box
                        component={"div"}
                        className="news-feature-image"
                        sx={{
                          backgroundImage: item?.fields?.image
                            ? `url(${item?.fields?.image?.fields?.file?.url})`
                            : "",
                        }}
                      />
                      <Box component={"div"} className="news-content-box">
                        {item?.fields?.title && (
                          <Typography
                            variant="h5"
                            className="title"
                            // noWrap
                            // sx={{ maxWidth: 200 }}
                            lines={2}
                          >
                            {HeadingText}
                          </Typography>
                        )}
                        {newsDescription && (
                          <Box
                            sx={{
                              color: item?.fields?.descriptionTextColor
                                ? item?.fields?.descriptionTextColor
                                : "",
                            }}
                            className="description"
                            dangerouslySetInnerHTML={{
                              __html: newsDescription,
                            }}
                          />
                        )}
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              </Fragment>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
