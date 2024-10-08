// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $AdvenceSearch from "./islands/AdvenceSearch.tsx";
import * as $FeaturedPropertyCard from "./islands/FeaturedPropertyCard.tsx";
import * as $FormProductPage from "./islands/FormProductPage.tsx";
import * as $MenuMobile from "./islands/MenuMobile.tsx";
import * as $PropertyBuyOptionCard from "./islands/PropertyBuyOptionCard.tsx";
import * as $PropertyLocation from "./islands/PropertyLocation.tsx";
import * as $SliderDotsJS from "./islands/SliderDotsJS.tsx";
import * as $SliderJS from "./islands/SliderJS.tsx";
import * as $ZoomImage from "./islands/ZoomImage.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/AdvenceSearch.tsx": $AdvenceSearch,
    "./islands/FeaturedPropertyCard.tsx": $FeaturedPropertyCard,
    "./islands/FormProductPage.tsx": $FormProductPage,
    "./islands/MenuMobile.tsx": $MenuMobile,
    "./islands/PropertyBuyOptionCard.tsx": $PropertyBuyOptionCard,
    "./islands/PropertyLocation.tsx": $PropertyLocation,
    "./islands/SliderDotsJS.tsx": $SliderDotsJS,
    "./islands/SliderJS.tsx": $SliderJS,
    "./islands/ZoomImage.tsx": $ZoomImage,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
