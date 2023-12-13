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

export default function SolutionsTemplate({ solutions_template, solutions_themedata }) {
  return (
        <Fragment>
          {solutions_themedata?.map((theme, index) => {
            if (theme?.fields?.slug === solutions_template) {
              return (
                <Fragment key={index}>
                  <Seo data={theme?.fields} />
    
                  {theme?.fields?.components?.map((componentdata, i) => {
                    return (
                      <Fragment key={i}>
                        {(() => {
                          switch (componentdata?.sys?.contentType?.sys?.id) {
                            case "heroBanner":
                              return <HeroBanner data={componentdata?.fields} />;
                            case "logoSection":
                              return <LogoSection data={componentdata?.fields} />;
                            case "twoColumnSection":
                              return (
                                <TwocolumSection data={componentdata?.fields} />
                              );
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
                              return (
                                <TwocolumnContent data={componentdata?.fields} />
                              );
                            case "table":
                              return <TableSection data={componentdata?.fields} />;
                            case "form":
                              return <FormSection data={componentdata?.fields} />;
                            case "contentSection":
                              return (
                                <ContentSection data={componentdata?.fields} />
                              );
                          }
                        })()}
                      </Fragment>
                    );
                  })}
                </Fragment>
              );
            }
          })}
        </Fragment>
      );

}

SolutionsTemplate.getLayout = (solutions) => (
  <Layout Class="dynamic-footer">{solutions}</Layout>
);

export async function getStaticPaths() {
  const result = await Client.getEntries({
    content_type: "solutions",
    limit: 1000, // Adjust the limit based on your content
  });

  const paths = result.items.map((solutions) => ({
    params: { solutionsurl: solutions.fields.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const solutionsurl = params.solutionsurl;
  const result = await Client.getEntries({
    content_type: "solutions",
    include: 10,
    "fields.slug": solutionsurl,
  });
  
  const solutionsdata = await result.items;

  if (!solutionsdata || solutionsdata.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      solutions_template: solutionsurl,
      solutions_themedata: solutionsdata,
    },
  };
}
