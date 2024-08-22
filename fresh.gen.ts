// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $AdvenceSearch from "./islands/AdvenceSearch.tsx";
import * as $FeaturedPropertyCard from "./islands/FeaturedPropertyCard.tsx";
import * as $MenuMobile from "./islands/MenuMobile.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/AdvenceSearch.tsx": $AdvenceSearch,
    "./islands/FeaturedPropertyCard.tsx": $FeaturedPropertyCard,
    "./islands/MenuMobile.tsx": $MenuMobile,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
