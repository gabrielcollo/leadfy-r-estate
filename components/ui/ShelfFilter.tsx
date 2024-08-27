// import Icon from "../components/ui/Icon.tsx";

export interface Props {
    defaultOrder: string
}

export default function ShelfFilter({ defaultOrder }: Props) {
    
    return (
        <div class="w-full flex flex-col-reverse justify-between items-start gap-2 lg:flex-row lg:items-center">
            <div class="flex justify-start items-center">
                <span>Sort by:</span>
                <select name="" id="">
                    <option value="default" active={defaultOrder}>default</option>
                    <option value="lorem">lorem</option>
                </select>
            </div>
            <div class="flex justify-end items-center gap-2">
                <button class="py-1 px-2 bg-privia-passion rounded-md text-white font-semibold">All Properties</button>
                <button class="py-1 px-2 bg-gray-300 rounded-md">For Sale</button>
                <button class="py-1 px-2 bg-gray-300 rounded-md">For Rent</button>
            </div>
        </div>
    );
}
