import React, { Fragment } from "react";
import { Client } from "contentful/contentfulEntry";
import { Layout } from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import LogoSection from "@/components/LogoSection/LogoSection";
import TwocolumSection from "@/components/TwocolumSection/TwocolumSection";
import CtaSection from "@/components/CtaSection/CtaSection";
import InfoSlider from "@/components/InfoSlider/InfoSlider";
import FaqSection from "@/components/FaqSection/FaqSection";
import { Seo } from "@/components/Seo/Seo";
import QuoteSlider from "@/components/QuoteSlider/QuoteSlider";
import TwocolumnContent from "@/components/TwocolumnContent/TwocolumnContent";
import TableSection from "@/components/TableSection/TableSection";
import FormSection from "@/components/FormSection/FormSection";
import ContentSection from "@/components/ContentSection/ContentSection";

export default function usecase_template({ usecase_themedata }) {
  return (
    <Fragment>
      <Seo data={usecase_themedata[0]?.fields} />
      {usecase_themedata[0]?.fields?.components?.map((componentdata, i) => {
        return (
          <Fragment key={i}>
            {(() => {
              switch (componentdata?.sys?.contentType?.sys?.id) {
                case "heroBanner":
                  return <HeroBanner data={componentdata?.fields} />;
                case "logoSection":
                  return <LogoSection data={componentdata?.fields} />;
                case "twoColumnSection":
                  return <TwocolumSection data={componentdata?.fields} />;
                case "ctaSection":
                  return <CtaSection data={componentdata?.fields} />;
                case "cardSlider":
                  return <InfoSlider data={componentdata?.fields} />;
                case "faqSection":
                  return (
                    <FaqSection
                      data={componentdata?.fields}
                      Class="dynamic-faq-section"
                    />
                  );
                case "quotesSlider":
                  return <QuoteSlider data={componentdata?.fields} />;
                case "twoColumnContent":
                  return <TwocolumnContent data={componentdata?.fields} />;
                case "table":
                  return <TableSection data={componentdata?.fields} />;
                case "form":
                  return <FormSection data={componentdata?.fields} />;
                case "contentSection":
                  return <ContentSection data={componentdata?.fields} />;
              }
            })()}
          </Fragment>
        );
      })}
    </Fragment>
  );
}
usecase_template.getLayout = (usecase) => (
  <Layout Class="dynamic-footer">{usecase}</Layout>
);

export async function getStaticProps() {
  const result = await Client.getEntries({
    content_type: "useCase",
    "fields.slug": "usecase",
    include: 10,
  });

  const usecasedata = await result.items;

  return {
    props: {
      usecase_themedata: usecasedata,
    }
    };
}
