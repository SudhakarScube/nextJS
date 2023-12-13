import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import * as React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function LogoSection(props) {
  let itemsToshow = "";
  if (props?.itemsToshow) {
    itemsToshow = props?.itemsToshow;
  } else {
    itemsToshow = 5;
  }
  const settings = {
    slidesToShow: itemsToshow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 519,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 399,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const Mystyle = {
    backgroundColor: props?.slider?.backgroundColor
      ? props?.slider?.backgroundColor
      : "",
  };

  const LogoDescription = props?.data?.description
    ? documentToHtmlString(props?.data?.description)
    : "";

  return (
    <Box
      component={"section"}
      className={`logo-carousel ${props?.class ? props?.class : ""}`}
      style={Mystyle}
    >
      <Container>
        <Grid
          container
          sx={{
            alignItems: "center",
          }}
          className="logo-slider-column"
        >
          <Grid item md={2}>
            {LogoDescription && (
              <Box
                className="description"
                dangerouslySetInnerHTML={{
                  __html: LogoDescription,
                }}
                sx={{
                  color: props?.data?.titleTextColor,
                  pl: 2,
                }}
              />
            )}
          </Grid>
          <Grid item md={10} className="carousel-logo">
            <Slider className="customer-logos-slider" {...settings}>
              {props?.data?.logoItems?.map((slide) => {
                return (
                  <Box
                    className="slide customer-logo-img"
                    key={slide?.fields?.logoImage?.fields?.fileName}
                  >
                    {slide?.fields?.logoImage?.fields?.file?.url && (
                      // <Image
                      //   alt={slide?.fields?.logoImage?.fields?.file?.fileName}
                      //   className="img-fluid"
                      //   src={`https:${slide?.fields?.logoImage?.fields?.file?.url}`}
                      //   width={150}
                      //   height={40}
                      //   unoptimized={true}
                      // />
                      <Box
                      component={"div"}
                      sx={{
                        width: "150px",
                        height: "40px",
                        backgroundImage: slide?.fields?.logoImage
                          ? `url(${slide?.fields?.logoImage?.fields?.file?.url})`
                          : "",
                      }}
                      className="img-fluid"
                    ></Box>
                    )}
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
