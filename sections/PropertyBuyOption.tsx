import PropertyBuyOptionCard from "../islands/PropertyBuyOptionCard.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";

export interface PropertyBuyOptionCardProps {
  title?: string;
  subDescription?: string;
  icon?: ImageWidget;
}

export interface PropertyBuyOptionProps {
  title?: string;
  subDescription?: string;
  PropertyBuyOptions: PropertyBuyOptionCardProps[];
}

const PropertyBuyOption = ({ title, subDescription, PropertyBuyOptions }: PropertyBuyOptionProps) => {
  const id = useId();

  return (
    <div className="bg-privia-pure">
      <div className="text-center py-8 px-20 container mx-auto">
        <div className="mb-11 container mx-auto md:px-60 flex flex-col gap-6">
          <h2 className="text-2xl md:text-4xl font-semibold text-black">{title}</h2>
          <p className="text-lg md:text-xl text-gray-400 font-normal">{subDescription}</p>
        </div>
        
        {/* Grid no desktop */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PropertyBuyOptions.map((option, index) => (
            <PropertyBuyOptionCard key={index} {...option} />
          ))}
        </div>

        {/* Slider no mobile */}
        <div className="block md:hidden">
          <Slider rootId={id} interval={5000} infinite={true} className="w-full overflow-hidden">
            {PropertyBuyOptions.map((option, index) => (
              <Slider.Item key={index} index={index} className="carousel-item w-full">
                <PropertyBuyOptionCard {...option} />
              </Slider.Item>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default PropertyBuyOption;