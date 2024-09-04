import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import SliderJS from "../islands/SliderJS.tsx";
import { useId } from "../sdk/useId.ts";
import ZoomImage from "../islands/ZoomImage.tsx";
import FormProductPage from "site/islands/FormProductPage.tsx";

const HeroProductPage = () => {
  const id = useId();
  const images = [
    {
      url: "https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/H6309829/17012948286529502.jpg",
      alt: "Image 1",
    },
    {
      url: "https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/H6309829/-393672028532225682.jpg",
      alt: "Image 2",
    },
    {
      url: "https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/H6309829/-393672028532225682.jpg",
      alt: "Image 3",
    },
  ];

  const width = 650;
  const height = 650;
  const aspectRatio = `${width} / ${height}`;

  return (
    <div className="container mx-auto px-4 py-16">
      <div id={id} className="flex space-x-4">
        {/* Thumbnails */}
        <div className="flex flex-col space-y-2">
          {images.map((img, index) => (
            <Slider.Item key={index} index={index} className="cursor-pointer">
              <img
                className="w-16 h-16 object-cover"
                src={img.url}
                alt={img.alt}
              />
            </Slider.Item>
          ))}
        </div>

        {/* Main Image Slider */}
        <div className="flex-grow">
          <Slider className="max-w-[650px] max-h-[650px]">
            {images.map((img, index) => (
              <Slider.Item key={index} index={index} className="w-full">
                <ZoomImage>
                  <img
                    className="w-full object-cover"
                    style={{ aspectRatio }}
                    src={img.url}
                    alt={img.alt}
                  />
                </ZoomImage>
              </Slider.Item>
            ))}
          </Slider>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <div className="flex justify-between mt-2">
              <Slider.PrevButton>
                <Icon className="text-black" size={24} id="ArrowLeft" strokeWidth={1} />
              </Slider.PrevButton>
              <Slider.NextButton>
                <Icon className="text-black" size={24} id="ArrowRight" strokeWidth={1} />
              </Slider.NextButton>
            </div>
          )}

          <SliderJS rootId={id} />
        </div>

        
        {/* Form */}
        <div className="hidden md:block">
          <FormProductPage />
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-8">
        <h2 className="text-[32px] font-extrabold text-[#ff3f3f]">27 Astor Lane</h2>
        <p className="text-2xl mt-2 text-[#787878] font-extrabold">$7,990,000</p>
      </div>
      <div className="flex flex-col md:flex-rowgap-4 w-full mt-4">
        <ul className="flex flex-row gap-4 text-xs text-[#787878]">
          <li>6 BEDROOMS</li>
          <li>&bull; 5 FULL BATHS</li>
          <li>&bull; 2 HALF BATHS</li>
          <li>&bull; 7,052 Sq.Ft</li>
        </ul>
      <div className="md:hidden block mt-9">
          <FormProductPage />
      </div>
      </div>
    </div>
  );
};

export default HeroProductPage;