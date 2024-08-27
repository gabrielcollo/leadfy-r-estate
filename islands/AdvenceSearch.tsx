const AdvenceSearch = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 max-w-4xl mx-auto relative -top-20 z-20">
            <div className="flex flex-col md:flex-row justify-between items-center lg:space-x-4 gap-4 lg:gap-0">
                <div className="flex items-center w-full justify-between lg:w-fit lg:flex-col lg:gap-0 lg:items-start">
                    <label className="block mb-1 font-semibold text-base text-[#2C3A61] pl-1">Locations</label>
                    <select className="py-2 pl-0 pr-3 text-gray-400">
                        <option>Select your city</option>
                        {/* Options would go here */}
                    </select>
                </div>
                <div className="flex items-center w-full justify-between lg:w-fit lg:flex-col lg:gap-0 lg:items-start">
                    <label className="block mb-1 font-semibold text-base text-[#2C3A61] pl-1">Property Type</label>
                    <select className="py-2 pl-0 pr-3 text-gray-400">
                        <option>Select property type</option>
                        {/* Options would go here */}
                    </select>
                </div>
                <div className="flex items-center w-full justify-between lg:w-fit lg:flex-col lg:gap-0 lg:items-start">
                    <label className="block mb-1 font-semibold text-base text-[#2C3A61] pl-1">Rent Range</label>
                    <select className="py-2 pl-0 pr-3 text-gray-400">
                        <option className="text-gray-400">Select rent range</option>
                        {/* Options would go here */}
                    </select>
                </div>
                <button className="bg-[#4A60A1] text-white py-3 px-6 rounded min-h-12 min-w-24 text-base">Search</button>
            </div>
        </div>
    );
};

export default AdvenceSearch;