import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import { Box, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function InfoSlider(props) {
  let itemsToshow = "";
  if (props?.itemsToshow) {
    itemsToshow = props?.itemsToshow;
  } else {
    itemsToshow = 3;
  }
  const settings = {
    slidesToShow: itemsToshow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    infinite: true,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 689,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const Mystyle = {
    backgroundColor: props?.slider?.backgroundColor
      ? props?.slider?.backgroundColor
      : "",
  };
  return (
    <Box
      component={"section"}
      className={`info-slider ${props?.class ? props?.class : ""}`}
      style={Mystyle}
    >
      <Container>
        <Grid container>
          <Grid item lg={7} md={8} sm={12}>
            {props?.data?.title && (
              <Typography
                variant="h5"
                className=" heading "
                sx={{
                  color: props?.data?.titleTextColor,
                }}
              >
                {props?.data?.title}
              </Typography>
            )}
          </Grid>
        </Grid>

        <Grid
          container
          className="info-column"
          sx={{
            alignItems: "center",
          }}
        >
          <Grid item md={12} className="info-sliders">
            <Slider {...settings}>
              {props?.data?.cardItem?.map((slide, index) => {
                const infoDescription = slide?.fields?.description
                  ? documentToHtmlString(slide?.fields?.description)
                  : "";
                return (
                  <Box className="slider-info-column" key={index}>
                    {slide?.fields?.icon && (
                      // <Image
                      //   alt={slide?.fields?.icon?.fields?.file?.fileName}
                      //   className="img-fluid"
                      //   src={`https:${slide?.fields?.icon?.fields?.file?.url}`}

                      //   unoptimized={true}
                      // />
                      <Box
                        component={"div"}
                        sx={{
                          width: "68px",
                          height: "60px",
                          backgroundImage: slide?.fields?.icon
                            ? `url(${slide?.fields?.icon?.fields?.file?.url})`
                            : "",
                        }}
                        className="img-fluid"
                      ></Box>
                    )}

                    <Box
                      component="div"
                      sx={{
                        minHeight: "115px",
                      }}
                    >
                      {slide?.fields?.title && (
                        <Typography variant="h5" className="info-slider-title">
                          {slide?.fields?.title}
                        </Typography>
                      )}

                      {infoDescription && (
                        <Box
                          sx={{
                            color: slide?.fields?.descriptionTextColor
                              ? slide?.fields?.descriptionTextColor
                              : "",
                          }}
                          className="description"
                          dangerouslySetInnerHTML={{
                            __html: infoDescription,
                          }}
                        />
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
