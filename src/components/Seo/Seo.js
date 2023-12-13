import * as React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Head from "next/head";

export const Seo = ({ location, data }) => {
  const { asPath } = useRouter();
  location = asPath;
  let socialCard = data?.socialCard?.fields?.file?.url;
  let logoUrl = process.env.NEXT_PUBLIC_FAV_ICON;
  let socialCardimage = socialCard ? socialCard : logoUrl;
  const metaDescription =
    data?.metaDescription ||
    "All you need to source, process and transform unstructured data into predictive indicators.Alternative datasets of global regulatory filings, corporate websites, China and digital assets. Bespoke data";
  const keywords = data?.metaKeyword ? data?.metaKeyword : "Orbit";
  const metaTitle = data?.metaTitle ? data?.metaTitle : "Orbit";
  const canonicalUrl =
    process.env.NEXT_PUBLIC_CANONICALURL + `${location ? location : ""}`;
  const sem = data?.sem ? data?.sem : "";
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="author" content="@scubeco" data-react-helmet="true" />
        <meta
          name="description"
          content={metaDescription}
          data-react-helmet="true"
        />
        <meta name="keywords" content={keywords} data-react-helmet="true" />
        <meta property="og:type" content="website" data-react-helmet="true" />
        <meta
          property="og:site_name"
          content="Orbit"
          data-react-helmet="true"
        />
        <meta
          property="og:title"
          content={metaTitle}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={metaDescription}
          data-react-helmet="true"
        />
        <meta
          property="og:url"
          content={canonicalUrl}
          data-react-helmet="true"
        />
        <meta
          property="og:image"
          content={socialCardimage}
          data-react-helmet="true"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="twitter:card"
          content="summary_large_image"
          data-react-helmet="true"
        />
        <meta
          name="twitter:creator"
          content="@scubeco"
          data-react-helmet="true"
        />
        <meta name="twitter:site" content="@scubeco" data-react-helmet="true" />
        <meta
          name="twitter:title"
          content={metaTitle}
          data-react-helmet="true"
        />
        <meta
          name="twitter:description"
          content={metaDescription}
          data-react-helmet="true"
        />
        <meta
          property="twitter:image"
          content={socialCardimage}
          data-react-helmet="true"
        />
        <link rel="canonical" href={canonicalUrl} />
        {sem === true && <meta name="robots" content="noindex,nofollow" />}
      </Head>
    </>
  );
};
Seo.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
  keywords: "",
};

Seo.propTypes = {
  description: PropTypes.string.isRequired,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.string,
};
