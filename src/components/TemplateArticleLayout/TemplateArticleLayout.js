import { Box, Container, Grid } from "@mui/material";
import React from "react";
import TemplateSidebar from "../TemplateSidebar/TemplateSidebar";

export default function TemplateArticleLayout(props) {
  return (
    <Box
      component={"section"}
      className="Template-layout"
      sx={{
        paddingTop: { md: "60px" },
        paddingBottom: { md: "40px" },
      }}
    >
      <Container>
        <Box component={"div"}>
          <Grid container>
            <Grid item md={3} sm={12}>
              <TemplateSidebar data={props?.data?.leftSideBar} />
            </Grid>
            <Grid
              item
              md={8}
              sm={12}
              className="content-side"
            >
              {props?.children}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
