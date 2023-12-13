import { Layout } from "@/components/Layout";
import { Client } from "../../contentful/contentfulEntry";
import { Fragment } from "react";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import LogoSection from "@/components/LogoSection/LogoSection";
import TwocolumSection from "@/components/TwocolumSection/TwocolumSection";
import CtaSection from "@/components/CtaSection/CtaSection";
import NewsSection from "@/components/NewsSection/NewsSection";
import FaqSection from "@/components/FaqSection/FaqSection";
import InfoSlider from "@/components/InfoSlider/InfoSlider";
import { Seo } from "@/components/Seo/Seo";
import { TabSlider } from "@/components/TabSlider/TabSlider";

export default function page_template({ page_themedata }) {
  return (
    <Fragment>
      <Seo data={page_themedata[0]?.fields} />
      {page_themedata[0]?.fields?.components?.map((componentdata, i) => {
        return (
          <Fragment key={i}>
            {(() => {
              switch (componentdata?.sys?.contentType?.sys?.id) {
                case "heroBanner":
                  return <HeroBanner data={componentdata?.fields} />;
                case "logoSection":
                  return <LogoSection data={componentdata?.fields} />;
                case "tabSection":
                  return <TabSlider data={componentdata?.fields} />;
                case "twoColumnSection":
                  return <TwocolumSection data={componentdata?.fields} />;
                case "ctaSection":
                  return <CtaSection data={componentdata?.fields} />;
                case "newsSection":
                  return <NewsSection data={componentdata?.fields} />;
                case "faqSection":
                  return <FaqSection data={componentdata?.fields} />;
                case "cardSlider":
                  return <InfoSlider data={componentdata?.fields} />;
              }
            })()}
          </Fragment>
        );
      })}
    </Fragment>
  );
}

page_template.getLayout = (page) => <Layout>{page}</Layout>;

export async function getStaticProps() {
  const result = await Client.getEntries({
    content_type: "page",
    "fields.slug": "/",
    include: 10,
  });

  const pagesdata = await result.items;

  return {
    props: {
      page_themedata: pagesdata,
    },
    revalidate: 60, // In seconds, controls how often the page is regenerated
  };
}
