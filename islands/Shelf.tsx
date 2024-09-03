import type { PropertiesList } from "../loaders/propertiesData.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
// import Icon from "../components/ui/Icon.tsx";

import ShelfFilter from "../components/ui/ShelfFilter.tsx";
import ShelfCard from "../components/ui/ShelfCard.tsx";

export interface Props {
  propertiesList?: PropertiesList;
  defaultOrder?: string;
}

export default function Shelf({ defaultOrder = "default",propertiesList=[]}: Props) {
  console.log(propertiesList)
 
  return (
    <div class="w-full px-4 mt-10 flex flex-col justify-start items-center gap-5 lg:w-4/5 lg:mx-auto">
      {/* <div class="w-full flex">
        <ShelfFilter defaultOrder={defaultOrder} />
      </div> */}
      <div class="w-full flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        
        {
          propertiesList.map(property => {
            return(
              <ShelfCard property={property} />
            )
          })
        }
        
      </div>
    </div>
  );
}