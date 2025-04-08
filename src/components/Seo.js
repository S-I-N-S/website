import React from "react";
import { Helmet } from "react-helmet";

export const Seo = ({ title, description, meta = [] }) => {
  const defaultTitle = "SINS - Secure Interactive Malware Sandbox";
  const defaultDescription = 
    "Safely analyze and understand malware in an isolated environment with our interactive sandbox.";

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    meta: meta,
  };

  return (
    <Helmet
      title={seo.title}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
      ].concat(seo.meta)}
    />
  );
};
