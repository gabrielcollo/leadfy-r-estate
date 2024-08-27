import type { ImageWidget } from "apps/admin/widgets.ts";
// import Icon from "../components/ui/Icon.tsx";

import ShelfFilter from "../components/ui/ShelfFilter.tsx";
import ShelfCard from "../components/ui/ShelfCard.tsx";

export interface Props {
  defaultOrder?: string;
  property: {
    image: {
      src: ImageWidget;
      alt: string;
    };
    address: string;
    price: string;
    cars: string;
    bathrooms: string;
    area: string;
  };
}

export default function Shelf({ defaultOrder = "default", property }: Props) {
  return (
    <div class="w-full px-4 mt-10 flex flex-col justify-start items-center gap-5 lg:w-4/5 lg:mx-auto">
      <div class="w-full flex">
        <ShelfFilter defaultOrder={defaultOrder} />
      </div>
      <div class="w-full flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        <ShelfCard property={property}/>
        <ShelfCard property={property}/>
        <ShelfCard property={property}/>
        <ShelfCard property={property}/>
        <ShelfCard property={property}/>
        <ShelfCard property={property}/>
      </div>
    </div>
  );
}
