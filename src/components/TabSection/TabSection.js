import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import TableSection from "../TableSection/TableSection";

export default function TabSection(props) {
  const [value, setValue] = useState(0);
  return (
    <Box
      component={"section"}
      className={`tab-section ${props?.Class ? props?.Class : ""}`}
    >
      <Container>
        <Box component={"div"} className="tab-heading">
          {props?.data?.fields?.tableDataItems?.map((item, index) => {
            return (
              <>
                <Tabs
                  orientation="herizondle"
                  value={value}
                  aria-label="Vertical tabs example"
                  key={index}
                  className="tab-button-column"
                >
                  <Tab
                    label={item?.fields?.title}
                    onClick={() => {
                      setValue(index);
                    }}
                    className={value === index ? "selected button" : "button"}
                  />
                </Tabs>
              </>
            );
          })}
        </Box>
        {props?.data?.fields?.tableDataItems?.map((item, index) => {
          const Description = item?.fields?.normalData?.fields?.description
            ? documentToHtmlString(
                item?.fields?.normalData?.fields?.description
              )
            : "";
          const tabDescription = item?.fields?.tableData?.fields?.description
            ? documentToHtmlString(item?.fields?.tableData?.fields?.description)
            : "";
          return (
            <Box component={"div"} key={index}>
              {value === index && (
                <Typography
                  component="div"
                  role="tabpanel"
                  id={`vertical-tabpanel-${0}`}
                  aria-labelledby={`vertical-tab-${0}`}
                >
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      marginTop: "21px",
                    }}
                    key={index}
                    className="tab-grid"
                  >
                    <Grid item md={6} className="right-side">
                      {/* {item?.fields?.tableData?.fields?.title && (
                        <Typography
                          variant="h5"
                          className=" heading "
                          sx={{
                            color: props?.data?.titleTextColor,
                          }}
                        >
                          {item?.fields?.tableData?.fields?.title}
                        </Typography>
                      )}

                      {tabDescription && (
                        <Box
                          sx={{
                            color: props?.data?.descriptionTextColor
                              ? props?.data?.descriptionTextColor
                              : "",
                          }}
                          className="description"
                          dangerouslySetInnerHTML={{ __html: tabDescription }}
                        />
                      )} */}

                      <TableSection
                        data={item}
                       Class="deatil-tab-table"
                      />
                    </Grid>
                    <Grid item md={5} className="left-side">
                      {item?.fields?.normalData?.fields?.title && (
                        <Typography
                          variant="h5"
                          className=" heading "
                          sx={{
                            color: props?.data?.titleTextColor,
                          }}
                        >
                          {item?.fields?.normalData?.fields?.title}
                        </Typography>
                      )}
                      {Description && (
                        <Box
                          sx={{
                            color: props?.data?.descriptionTextColor
                              ? props?.data?.descriptionTextColor
                              : "",
                          }}
                          className="description"
                          dangerouslySetInnerHTML={{
                            __html: Description,
                          }}
                        />
                      )}
                    </Grid>
                  </Grid>
                </Typography>
              )}
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}
