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
            <div className="flex justify-center flex-col relative">
                <div className="flex justify-center mb-4 z-40 bg-transparent absolute top-[-70%] lg:top-[-140%] w-full">
                    <div className="flex justify-center gap-3" >
                        <button className="px-4 py-2 min-h-14 min-w-20 rounded-md bg-[#4A60A1] text-white">Rent</button>
                        <button className="px-4 py-2 min-h-14 min-w-20 rounded-md bg-gray-200">Sale</button>
                    </div>
                </div>
                <AdvenceSearch />
            </div>
        </div>
    );
}

export default Herobanner;