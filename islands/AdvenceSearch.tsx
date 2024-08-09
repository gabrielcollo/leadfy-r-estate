const AdvenceSearch = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 max-w-4xl mx-auto relative -top-20 z-20">
            <div className="flex justify-center mb-4">
                <button className="px-4 py-2 rounded-l-lg bg-blue-500 text-white">Rent</button>
                <button className="px-4 py-2 rounded-r-lg bg-gray-200">Sale</button>
            </div>
            <div className="flex justify-between items-center space-x-4">
                <div>
                    <label className="block mb-1">Locations</label>
                    <select className="border rounded px-3 py-2">
                        <option>Select your city</option>
                        {/* Options would go here */}
                    </select>
                </div>
                <div>
                    <label className="block mb-1">Property Type</label>
                    <select className="border rounded px-3 py-2">
                        <option>Select property type</option>
                        {/* Options would go here */}
                    </select>
                </div>
                <div>
                    <label className="block mb-1">Rent Range</label>
                    <select className="border rounded px-3 py-2">
                        <option>Select rent range</option>
                        {/* Options would go here */}
                    </select>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
            </div>
        </div>
    );
};

export default AdvenceSearch;