import { Box, Container } from "@mui/material";
import React from "react";
import HeadingSection from "../HeadingSection/HeadingSection";

export default function ContentSection(props) {
  return (
    <Box
      component={"section"}
      className={`content-section ${props?.Class ? props?.Class : ""}`}
    >
      <Container>
        <Box component={"div"}>
          <HeadingSection
            Title={props?.data?.title}
            Description={props?.data?.description}
            TextAlign={props?.data?.textAlignment}

          />
        </Box>
      </Container>
    </Box>
  );
}
