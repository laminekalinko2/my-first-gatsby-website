import * as React from "react";
import useSiteMetadata from "./useSeo";

const Seo = ({ title }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <title>
      {title} | {siteMetadata.title}
    </title>
  );
};

export default Seo;
