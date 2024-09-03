import { ImageWidget } from "apps/admin/widgets.ts";



interface Props {
    banner?: ImageWidget;
    mobileBanner?: ImageWidget;
    title?: string;
    ctaLabel?: string;
    ctaUrl?: string;
}

const BannerAboutUs = ({ banner, title, ctaLabel, ctaUrl, mobileBanner }: Props) => {



        return (
            <>
                <div className="hidden md:block relative bg-cover bg-center min-h-[70vh]" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="absolute inset-0 bg-transparent bg-opacity-50 flex flex-col justify-end text-left text-white p-8 container mb-8">
                        <h1 className="text-6xl font-bold text-white whitespace-pre-line mb-9">{title}</h1>
                        <a href={ctaUrl} className="inline-flex items-center bg-[#ff3f3f] hover:bg-[#9d3636] text-white font-bold py-5 px-10 rounded-full border border-[#ff3f3f] text-sm w-fit gap-3">
                            {ctaLabel} <span className="ml-2">{'>'}</span>
                        </a>
                    </div>
                </div>

                <div className="block md:hidden relative bg-contain bg-no-repeat bg-center min-h-[70vh] md:min-h-[89vh]" style={{ backgroundImage: `url(${mobileBanner})` }}>
                    <div className="absolute inset-0 bg-transparent bg-opacity-50 flex flex-col justify-end text-left text-white p-8 container mb-8">
                        <h1 className="text-6xl font-bold text-white whitespace-pre-line mb-9">{title}</h1>
                        <a href={ctaUrl} className="inline-flex items-center bg-[#ff3f3f] hover:bg-[#9d3636] text-white font-bold py-5 px-10 rounded-full border border-[#ff3f3f] text-sm w-fit gap-3">
                            {ctaLabel} <span className="ml-2">{'>'}</span>
                        </a>
                    </div>
                </div>
            </>
        );
    }

export default BannerAboutUs;