import React, { Fragment } from "react";
import { Client } from "contentful/contentfulEntry";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo/Seo";
import TemplatetempaleBanner from "@/components/TemplateHeroBanner/TemplateHeroBanner";
import TabSection from "@/components/TabSection/TabSection";


export default function DataTemplate({ data_template, data_themedata }) {
  return (
    <Fragment>
      {data_themedata?.map((theme, index) => {
        if (theme?.fields?.slug === data_template) {
          return (
            <Fragment key={index}>
              <Seo data={theme?.fields} />
              <TemplatetempaleBanner data={theme?.fields} />
              <TabSection data={theme?.fields?.tableTabSection} />
            </Fragment>
          );
        }
      })}
    </Fragment>
  );
}

DataTemplate.getLayout = (data) => (
  <Layout Class="dynamic-footer">{data}</Layout>
);

export async function getStaticPaths() {
  const result = await Client.getEntries({
    content_type: "dataDetail",
    limit: 1000, // Adjust the limit based on your content
  });

  const paths = result.items.map((data) => ({
    params: { dataurl: data.fields.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const dataurl = params.dataurl;
  const result = await Client.getEntries({
    content_type: "dataDetail",
    include: 10,
    "fields.slug": dataurl,
  });

  const datasdata = await result.items;

  if (!datasdata || datasdata.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data_template: dataurl,
      data_themedata: datasdata,
    },
  };
}
