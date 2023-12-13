import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export const TabSlider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ExpandId, setExpandId] = useState(0);

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.04,
    slidesToScroll: 0.5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1.02,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.02,
        },
      },
    ],
  };

  const handleTabClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };
  return (
    <Box
      component="section"
      className="tab-slider-section "
      sx={{
        backgroundColor: props?.data?.backgroundColor,
      }}
    >
      <Box component={"div"} className="tab-slider-section">
        <Box component={"div"} className="heading">
          {props?.data?.title && (
            <Typography variant="h3" className=" tab-Heading h2 ">
              {props?.data?.title}
            </Typography>
          )}
        </Box>
        <Container>
          <Grid container spacing={4} className="tab-info">
            {props?.data?.tabItems?.map((item, index) => {
              const tabDescription = item?.fields?.description
                ? documentToHtmlString(item?.fields?.description)
                : "";
              return (
                <Grid
                  item
                  md={3}
                  className={`tab-box ${
                    currentSlide === index ? "active" : ""
                  }`}
                  key={index}
                >
                  <Box
                    component={"div"}
                    onClick={() => handleTabClick(index)}
                    className={`tab-column `}
                  >
                    <Box component={"div"}>
                      {item?.fields?.logoImagemedia && (
                        <Image
                          src={`https:${item?.fields?.logoImagemedia?.fields?.file?.url}`}
                          alt={
                            item?.fields?.logoImagemedia?.fields?.file?.fileName
                          }
                          width={158}
                          height={20}
                          unoptimized={true}
                          className="tab-item-image"
                        />
                      )}
                    </Box>
                    <Box>
                      {tabDescription && (
                        <Box
                          className="description"
                          dangerouslySetInnerHTML={{
                            __html: tabDescription,
                          }}
                        />
                      )}
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Container className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {props?.data?.tabItems?.map((item, index) => {
              return (
                <Box
                  component={"div"}
                  className="video-column"
                  key={index}
                  sx={{
                    backgroundColor: item?.fields?.videobackgroundColor,
                  }}
                >
                  {item?.fields?.video && (
                    <Box
                      component={"div"}
                      sx={{
                        width: "1130px",
                        height: "640px",
                        backgroundImage: item?.fields?.video
                          ? `url(${item?.fields?.video?.fields?.file?.url})`
                          : "",
                      }}
                      className="video-column-image"
                    ></Box>
                  )}
                </Box>
              );
            })}
          </Slider>
        </Container>
      </Box>

      <Box component={"div"} className="mobile-tab-accordion">
        <Container>
          <Box component={"div"} className="heading">
            {props?.data?.title && (
              <Typography variant="h2" className=" tab-Heading ">
                {props?.data?.title}
              </Typography>
            )}
          </Box>
          <Grid container>
            <Grid item xs={12} md>
              <Box component="div">
                <Grid
                  sx={{ mt: 0 }}
                  container
                  justifyContent="center"
                  mx="auto"
                >
                  <Grid item md={12} sx={{}}>
                    {props?.data?.tabItems?.map((tabitem, index) => {
                      const tabDescription = tabitem?.fields?.description
                        ? documentToHtmlString(tabitem?.fields?.description)
                        : "";
                      return (
                        <>
                          <Accordion
                            className="accordion-column"
                            expanded={ExpandId === index}
                            sx={{
                              backgroundColor: "transparent",
                              boxShadow: "none",
                              borderBottom: "1px solid #000",
                            }}
                            key={index}
                          >
                            {tabitem?.fields?.logoImagemedia && (
                              <AccordionSummary
                                aria-controls={`accordion-content-${index}`}
                                id={`accordion-header-${index}`}
                                expandIcon={
                                  ExpandId === index ? (
                                    <KeyboardArrowUpIcon className="icon" />
                                  ) : (
                                    <KeyboardArrowUpIcon className="icon" />
                                  )
                                }
                                onClick={() =>
                                  ExpandId === index
                                    ? setExpandId()
                                    : setExpandId(index)
                                }
                                sx={{ px: 0 }}
                              >
                                <>
                                  <Box>
                                    {tabitem?.fields?.logoImagemedia && (
                                      <Image
                                        src={`https:${tabitem?.fields?.logoImagemedia?.fields?.file?.url}`}
                                        alt={
                                          tabitem?.fields?.logoImagemedia
                                            ?.fields?.file?.fileName
                                        }
                                        width={158}
                                        height={20}
                                        className="tab-item-image"
                                      />
                                    )}
                                    {tabDescription && (
                                      <Box
                                        className="description"
                                        dangerouslySetInnerHTML={{
                                          __html: tabDescription,
                                        }}
                                      />
                                    )}
                                  </Box>
                                </>
                              </AccordionSummary>
                            )}
                            <AccordionDetails
                              sx={{ px: 0 }}
                              className="accordion-answer"
                            >
                              <Box
                                component={"div"}
                                className="video-column"
                                key={index}
                                sx={{
                                  backgroundColor:
                                    tabitem?.fields?.videobackgroundColor,
                                }}
                              >
                                {tabitem?.fields?.video && (
                                  <Box
                                    component={"div"}
                                    sx={{
                                      backgroundImage: tabitem?.fields?.video
                                        ? `url(${tabitem?.fields?.video?.fields?.file?.url})`
                                        : "",
                                    }}
                                    className="video-column-image"
                                  ></Box>
                                )}
                              </Box>
                            </AccordionDetails>
                          </Accordion>
                        </>
                      );
                    })}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
