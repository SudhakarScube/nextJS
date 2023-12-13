import React from "react";
import Script from "next/script";

export default function Schemadata({ schema }) {
  const Faqschema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "/faq",
    mainEntity: schema,
  };
  return (
    <>
      <Script
        key="structured-data"
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Faqschema) }}
      />
    </>
  );
}
