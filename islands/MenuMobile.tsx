import { useState } from 'preact/hooks';
import Button from "site/components/ui/Button.tsx";
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-right.tsx";
import { useUI } from "site/sdk/useUI.ts";

import IconMenu from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/menu.tsx";
import IconX from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/x.tsx";

export type Link = {
  label: string;
  href: string;
}

export type MenuNavItem = {
  label: string;
  href?: string;
  background?: string;
  color?: string;
  listlinks?: Link[];
}

export type Props = {
  items?: MenuNavItem[];
}

const MenuMobile = ({ items }: Props) => {
  const { displayMenuProducts, displayMenu, productsChild } = useUI();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="relative text-privia-prestige">
      <Button
        className="flex items-center justify-between w-full bg-white text-white py-3 px-4"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? (
          <IconX className="w-6 h-6" stroke={1} size={24} />
        ) : (
          <IconMenu className="w-6 h-6" stroke={1} size={24} />
        )}
      </Button>
      {openMenu && (
        <div className="fixed inset-0 bg-white z-50">
          <button
            className="absolute top-4 right-4"
            onClick={() => setOpenMenu(false)}
          >
            <IconX className="w-6 h-6 text-black" stroke={1} size={24} />
          </button>
          <ul className="flex flex-col text-sm gap-3 mt-8 p-4">
            {items?.map((item: MenuNavItem, index) => (
              <li key={index} className="font-medium">
                <a
                  href={item.href}
                  className="flex items-center justify-between py-2 w-full font-normal text-base"
                  style={{
                    backgroundColor: item.background || 'transparent',
                    color: item.color || '#000',
                  }}
                >
                  {item.label}
                  <IconChevronRight className="w-6 h-6" stroke={1} size={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuMobile;