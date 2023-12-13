import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RssFeedIcon from "@mui/icons-material/RssFeed";

export default function Footer(props) {
  return (
    <Box
      component="section"
      className={`footer-section ${props?.Class ? props?.Class : ""}`}
      sx={{
        backgroundColor: props?.data?.backgroundColor
          ? props?.data?.backgroundColor
          : "",
      }}
    >
      <Box component={"div"} className="footer-menu-section">
        <Container>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Grid item md={3} className="company-logo">
              <Link
                href="/"
                aria-label={
                  props?.data?.fields?.socialIconSection?.fields?.footerLogo
                    ?.fields?.file?.fileName
                }
              >
                <Image
                  className="company-logo"
                  width={103}
                  height={35}
                  alt={"image"}
                  src={
                    props?.data?.ImgSource ? `${props?.data?.ImgSource}` : ""
                  }
                />
              </Link>
            </Grid>
            <Grid item md={9}>
              <Grid container spacing={2} className="footer-menu-list">
                {props?.data?.MenuData?.map((item, index) => {
                  return (
                    <Grid
                      item
                      md={item?.grid}
                      xs={12}
                      sm={6}
                      key={index}
                      sx={{ paddingLeft: "0" }}
                    >
                      <Box component={"div"} className="mui-list">
                        {item?.ListTitle && (
                          <Typography variant="h6" className="list-title">
                            {item?.ListTitle}
                          </Typography>
                        )}
                        <List>
                          {item?.SubList?.map((items, index) => {
                            return (
                              <ListItem
                                disablePadding
                                className="sub-menu-list"
                                key={index}
                              >
                                {items?.primaryText && (
                                  <Link
                                    href={items?.Link}
                                    className=""
                                    target={items?.newWindow ? "_blank" : ""}
                                  >
                                    {items?.primaryText && (
                                      <ListItemText
                                        primary={items?.primaryText}
                                        className="aa"
                                      />
                                    )}
                                  </Link>
                                )}
                                {items?.ImgSource && (
                                  <Image
                                    className="menu-list-logo"
                                    width={103}
                                    height={35}
                                    alt={"image"}
                                    src={
                                      items?.ImgSource
                                        ? `${items?.ImgSource}`
                                        : ""
                                    }
                                  />
                                )}
                                {items?.address && (
                                  <Typography variant="p" className="address">
                                    {items?.address}
                                  </Typography>
                                )}
                              </ListItem>
                            );
                          })}
                        </List>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>

          {/* Media section */}
          <Grid container component={"div"} className="copy-right-section">
            <Grid item md={9}>
              {props?.data?.Mediadata?.copryrightdata && (
                <Typography variant="p" className="copy-right-data">
                  {props?.data?.Mediadata?.copryrightdata}
                </Typography>
              )}
            </Grid>
            <Grid item md={3}>
              {props?.data?.Mediadata?.mediaicon && (
                <Grid item md={12} sx={{ px: 0, py: 0 }}>
                  <Box component={"div"} className="media-column">
                    <List sx={{ display: "flex" }}>
                      {props?.data?.Mediadata?.mediaicon?.map((item, index) => {
                        return (
                          <ListItem key={index} className="media-icon-box">
                            <a
                              href={item?.link}
                              className="media-list"
                              aria-label={item?.icon}
                            >
                              {item?.icon === "Facebook" && (
                                <FacebookTwoToneIcon
                                  className="media-icon"
                                  sx={{ color: item?.color ? item?.color : "" }}
                                />
                              )}
                              {item?.icon === "Twitter" && (
                                <TwitterIcon
                                  className="media-icon"
                                  sx={{ color: item?.color ? item?.color : "" }}
                                />
                              )}
                              {item?.icon === "LinkedIn" && (
                                <LinkedInIcon
                                  className="media-icon"
                                  sx={{ color: item?.color ? item?.color : "" }}
                                />
                              )}
                              {item?.icon === "RssFeed" && (
                                <RssFeedIcon
                                  className="media-icon"
                                  sx={{ color: item?.color ? item?.color : "" }}
                                />
                              )}

                              {item?.icon === "Youtube" && (
                                <YouTubeIcon
                                  className="media-icon"
                                  sx={{ color: item?.color ? item?.color : "" }}
                                />
                              )}
                            </a>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
