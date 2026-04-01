const BottomSection = () => {
    return (
        <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-30 text-center h-120 text-white">

            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-6">Ready To Transform Your Workflow?</h2>
                <p className="text-purple-200 mb-8">Join thousands of professionals who are already using Digitools to work smarter.<br />Start your free trial today.</p>

                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100">Explore Products
                    </button>

                    <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-purple-700">View Pricing
                    </button>
                </div>

                <p className="text-sm text-purple-200">
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>
        </section>
    );
};

export default BottomSection;