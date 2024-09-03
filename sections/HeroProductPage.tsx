
const HeroProductPage = () => {
    return (
        <div class="container mx-auto px-4 py-16">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
            <div class="md:h-480">
              <img
                src="https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/H6309829/17012948286529502.jpg"
                alt="lorem ipsum"
                class="w-full h-auto md:w-658 md:h-480"
              />
            </div>
            <div class="grid grid-cols-2 gap-4 md:gap-8 md:h-480">
              <div class="h-full">
                <img
                  src="https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/H6309829/-393672028532225682.jpg"
                  alt="lorem ipsum"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="h-full">
                <img
                  src="https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/H6309829/-393672028532225682.jpg"
                  alt="lorem ipsum"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="h-full">
                <img
                  src="https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/H6309829/-393672028532225682.jpg"
                  alt="lorem ipsum"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="h-full">
                <img
                  src="https://dlajgvw9htjpb.cloudfront.net/cms/b26ab618-2b1e-4a17-8868-498b96b52dc0/H6309829/-393672028532225682.jpg"
                  alt="lorem ipsum"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div class="mt-8">
            <h2 class="text-[32px] font-extrabold text-[#ff3f3f]">27 Astor Lane</h2>
            <p class="text-2xl mt-2 text-[#787878] font-extrabold">
              $7,990,000
            </p>
          </div>
          <div class="flex flex-row gap-4 w-full mt-4">
            <ul class="flex flex-row gap-4 text-xs text-[#787878]">
              <li>6 BEDROOMS</li>
              <li>&bull; 5 FULL BATHS</li>
              <li>&bull; 2 HALF BATHS</li>
              <li>&bull; 7,052 Sq.Ft</li>
            </ul>
          </div>
        </div>
      );
};

export default HeroProductPage;
