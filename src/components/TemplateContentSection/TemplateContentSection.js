import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { Fragment } from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function TemplateContentSection(props) {
  return (
    <Box
      component={"section"}
      className={`template-content-section ${props?.Class ? props?.Class : ""}`}
    >
      <Box component="div" className="theme-content-heading">
        {props?.data?.map((items, index) => {
          const options = {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (items) => {
                // items here is root nodes.data
                return (
                  <>
                    {items?.data?.target?.fields?.file?.contentType ===
                    "image/jpeg" ? (
                      <Image
                        className="content-image"
                        src={`https:${items?.data?.target?.fields?.file?.url}`}
                        alt={items?.data?.target?.fields?.title}
                        width={900}
                        height={900}
                      />
                    ) : items?.data?.target?.fields?.file?.contentType ===
                      "image/png" ? (
                      <Image
                        className="content-image"
                        src={`https:${items?.data?.target?.fields?.file?.url}`}
                        alt={items?.data?.target?.fields?.title}
                        width={900}
                        height={900}
                      />
                    ) : items?.data?.target?.fields?.file?.contentType ===
                      "image/webp" ? (
                      <Image
                        className="content-image"
                        src={`https:${items?.data?.target?.fields?.file?.url}`}
                        alt={items?.data?.target?.fields?.title}
                        width={900}
                        height={900}
                      />
                    ) : (
                      ""
                    )}
                  </>
                );
              },
            },
          };
          return (
            <Fragment key={index}>
              <Box
                key={index}
                className="description"
                style={{
                  marginBottom: "16px",
                }}
                id={items?.fields?.fieldId}
              >
                {items?.fields?.title && (
                  <Typography variant="h3" className=" heading ">
                    {items?.fields?.title}
                  </Typography>
                )}

                {documentToReactComponents(items?.fields?.description, options)}
              </Box>
            </Fragment>
          );
        })}
      </Box>
      {/* <Box> <ArrowDropUpIcon/> </Box> */}
    </Box>
  );
}
