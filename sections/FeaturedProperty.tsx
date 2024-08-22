import FeaturedPropertyCard from "../islands/FeaturedPropertyCard.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface FeaturedPropertyCardProps {
  city?: string;
  image?: ImageWidget;
  location?: string;
}

export interface FeaturedPropertyProps {
  title?: string;
  subDescription?: string;
  properties: FeaturedPropertyCardProps[];
}

const FeaturedProperty = ({ title, subDescription, properties }: FeaturedPropertyProps) => {
  return (
    <div className="text-center py-8 px-20 container mx-auto">
      <div className="mb-11 container mx-auto md:px-60 flex flex-col gap-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-black">{title}</h2>
        <p className="text-lg md:text-xl text-gray-400 font-normal">{subDescription}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {properties.slice(0, 3).map((property, index) => (
          <FeaturedPropertyCard
            key={index}
            {...property}
            className="w-full h-auto"
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-6">
        {properties.slice(3, 6).map((property, index) => (
          <FeaturedPropertyCard
            key={index + 3}
            {...property}
            className={index === 0 ? "md:col-span-2 w-full h-auto" : "w-full h-auto"}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProperty;