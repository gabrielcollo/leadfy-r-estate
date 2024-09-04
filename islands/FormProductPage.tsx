const FormProductPage = () => {
    return (
        <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
            <form>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 border border-gray-300 rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded"
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full p-3 border border-gray-300 rounded"
                    />
                    <select className="w-full p-3 border border-gray-300 rounded">
                        <option>Select a Topic</option>
                        <option>Buying</option>
                        <option>Selling</option>
                        <option>Other</option>
                    </select>
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-3 border border-gray-300 rounded h-24"
                    ></textarea>

                    <div className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <p className="text-xs text-gray-600">
                            By providing SERHANT. your contact information, you acknowledge and
                            agree to our <a href="#" className="underline">Privacy Policy</a> and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-fit bg-[#ff3f3f] text-white rounded-full hover:bg-[#9d3636] px-8 py-5"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormProductPage;