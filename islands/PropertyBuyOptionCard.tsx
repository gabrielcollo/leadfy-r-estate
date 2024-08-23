import { ImageWidget } from "apps/admin/widgets.ts";
import { useState } from 'preact/hooks';

export interface PropertyBuyOptionCardProps {
    title?: string;
    subDescription?: string;
    icon?: ImageWidget
}

const PropertyBuyOptionCard = ({ title, subDescription, icon }: PropertyBuyOptionCardProps) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div
            onClick={() => setIsSelected(!isSelected)}
            className={`p-6 rounded-lg w-[312px] h-[298px] cursor-pointer transition-colors ${isSelected ? 'bg-white' : 'bg-[#EDEFF6]'
                }`}
        >
            <div className="flex justify-start mb-4">
                <img
                    src={icon || ""}
                    alt={icon || "Property"}
                    className="w-20 h-20 object-cover"
                />
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-start">{title}</h3>
            <p className="text-base text-start text-gray-400 mb-6">{subDescription}</p>
            <a href="#" className="text-[#4A60A1] text-base text-start font-normal block">Read more</a>
        </div>
    );
}

export default PropertyBuyOptionCard;