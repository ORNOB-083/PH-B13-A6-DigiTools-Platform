const StatsSection = () => {
    return (
        <div className="w-full mx-auto">
            <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] h-3/5 py-10 px-6 flex flex-col md:flex-row items-center justify-around text-white text-center gap-8 md:gap-0">

                {/* Stat 1 */}
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">50K+</h2>
                    <p className="text-purple-100 text-2xl font-medium">Active Users</p>
                </div>

                {/* Divider 1 */}
                <div className="hidden md:block h-20 w-px bg-white/40"></div>

                {/* Stat 2 */}
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">200+</h2>
                    <p className="text-purple-100 text-2xl font-medium">Premium Tools</p>
                </div>

                {/* Divider 2 */}
                <div className="hidden md:block h-20 w-px bg-white/40"></div>

                {/* Stat 3 */}
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">4.9</h2>
                    <p className="text-purple-100 text-2xl font-medium">Rating</p>
                </div>

            </div>
        </div>
    );
};

export default StatsSection;