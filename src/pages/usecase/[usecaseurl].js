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

export default function UsecaseTemplate({ themeData }) {
  return (
    <Fragment>
      <Seo data={themeData?.fields} />

      {themeData?.fields?.components?.map((componentData, i) => (
        <Fragment key={i}>
          {(() => {
            switch (componentData?.sys?.contentType?.sys?.id) {
              case "heroBanner":
                return <HeroBanner data={componentData?.fields} />;
              case "logoSection":
                return <LogoSection data={componentData?.fields} />;
              case "twoColumnSection":
                return <TwocolumSection data={componentData?.fields} />;
              case "ctaSection":
                return <CtaSection data={componentData?.fields} />;
              case "cardSlider":
                return <InfoSlider data={componentData?.fields} />;
              case "faqSection":
                return (
                  <FaqSection
                    data={componentData?.fields}
                    Class="dynamic-faq-section"
                  />
                );
              case "quotesSlider":
                return <QuoteSlider data={componentData?.fields} />;
              case "twoColumnContent":
                return <TwocolumnContent data={componentData?.fields} />;
              case "table":
                return <TableSection data={componentData?.fields} />;
              case "form":
                return <FormSection data={componentData?.fields} />;
              case "contentSection":
                return <ContentSection data={componentData?.fields} />;
              default:
                return null;
            }
          })()}
        </Fragment>
      ))}
    </Fragment>
  );
}

UsecaseTemplate.getLayout = (usecase) => (
  <Layout Class="dynamic-footer">{usecase}</Layout>
);

export async function getStaticPaths() {
  const result = await Client.getEntries({
    content_type: "useCase",
  });

  const paths = result.items.map((usecase) => ({
    params: { usecaseurl: usecase.fields.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { usecaseurl } = params;

  const result = await Client.getEntries({
    content_type: "useCase",
    include: 10,
    "fields.slug": usecaseurl,
  });

  const usecaseData = result.items[0];

  return {
    props: {
      themeData: usecaseData,
    },
  };
}
