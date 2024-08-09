import { ImageWidget } from "apps/admin/widgets.ts";
import AdvenceSearch from "site/islands/AdvenceSearch.tsx";

interface PropsHeroBanner {
    title?: string;
    description?: string;
    background?: ImageWidget;
}

const Herobanner = ({ title, description, background }: PropsHeroBanner) => {
    const backgroundImage = background ? `url(${background})` : '';

    return (
        <div className="relative">
            <div
                className="w-full h-[752px] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage }}
            >
                <div className="p-8 rounded-md text-center">
                    <h1 className="text-[52px] font-semibold mb-4">{title}</h1>
                    <p className="text-xl font-normal max-w-[696px]">{description}</p>
                </div>
            </div>
            <div className="flex justify-center">
                <AdvenceSearch />
            </div>
        </div>
    );
}

export default Herobanner;