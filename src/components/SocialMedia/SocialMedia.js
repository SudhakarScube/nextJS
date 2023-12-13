import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Box, Container, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import Image from "next/image";

export default function SocialMedia(props) {
  const mediaDescription = props?.data?.fields?.description
    ? documentToHtmlString(props?.data?.fields?.description)
    : "";
  return (
    <Box
      component="section"
      className={`media-section ${props?.Class ? props?.Class : ""} `}
    >
      <Box component={"div"} className="media-heading">
        {props?.data?.fields?.title && (
          <Typography
            variant="h4"
            className=" heading "
            sx={{
              color: props?.data?.fields?.titleTextColor,
            }}
          >
            {props?.data?.fields?.title}
          </Typography>
        )}

        {mediaDescription && (
          <Box
            sx={{
              color: props?.data?.fields?.descriptionTextColor
                ? props?.data?.fields?.descriptionTextColor
                : "",
            }}
            className="description"
            dangerouslySetInnerHTML={{ __html: mediaDescription }}
          />
        )}
      </Box>
      <Box component={"div"}>
        <List>
          {props?.data?.sys?.contentType?.sys?.id === "socialMedia" && (
            <ListItem>
              {props?.data?.fields?.facebookLink && (
                <Link
                  href={
                    props?.data?.fields?.facebookLink
                      ? props?.data?.fields?.facebookLink
                      : ""
                  }
                >
                  <FacebookTwoToneIcon
                    className="media-icon"
                    sx={{
                      color: "#0bacf0",
                    }}
                  />
                </Link>
              )}
              {props?.data?.fields?.twitterLink && (
                <Link
                  href={
                    props?.data?.fields?.twitterLink
                      ? props?.data?.fields?.twitterLink
                      : ""
                  }
                >
                  <TwitterIcon
                    className="media-icon"
                    sx={{
                      color: "#0bacf0",
                    }}
                  />
                </Link>
              )}
              {props?.data?.fields?.linkedinLink && (
                <Link
                  href={
                    props?.data?.fields?.linkedinLink
                      ? props?.data?.fields?.linkedinLink
                      : ""
                  }
                >
                  <LinkedInIcon
                    className="media-icon"
                    sx={{
                      color: "#0bacf0",
                    }}
                  />
                </Link>
              )}
              {props?.data?.fields?.rssLink && (
                <Link
                  href={
                    props?.data?.fields?.rssLink
                      ? props?.data?.fields?.rssLink
                      : ""
                  }
                >
                  <RssFeedIcon
                    className="media-icon"
                    sx={{
                      color: "#ffffff",
                      backgroundColor: "#ff9800",
                      p: 1,
                    }}
                  />
                </Link>
              )}
              {props?.data?.fields?.youtubeLink && (
                <Link
                  href={
                    props?.data?.fields?.youtubeLink
                      ? props?.data?.fields?.youtubeLink
                      : ""
                  }
                >
                  <YouTubeIcon
                    className="media-icon"
                    sx={{
                      color: "#ff0000",
                    }}
                  />
                </Link>
              )}
            </ListItem>
          )}
          {props?.data?.socialIcons && (
            <ListItem className="social-icons">
              {props?.data?.socialIcons?.map((item, index) => {
                return (
                  <>
                    {item?.fields?.baidu && (
                      <Link
                        key={index}
                        href={item?.fields?.baidu ? item?.fields?.baidu : ""}
                      >
                        {item?.fields?.socialMedia?.map((items, index) => {
                          return (
                            <Image
                              src={items?.fields?.file?.url}
                              alt={items?.fields?.file?.fileName}
                              width={100}
                              height={100}
                              unoptimized={true}
                              key={index}
                            />
                          );
                        })}
                      </Link>
                    )}
                    {item?.fields?.wechat && (
                      <Link
                        key={index}
                        href={item?.fields?.wechat ? item?.fields?.wechat : ""}
                      >
                        {item?.fields?.socialMedia?.map((items, index) => {
                          return (
                            <Image
                              src={items?.fields?.file?.url}
                              alt={items?.fields?.file?.fileName}
                              width={100}
                              height={100}
                              unoptimized={true}
                              key={index}
                            />
                          );
                        })}
                      </Link>
                    )}
                    {item?.fields?.tikTok && (
                      <Link
                        key={index}
                        href={item?.fields?.tikTok ? item?.fields?.tikTok : ""}
                      >
                        {item?.fields?.socialMedia?.map((items, index) => {
                          return (
                            <Image
                              src={items?.fields?.file?.url}
                              alt={items?.fields?.file?.fileName}
                              width={100}
                              height={100}
                              unoptimized={true}
                              key={index}
                            />
                          );
                        })}
                      </Link>
                    )}
                    {item?.fields?.sinaWeibo && (
                      <Link
                        key={index}
                        href={
                          item?.fields?.sinaWeibo ? item?.fields?.sinaWeibo : ""
                        }
                      >
                        {item?.fields?.socialMedia?.map((items, index) => {
                          return (
                            <Image
                              src={items?.fields?.file?.url}
                              alt={items?.fields?.file?.fileName}
                              width={100}
                              height={100}
                              unoptimized={true}
                              key={index}
                            />
                          );
                        })}
                      </Link>
                    )}
                  </>
                );
              })}
            </ListItem>
          )}
        </List>
      </Box>
    </Box>
  );
}
