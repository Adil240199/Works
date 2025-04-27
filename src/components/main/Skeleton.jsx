import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={1440}
    height={340}
    viewBox="0 0 1440 340"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="201" y="12" rx="2" ry="2" width="179" height="22" />
    <rect x="104" y="52" rx="2" ry="2" width="357" height="21" />
    <rect x="89" y="107" rx="2" ry="2" width="400" height="10" />
    <rect x="191" y="141" rx="7" ry="7" width="203" height="21" />
  </ContentLoader>
);

export default Skeleton;
