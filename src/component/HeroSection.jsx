import banner from '../assets/banner.png';
import playIcon from '../assets/Play.png';

const HeroSection = () => {
    return (
        <div className="max-w-7xl mx-auto flex items-center py-20 px-10 justify-between gap-10">
            <div className="flex-1 max-w-2xl">
                <div className="inline-flex items-center mb-6 gap-2 bg-[#E1E7FF] px-4 py-2 rounded-full text-[#9514FA] font-bold text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#4F39F6] animate-pulse"></span>
                    <span>New: AI-Powered Tools Available</span>
                </div>

                <h1 className="text-6xl mb-6 font-extrabold text-[#111827]">Supercharge Your Digital Workflow</h1>
                <p className="text-lg text-[#374151] leading-relaxed">Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.</p>
                <p className="text-base mb-6 text-[#374151]">Explore Products</p>

                <div className="flex items-center gap-4 pt-6">

                    <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-10 py-4 rounded-4xl font-semibold hover:bg-[#7e10cc] transition">
                        Explore Products
                    </button>

                    <button className="border-2 border-[#D8B4FE] text-[#9514FA] px-10 py-4 rounded-4xl font-semibold hover:border-[#9514FA] transition flex gap-3">
                        <img src={playIcon} alt="Play Icon" className="h-6 w-6" />Watch Demo
                    </button>
                </div>
            </div>

            <div className="flex-1">
                <img src={banner} alt="" className="w-full object-cover rounded-2xl" />
            </div>
        </div>
    );
};

export default HeroSection;