import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../ui/Icon.tsx";

export interface Props {
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

export default function ShelfCard({ property }: Props) {
  return (
    <a href="" class="w-full flex flex-col gap-4 bg-zinc-100 rounded-md">
      <div class="w-full">
        <Image
          src={property.image?.src || ""}
          width={424}
          height={240}
          alt={property.image?.alt || ""}
          class="w-full"
        />
      </div>
      <div class="w-full flex flex-col gap-2 mx-3 pb-4">
        <p class="font-semibold">{property.address}</p>
        <span class="text-privia-passion font-semibold">{property.price}</span>
        <div class="w-full flex gap-4">
          <div class="flex gap-1">
            <Icon id="Car" size={27} strokeWidth={0.1} />
            <span class="text-[#6D737A]">{property.cars}</span>
          </div>
          <div class="flex gap-1">
            <Icon id="Bathtub" size={27} strokeWidth={0.1} />
            <span class="text-[#6D737A]">{property.bathrooms}</span>
          </div>
          <div class="flex gap-1">
            <Icon id="ArrowsOut" size={27} strokeWidth={0.1} />
            <span class="text-[#6D737A]">{property.area}</span>
          </div>          
        </div>
      </div>
    </a>
  );
}
