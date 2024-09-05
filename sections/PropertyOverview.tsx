import type { PropertiesList } from "../loaders/propertiesData.ts";

export interface Props {
  propertiesList?: PropertiesList;
}

const PropertyOverview = ({ propertiesList = [] }: Props) => {

    const property = propertiesList

    return (
        <div class="container mx-auto px-4">
          <h3 class="text-[42px] font-extrabold text-[#ff3f3f] mb-8">Overview</h3>
          <div class="grid grid-cols-2 gap-4 w-fit">
            <div class="font-medium text-gray-700">Property Type</div>
            <div class="text-gray-900">{property[0].type}</div>
    
            <div class="font-medium text-gray-700">Location</div>
            <div class="text-gray-900">{property[0].location}</div>
    
            <div class="font-medium text-gray-700">Property ID</div>
            <div class="text-gray-900">{property[0].id}</div>
    
            <div class="font-medium text-gray-700">Listing Last Updated</div>
            <div class="text-gray-900">{property[0].postModifiedDate}</div>
          </div>
        </div>
      );
}
 
export default PropertyOverview;