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
import DataTab from "@/components/DataTab/DataTab";

export default function page_template({ page_template, page_themedata }) {
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
                case "asideTab":
                  return <DataTab data={componentdata?.fields} />;
              }
            })()}
          </Fragment>
        );
      })}
    </Fragment>
  );
}
page_template.getLayout = (page) => (
  <Layout Class="dynamic-footer">{page}</Layout>
);

export async function getStaticPaths() {
  // Fetch the list of page slugs from an API or data source
  const result = await Client.getEntries({
    content_type: "page",
  });
  const pagesdata = await result.items;
  let paths = "";
  // Generate paths for each slug
  paths = pagesdata.map((page) => ({ params: { pageurl: page.fields.slug } }));

  return {
    paths,
    fallback: false, // Set to true if you want to handle non-existing paths differently
  };
}

export async function getStaticProps({ params }) {
  // Fetch the page content based on the slug in params
  const pageurl = params.pageurl;
  const result = await Client.getEntries({
    content_type: "page",
    include: 10,
    "fields.slug": pageurl,
  });
  const pagesdata = await result.items;
  let url = "";
  pagesdata?.forEach((page) => {
    url = page?.fields?.slug;
  });
  if (url != pageurl) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }
  return {
    props: {
      page_template: pageurl,
      page_themedata: pagesdata,
    },
  };
}

// export async function getServerSideProps({ res, params }) {
//   const pageurl = params.pageurl;
//   res.setHeader(
//     "Cache-Control",
//     "public, s-maxage=10, stale-while-revalidate=59"
//   );
//   const result = await Client.getEntries({
//     content_type: "page",
//     include: 10,
//     "fields.slug": pageurl,
//   });
//   const pagesdata = await result.items;
//   let url = "";
//   pagesdata?.forEach((page) => {
//     url = page?.fields?.slug;
//   });
//   if (url != pageurl) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/404",
//       },
//     };
//   }
//   return {
//     props: {
//       page_template: pageurl,
//       page_themedata: pagesdata,
//     },
//   };
// }
