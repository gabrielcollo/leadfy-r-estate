const AdvenceSearch = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 max-w-4xl mx-auto relative -top-20 z-20">
            <div className="flex justify-between items-center space-x-4">
                <div>
                    <label className="block mb-1 font-semibold text-base text-[#2C3A61] pl-1">Locations</label>
                    <select className="py-2 pl-0 pr-3 text-gray-400">
                        <option>Select your city</option>
                        {/* Options would go here */}
                    </select>
                </div>
                <div>
                    <label className="block mb-1 font-semibold text-base text-[#2C3A61] pl-1">Property Type</label>
                    <select className="py-2 pl-0 pr-3 text-gray-400">
                        <option>Select property type</option>
                        {/* Options would go here */}
                    </select>
                </div>
                <div>
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