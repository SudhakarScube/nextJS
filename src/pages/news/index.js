import { Layout } from "@/components/Layout";
import { Client } from "../../../contentful/contentfulEntry";
import { Fragment } from "react";
import { Seo } from "@/components/Seo/Seo";
import ContentSection from "@/components/ContentSection/ContentSection";
import NewsOverview from "@/components/NewsOverview/NewsOverview";


export default function PageTemplate({ page_themedata, news_data }) {
  return (
    <Fragment>
      {page_themedata?.map((theme, index) => (
        <Fragment key={index}>
          <Seo data={theme?.fields} />
          <ContentSection data={theme?.fields?.components?.fields} />
          <NewsOverview data={news_data} />
        </Fragment>
      ))}
    </Fragment>
  );
}

PageTemplate.getLayout = (page) => (
  <Layout Class="dynamic-footer">{page}</Layout>
);

export async function getStaticProps() {
  const result = await Client.getEntries({
    content_type: "postType",
    include: 10,
  });
  const pagesdata = await result.items;

  const news = await Client.getEntries({
    content_type: "news",
    include: 10,
  });
  const newsdata = await news.items;

  return {
    props: {
      page_themedata: pagesdata,
      news_data: newsdata,
    }
  };
}

