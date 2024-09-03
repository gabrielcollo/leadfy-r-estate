import { ImageWidget } from "apps/admin/widgets.ts";
import { HTMLWidget as HTML } from "apps/admin/widgets.ts";
interface ValueProps {
    title: string;
    content: HTML;
    icon?: ImageWidget;
}

interface Props {
    storyTitle?: string;
    storyContent: HTML;
    ourValuesTitle?: string;
    values: ValueProps[];
    image?: ImageWidget;
    ceoTitle?: string;
    ceoContent: HTML;

}

const AboutUsBody = ({ storyTitle, storyContent, values, image, ceoTitle, ceoContent, ourValuesTitle }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
            {/* Linha 1 */}
            <div id='Our Story' className="p-4">
                <h3 className="text-2xl font-bold mb-2 text-[#ff3f3f]">{storyTitle}</h3>
                <div className="text-gray-400 font-normal" dangerouslySetInnerHTML={{ __html: storyContent }}></div>
            </div>
            <div id='Our Values' className="p-4">
                <h3 className="text-2xl font-bold mb-2 text-[#ff3f3f] px-2">{ourValuesTitle}</h3>
                <div id='Our Values' className="grid grid-cols-2 gap-4">
                    {values.map((value, index) => (
                        <div key={index} className="p-2 bg-transparent rounded-lg">
                            <h3 className="text-2xl font-semibold mb-1 text-[#ff3f3f] ">{value.title}</h3>
                            <div id='Icon' className="py-4">
                                {value.icon && <img src={value.icon} alt={storyTitle} className="w-8 h-8 object-cover" />}
                            </div>
                            <div className="text-gray-400 font-normal" dangerouslySetInnerHTML={{ __html: value.content }}>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Linha 2 */}
            <div id='Image' className="p-4">
                <h3 className="text-2xl font-bold mb-2 text-[#ff3f3f]">{storyTitle}</h3>
                {image && <img src={image} alt={storyTitle} className="w-full h-auto rounded-lg" />}
            </div>
            <div id='Our Founder & CEO' className="p-4">
                <h3 className="text-2xl font-bold mb-2 text-[#ff3f3f]">{ceoTitle}</h3>
                <div className="text-gray-400 font-normal" dangerouslySetInnerHTML={{ __html: ceoContent }}>
                </div>
            </div>
        </div>
    );
}

export default AboutUsBody;