import { ImageWidget } from "apps/admin/widgets.ts";

export interface FeaturedPropertyCardProps {
    city?: string;
    image?: ImageWidget;
    location?: string;
    className?: string;
}

const FeaturedPropertyCard = ({ city, image, location, className }: FeaturedPropertyCardProps) => {
    return (
        <div className={`relative rounded-lg overflow-hidden shadow-md ${className}`}>
            <img
                src={image || ""}
                alt={city || "Property"}
                className="w-full h-48 object-cover"
            />
            <div className="absolute top-0 left-0 p-4 text-white bg-transparent bg-opacity-50">
                <h2 className="text-2xl font-semibold">{city}</h2>
                <p className="text-base text-left">25 listings</p>
            </div>
            <a
                href={location || "#"}
                className="absolute bottom-0 left-0 p-4 text-white flex items-center gap-2 bg-transparent bg-opacity-50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
            </a>
        </div>
    );
}

export default FeaturedPropertyCard;