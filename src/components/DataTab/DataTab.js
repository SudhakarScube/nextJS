import React, { Fragment, useState } from "react";
import {
  Box,
  Card,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Link from "next/link";
import TwocolumSection from "../TwocolumSection/TwocolumSection";
import ThreeColumnSection from "../ThreeColumnSection/ThreeColumnSection";
import SocialMedia from "../SocialMedia/SocialMedia";
import ContentSection from "../ContentSection/ContentSection";

function DataTab(props) {
  const [value, setValue] = useState(0);

  const handleChange = () => {
    setValue(newValue);
  };
  return (
    <Box
      component={"section"}
      className={`data-tab-section ${props?.Class ? props?.Class : ""}`}
    >
      <Container>
        <Grid container>
          <Grid item md={3}>
            <Typography variant="h3" className="tab-title">
              Narrow By
            </Typography>
            {props?.data?.asideTabItems?.map((item, index) => {
              return (
                <>
                  <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    aria-label="Vertical tabs example"
                    key={index}
                    className="tab-button-column"
                  >
                    <Tab
                      label={item?.fields?.tabItem}
                      onClick={() => {
                        setValue(index);
                      }}
                      className={value === index ? "selected button" : "button"}
                    />
                  </Tabs>
                </>
              );
            })}
          </Grid>
          <Grid item md={9}>
            {props?.data?.asideTabItems?.map((item, index) => {
              return (
                <Grid
                  container
                  className="card-flexxing"
                  spacing={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "0px",
                  }}
                  key={index}
                >
                  {item?.fields?.asideTabData?.map((carditem, i) => {
                    const DataDescription = carditem?.fields?.description
                      ? documentToHtmlString(carditem?.fields?.description)
                      : "";
                    return (
                      <>
                        {value === index && (
                          <Grid
                            item
                            md={4}
                            sm={5}
                            className="grid-items"
                            key={i}
                          >
                            <Typography
                              component="div"
                              role="tabpanel"
                              id={`vertical-tabpanel-${0}`}
                              aria-labelledby={`vertical-tab-${0}`}
                            >
                              <Box value={value} index={i} className="tab-pad">
                                <Card className="card-grid">
                                  <Box component={"div"}>
                                    <Typography
                                      className="card-title"
                                      variant="h5"
                                    >
                                      {carditem?.fields?.title}
                                    </Typography>
                                    {DataDescription && (
                                      <Box
                                        className="description"
                                        dangerouslySetInnerHTML={{
                                          __html: DataDescription,
                                        }}
                                      />
                                    )}
                                  </Box>
                                  <Link
                                    href={carditem?.fields?.buttonLink}
                                    component={"div"}
                                    className="card-arrow"
                                  >
                                    Find out more
                                    <ArrowRightAltIcon
                                      sx={{ pt: "8px", color: "blue" }}
                                    />
                                  </Link>
                                </Card>
                              </Box>
                            </Typography>
                          </Grid>
                        )}
                      </>
                    );
                  })}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        {props?.data?.asideTabItems?.map((item, index) => {
          return (
            <Fragment key={index}>
              {value === index && (
                <>
                  {item?.fields?.twoColumnSection && (
                    <TwocolumSection
                      Class="data-tab-twocolumn"
                      data={item?.fields?.twoColumnSection?.fields}
                    />
                  )}
                  {item?.fields?.threeColumnSection && (
                    <ThreeColumnSection
                      data={item?.fields?.threeColumnSection?.fields}
                    />
                  )}
                  {item?.fields?.contentSection && (
                    <ContentSection
                      data={item?.fields?.contentSection?.fields}
                      Class="data-tab-contentsection"
                    />
                  )}
                  {item?.fields?.socialIcons && (
                    <SocialMedia data={item?.fields} Class="data-tab-media" />
                  )}
                </>
              )}
            </Fragment>
          );
        })}
      </Container>
    </Box>
  );
}

export default DataTab;
