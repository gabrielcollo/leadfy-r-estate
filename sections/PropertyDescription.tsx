import { useSignal } from '@preact/signals';

const PropertyDescription = () => {

    const showFullDescription = useSignal(false);

    return (
        <div class="container mx-auto px-4 pb-8">
          <h3 class="text-[42px] font-extrabold text-[#ff3f3f] mb-8">Property Description</h3>
          <p class={`text-base text-black ${showFullDescription.value ? 'line-clamp-none' : 'line-clamp-3'}`}>
            Discover unparalleled luxury in this Richard Meier-designed contemporary waterfront estate in
            Sands Point. This architectural masterpiece sits on expansive grounds offering 200 ft of
            breathtaking water views. The primary residence is a symphony of light and space. The home
            features floor-to-ceiling windows, open-plan living areas, and state-of-the-art amenities. The
            estate includes a two-family staff house and a pool cabana. A standout feature is the 2 story
            boat/guest house, perfect for hosting or enjoying a serene retreat by the water. The historic ice
            house adds unique charm and ample storage, while the carriage house provides space for up to
            seven cars with a lift. Outdoor living is equally impressive, with a sparkling pool offering
            panoramic views and a tennis court for athletic pursuits.
          </p>
          <button
            class="flex items-center text-[#ff3f3f] mt-4"
            onClick={() => showFullDescription.value = !showFullDescription.value}
          >
            {showFullDescription.value ? 'Read Less' : 'Read More'}
            <svg
              class={`w-4 h-4 ml-2 transition-transform transform ${showFullDescription.value ? 'rotate-180' : ''}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      );
}
 
export default PropertyDescription;