import type { ImageWidget } from "apps/admin/widgets.ts";
// import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";

export interface properticeAreasProps {
  /**
   * @title Cidade
   * @description Insira apenas o nome da cidade
   */
  location: string;
  image: ImageWidget;
}

export interface Props {
  /**
   * @title Título da Seção
   */
  title?: string;
  /**
   * @title Descrição da Seção
   */
  subtitle?: string;
  /**
   * @title Áreas de propriedades
   * @description Cadastre as áreas desejadas
   */
  properticeAreas?: properticeAreasProps[];
}

function CreateAreaCard(props) {
  const { area } = props

  return (
    <div class="w-[300px] my-0 mx-auto">
      <span>{area.location}</span>
      <img src={area.image} alt="" />
    </div>
  )
}

function Dots({ areas, interval = 0} ) {

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel col-span-full gap-3 z-10">
        {areas.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-2 h-2 rounded-full group-disabled:animate-progress dot"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <div class="flex gap-4">
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="flex items-center justify-center btn-circle border border-base-content">
          <Icon
            class="text-base-content"
            size={24}
            id="ArrowRight"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="flex items-center justify-center btn-circle border border-base-content">
          <Icon
            class="text-base-content"
            size={24}
            id="ArrowLeft"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </div>
  );
}

function ProperticesByArea(props: Props) {
  const id = useId();
  const areas = props.properticeAreas || [];

  return (
    <div
      //   id={id}
      class="w-full flex flex-col justify-center align-start my-0 mx-auto lg:max-w-[80vw]"
    >
      <h2 class="text-xl text-black	text-center font-semibold	mb-3">
        {props.title}
      </h2>
      <h3 class="text-sm text-gray-400 text-center mb-5">
        {props.subtitle}
      </h3>
      <div class="w-full flex justify-center">
        {
          areas.map((area) => {
            return (
              <div class="w-[300px]">
                <span>{area.location}</span>
                <img src={area.image} alt="" />
              </div>
            )
          })
        }
      </div>
      
      {/* Mobile Cards - Slider */}
      <Slider
        class="carousel carousel-center w-full col-span-full row-span-full gap-6"
        rootId={id}
        infinite
      >
        {
          areas?.map((area, index) => (
            <Slider.Item
              index={index}
              class="carousel-item max-w-[600px] w-full"
            >
              <CreateAreaCard area={area} />
            </Slider.Item>
          ))
        }
      </Slider>
      <div class="flex justify-between pt-8 lg:px-16">
        <Dots areas={areas} />{" "}
        <Buttons />
      </div>
    </div>
  );
}

export default ProperticesByArea;
