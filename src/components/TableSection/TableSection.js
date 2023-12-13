import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import HeadingSection from "../HeadingSection/HeadingSection";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import DoneIcon from "@mui/icons-material/Done";

function createData(
  description = string,
  Competition = string,
  OrbitInsight = number
) {
  return { description, Competition, OrbitInsight };
}

export default function TableSection(props) {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: props?.data?.backgroundImage
          ? `url(${props?.data?.backgroundImage?.fields?.file?.url})`
          : "",
        backgroundColor: props?.data?.backgroundColor
          ? props?.data?.backgroundColor
          : "",
      }}
      className={`table ${props?.Class ? props?.Class : ""}`}
    >
      <Box component={"div"} className="table-section">
        <Container>
          {props?.data?.title && (
            <Box component={"div"}>
              <HeadingSection
                Title={props?.data?.title}
                Description={props?.data?.description}
                Class="compare-table-heading"
              />
            </Box>
          )}
          {props?.data?.fields?.tableTitle && (
            <Box component={"div"}>
              <Typography
                variant="h2"
                className=" heading h2 "
                sx={{
                  color: props?.data?.titleTextColor,
                }}
                dangerouslySetInnerHTML={{
                  __html: props?.data?.fields?.tableTitle,
                }}
              />
            </Box>
          )}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              {props?.data?.tableItems && (
                <TableHead>
                  <TableRow className="table-head">
                    {props?.data?.tableItems?.map((item, index) => {
                      return (
                        <Fragment key={index}>
                          {item?.fields?.headerData?.map((items, index) => {
                            return (
                              <TableCell className="table-heading" key={index}>
                                {items?.fields?.title}
                              </TableCell>
                            );
                          })}
                        </Fragment>
                      );
                    })}
                  </TableRow>
                </TableHead>
              )}
              {props?.data?.tableItems && (
                <TableBody>
                  {props?.data?.tableItems?.map((item, rowindex) => {
                    return (
                      <Fragment key={rowindex}>
                        {item?.fields?.featureData?.map((row, index) => {
                          return (
                            <Fragment key={index}>
                              <TableRow
                                key={item?.fields?.feature}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                {row?.fields?.feature && (
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    className="row-data"
                                    dangerouslySetInnerHTML={{
                                      __html: row?.fields?.feature,
                                    }}
                                  />
                                )}
                                {/* competition start */}
                                {row?.fields?.specifications?.map(
                                  (item, index) => {
                                    return (
                                      <Fragment key={index}>
                                        {item?.fields?.specification ===
                                          "Competition" ||
                                        item?.fields?.specification ===
                                          "Orbit Insight" ||
                                        item?.fields?.specification ===
                                          "Orbit China" ||
                                        item?.fields?.specification ===
                                          "OrbitFin" ? (
                                          <TableCell
                                            align="center"
                                            className="row-data"
                                          >
                                            {item?.fields?.options ===
                                            "True" ? (
                                              <DoneIcon className="true-icon" />
                                            ) : (
                                              <CloseTwoToneIcon className="false-icon" />
                                            )}
                                          </TableCell>
                                        ) : (
                                          ""
                                        )}
                                      </Fragment>
                                    );
                                  }
                                )}
                              </TableRow>
                            </Fragment>
                          );
                        })}
                      </Fragment>
                    );
                  })}
                </TableBody>
              )}
              {props?.data?.fields?.rowData && (
                <TableBody>
                  {props?.data?.fields?.rowData?.map((item, rowindex) => {
                    return (
                      <Fragment key={rowindex}>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": {
                              border: 0,
                            },
                          }}
                        >
                          {item?.fields?.rowData?.map((row, index) => {
                            return (
                              <Fragment key={index}>
                                {row?.fields?.tableRowData && (
                                  <TableCell
                                    key={item?.fields?.tableRowData}
                                    component="th"
                                    scope="row"
                                    className="row-data"
                                    dangerouslySetInnerHTML={{
                                      __html: row?.fields?.tableRowData,
                                    }}
                                  />
                                )}
                              </Fragment>
                            );
                          })}
                        </TableRow>
                      </Fragment>
                    );
                  })}
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </Box>
  );
}
