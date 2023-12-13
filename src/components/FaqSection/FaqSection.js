import React, { useState } from "react";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Schemadata from "../SchemaData/SchemaData";

export default function FaqSection(props) {
  const faqDescription = props?.data?.description
    ? documentToHtmlString(props?.data?.description)
    : "";

  const [ExpandId, setExpandId] = useState(0);
  const [load, setLoad] = useState(true);
  let structuredData = [];

  for (var i = 0; i < props?.data?.faqItems.length; i++) {
    structuredData.push({
      "@type": "Question",
      name: props?.data?.faqItems[i]?.fields?.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: props?.data?.faqItems[i]?.fields?.question,
      },
    });
  }

  return (
    <>
      <Schemadata schema={structuredData} />
      {props?.data && (
        <Box
          component="section"
          className={`faq-accordion-section my-8 ${
            props?.Class ? props?.Class : ""
          }`}
        >
          <Container>
            {props?.data?.title && (
              <Typography
                variant="h2"
                className=" heading "
                sx={{
                  color: props?.data?.titleTextColor,
                }}
              >
                {props?.data?.title}
              </Typography>
            )}

            {faqDescription && (
              <Box
                sx={{
                  color: props?.data?.descriptionTextColor
                    ? props?.data?.descriptionTextColor
                    : "",
                }}
                className="description"
                dangerouslySetInnerHTML={{ __html: faqDescription }}
              />
            )}

            <Box component="div">
              <Grid
                sx={{ mt: 0, p: 0 }}
                container
                justifyContent="center"
                mx="auto"
                // spacing={2}
              >
                <Grid item xl={10} md={12} sx={{ p:0 }}>
                  {props?.data?.faqItems?.map((faqlist, index) => {
                    const faqDescription = faqlist?.fields?.answer
                      ? documentToHtmlString(faqlist?.fields?.answer)
                      : "";
                    return (
                      <>
                        <Accordion
                          className="accordion-column"
                          expanded={ExpandId === index}
                          sx={{
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            // borderBottom: "1px solid #000",
                          }}
                          key={index}
                        >
                          {faqlist?.fields?.question && (
                            <AccordionSummary
                              className="faq-item"
                              expandIcon={
                                ExpandId === index ? (
                                  <RemoveIcon className="icon" />
                                ) : (
                                  <AddIcon className="icon" />
                                )
                              }
                              onClick={() =>
                                ExpandId === index
                                  ? setExpandId()
                                  : setExpandId(index)
                              }
                              sx={{ px: 0 }}
                            >
                              <Typography
                                variant="h5"
                                className="accordion-title font-h5"
                              >
                                {faqlist?.fields?.question}
                              </Typography>
                            </AccordionSummary>
                          )}
                          {faqDescription && (
                            <AccordionDetails
                              sx={{ px: 0 }}
                              className="accordion-answer"
                            >
                              <Box
                                dangerouslySetInnerHTML={{
                                  __html: faqDescription,
                                }}
                              />
                            </AccordionDetails>
                          )}
                        </Accordion>
                      </>
                    );
                  })}
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
}
