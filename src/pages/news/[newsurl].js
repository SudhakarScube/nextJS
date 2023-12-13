import React, { Fragment } from "react";
import { Client } from "contentful/contentfulEntry";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo/Seo";
import TemplatetempaleBanner from "@/components/TemplateHeroBanner/TemplateHeroBanner";
import TemplateArticleLayout from "@/components/TemplateArticleLayout/TemplateArticleLayout";
import TemplateContentSection from "@/components/TemplateContentSection/TemplateContentSection";
import TemplateMedia from "@/components/TemplateMedia/TemplateMedia";
import { Box } from "@mui/material";

export default function NewsTemplate({ news_template, news_themedata }) {
  return (
    <Fragment>
      {news_themedata?.map((theme, index) => (
        <Fragment key={index}>
          <Seo data={theme?.fields} />
          <TemplatetempaleBanner data={theme?.fields} />
          <TemplateArticleLayout data={theme?.fields}>
            <TemplateContentSection data={theme?.fields?.idContentSection} />
            <Box
              id="share-this-article"
              sx={{
                paddingTop: "65px",
              }}
            >
              <TemplateMedia
                Title={theme?.fields?.socialIconTitle}
                data={theme?.fields?.socialIcon}
              />
            </Box>
          </TemplateArticleLayout>
        </Fragment>
      ))}
    </Fragment>
  );
}

NewsTemplate.getLayout = (news) => (
  <Layout Class="dynamic-footer">{news}</Layout>
);

export async function getStaticPaths() {
  const result = await Client.getEntries({
    content_type: "news",
    limit: 1000, // Adjust the limit based on your content
  });

  const paths = result.items.map((news) => ({
    params: { newsurl: news.fields.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const newsurl = params.newsurl;
  const result = await Client.getEntries({
    content_type: "news",
    include: 10,
    "fields.slug": newsurl,
  });

  const newssdata = await result.items;

  if (!newssdata || newssdata.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      news_template: newsurl,
      news_themedata: newssdata,
    },
  };
}
