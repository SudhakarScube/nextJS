import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Box, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export default function QuoteSlider(props) {
  let itemsToshow = "";
  if (props?.itemsToshow) {
    itemsToshow = props?.itemsToshow;
  } else {
    itemsToshow = 1;
  }
  const settings = {
    slidesToShow: itemsToshow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  const Mystyle = {
    backgroundColor: props?.slider?.backgroundColor
      ? props?.slider?.backgroundColor
      : "var(--white)",
  };

  return (
    <Box
      component={"section"}
      className={`quotes-slider ${props?.class ? props?.class : ""}`}
      sx={{ Mystyle }}
    >
      <Container sx={{ position: "relative" }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item md={12} xs={12} className="quotes-sliders">
            <Slider {...settings}>
              {props?.data?.quotesItems?.map((quotesItem, index) => {
                const quote = quotesItem?.fields?.quote
                  ? documentToHtmlString(quotesItem?.fields?.quote)
                  : "";
                return (
                  <Box
                    component="div"
                    className="quotes-slider-wrapper"
                    key={index}
                  >
                    {quotesItem?.fields?.logo && (
                      <Image
                        src={`https:${quotesItem?.fields?.logo?.fields?.file?.url}`}
                        width={140}
                        height={40}
                        alt={quotesItem?.fields?.logo?.fields?.file?.fileName}
                        className="quote-image"
                      />
                    )}
                    {quote && (
                      <Box
                        sx={{
                          color: props?.data?.descriptionTextColor
                            ? props?.data?.descriptionTextColor
                            : "",
                        }}
                        className="description"
                        dangerouslySetInnerHTML={{ __html: quote }}
                      />
                    )}
                    <Typography className="quotes-slider-description">
                      {quotesItem?.fields?.authorName}
                    </Typography>

                    <Typography className="quotes-slider-authorName">
                      {quotesItem?.fields?.authorDesignation}
                    </Typography>
                  </Box>
                );
              })}
            </Slider>
            <Box component={"div"} className="quote-icon-left">
              <Image
                src={`/Quote-top.svg`}
                width={42}
                height={32}
                alt="Quote-top"
                className="quote-image"
              />
            </Box>
            <Box component={"div"} className="quote-icon-right">
              <Image
                src={`/Quote-down.svg`}
                width={42}
                height={32}
                alt="Quote-top"
                className="quote-image"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
