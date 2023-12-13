import { Client } from "contentful/contentfulEntry";

function generateSiteMap(pageData, featureData) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pageData
      ?.map((id) => {
        return `
       <url>
           <loc>${`https://orbitfin-next-js.vercel.app/`}</loc>
           <lastmod>${id?.sys?.updatedAt}</lastmod>
       </url>
     `;
      })
        .join("")}
        ${featureData
          ?.map(id => {
            return `
         <url>
             <loc>${`https://orbitfin-next-js.vercel.app/${id?.fields?.slug}`}</loc>
             <lastmod>${id?.sys?.updatedAt}</lastmod>
         </url>
       `;
          })
      .join("")}
        </urlset>
    `;
}

function SitemapDynamic() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const page = await Client.getEntries({ content_type: "page" });

  const pageData = await page.items;
  const sitemap = generateSiteMap(pageData);
  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SitemapDynamic;
