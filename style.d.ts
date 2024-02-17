declare module "*.scss" {
  const css: { [key: string]: string };
  export default css;
}
declare module "*.sass" {
  const css: { [key: string]: string };
  export default css;
}
declare module "react-markup";
declare module "*.webp";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
// declare module "*.svg" {
//   import React from "react";
//   const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
//   export default SVG;
// }
