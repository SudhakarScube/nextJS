import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import RedditIcon from "@mui/icons-material/Reddit";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";

export default function TemplateMedia(props) {
  return (
    <Box component={"section"} className="template-media-section">
      {props?.Title && (
        <Box component={"div"} sx={{ display: "flex" }}>
          {props?.Title && (
            <Typography
              variant="h4"
              className=" heading "
              sx={{
                color: props?.data?.titleTextColor,
              }}
            >
              {props?.Title}
            </Typography>
          )}
          <Box
            component={"div"}
            sx={{
              paddingLeft: "9px",
            }}
          >
            <Image
              src="/Article-share-arrow.svg"
              alt="arrow-image"
              width={40}
              height={40}
              className="arrow"
            />
          </Box>
        </Box>
      )}
      <Box component={"div"} className="media-icon-box">
        <List sx={{ display: "flex" }}>
          <ListItem className="social-icons">
            {props?.data?.map((item, index) => {
              return (
                <>
                  {item?.fields?.facebookLink && (
                    <Link
                      key={index}
                      href={
                        item?.fields?.facebookLink
                          ? item?.fields?.facebookLink
                          : ""
                      }
                    >
                      {item?.fields?.socialMedia?.map((items, index) => {
                        return (
                          <Image
                            src={items?.fields?.file?.url}
                            alt={items?.fields?.file?.fileName}
                            width={50}
                            height={50}
                            unoptimized={true}
                            key={index}
                          />
                        );
                      })}
                    </Link>
                  )}
                  {item?.fields?.linkedinLink && (
                    <Link
                      key={index}
                      href={
                        item?.fields?.linkedinLink
                          ? item?.fields?.linkedinLink
                          : ""
                      }
                    >
                      {item?.fields?.socialMedia?.map((items, index) => {
                        return (
                          <Image
                            src={items?.fields?.file?.url}
                            alt={items?.fields?.file?.fileName}
                            width={50}
                            height={50}
                            unoptimized={true}
                            key={index}
                          />
                        );
                      })}
                    </Link>
                  )}
                  {item?.fields?.twitterLink && (
                    <Link
                      key={index}
                      href={
                        item?.fields?.twitterLink
                          ? item?.fields?.twitterLink
                          : ""
                      }
                    >
                      {item?.fields?.socialMedia?.map((items, index) => {
                        return (
                          <Image
                            src={items?.fields?.file?.url}
                            alt={items?.fields?.file?.fileName}
                            width={50}
                            height={50}
                            unoptimized={true}
                            key={index}
                          />
                        );
                      })}
                    </Link>
                  )}
                  {item?.fields?.whatsappLink && (
                    <Link
                      key={index}
                      href={
                        item?.fields?.whatsappLink
                          ? item?.fields?.whatsappLink
                          : ""
                      }
                    >
                      {item?.fields?.socialMedia?.map((items, index) => {
                        return (
                          <Image
                            src={items?.fields?.file?.url}
                            alt={items?.fields?.file?.fileName}
                            width={50}
                            height={50}
                            unoptimized={true}
                            key={index}
                          />
                        );
                      })}
                    </Link>
                  )}
                  {item?.fields?.redditLink && (
                    <Link
                      key={index}
                      href={
                        item?.fields?.redditLink ? item?.fields?.redditLink : ""
                      }
                    >
                      {item?.fields?.socialMedia?.map((items, index) => {
                        return (
                          <Image
                            src={items?.fields?.file?.url}
                            alt={items?.fields?.file?.fileName}
                            width={50}
                            height={50}
                            unoptimized={true}
                            key={index}
                          />
                        );
                      })}
                    </Link>
                  )}
                  {item?.fields?.tumblr && (
                    <Link
                      key={index}
                      href={item?.fields?.tumblr ? item?.fields?.tumblr : ""}
                    >
                      {item?.fields?.socialMedia?.map((items, index) => {
                        return (
                          <Image
                            src={items?.fields?.file?.url}
                            alt={items?.fields?.file?.fileName}
                            width={50}
                            height={50}
                            unoptimized={true}
                            key={index}
                          />
                        );
                      })}
                    </Link>
                  )}
                  {item?.fields?.pinterestLink && (
                    <Link
                      key={index}
                      href={
                        item?.fields?.pinterestLink
                          ? item?.fields?.pinterestLink
                          : ""
                      }
                    >
                      {item?.fields?.socialMedia?.map((items, index) => {
                        return (
                          <Image
                            src={items?.fields?.file?.url}
                            alt={items?.fields?.file?.fileName}
                            width={50}
                            height={50}
                            unoptimized={true}
                            key={index}
                          />
                        );
                      })}
                    </Link>
                  )}
                  {item?.fields?.emailLink && (
                    <Link
                      key={index}
                      href={
                        item?.fields?.emailLink ? item?.fields?.emailLink : ""
                      }
                    >
                      {item?.fields?.socialMedia?.map((items, index) => {
                        return (
                          <Image
                            src={items?.fields?.file?.url}
                            alt={items?.fields?.file?.fileName}
                            width={50}
                            height={50}
                            unoptimized={true}
                            key={index}
                          />
                        );
                      })}
                    </Link>
                  )}
                  {item?.fields?.rssLink && (
                    <Link
                      key={index}
                      href={item?.fields?.rssLink ? item?.fields?.rssLink : ""}
                    >
                      {item?.fields?.socialMedia?.map((items, index) => {
                        return (
                          <Image
                            src={items?.fields?.file?.url}
                            alt={items?.fields?.file?.fileName}
                            width={50}
                            height={50}
                            unoptimized={true}
                            key={index}
                          />
                        );
                      })}
                    </Link>
                  )}
                  {item?.fields?.youtubeLink && (
                    <Link
                      key={index}
                      href={
                        item?.fields?.youtubeLink
                          ? item?.fields?.youtubeLink
                          : ""
                      }
                    >
                      {item?.fields?.socialMedia?.map((items, index) => {
                        return (
                          <Image
                            src={items?.fields?.file?.url}
                            alt={items?.fields?.file?.fileName}
                            width={50}
                            height={50}
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
        </List>
      </Box>
    </Box>
  );
}
