import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#0B1220] text-white pt-16 pb-8">
            <div className=" mx-auto px-50">

                <div className="grid grid-cols-6 gap-10">
                    <div className="md:col-span-2">
                        <h2 className="text-4xl font-bold mt-4 mb-4">DigiTools</h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Product</h3>
                        <ul className="space-y-2 text-gray-400 text-medium">
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">Templates</a></li>
                            <li><a href="#" className="hover:text-white">Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-400 text-medium">
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Resources</h3>
                        <ul className="space-y-2 text-gray-400 text-medium">
                            <li><a href="#" className="hover:text-white">Documentation</a></li>
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Community</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl mt-4 mb-4">Social Links</h3>
                        <div className="flex gap-3">
                            <a href="#" className="bg-white h-9 w-9 text-black p-2 rounded-full hover:scale-110 transition"><FaInstagram size={20} /></a>
                            <a href="#" className="bg-white h-9 w-9 text-black p-2 rounded-full hover:scale-110 transition"><FaFacebookF size={20} /></a>
                            <a href="#" className="bg-white h-9 w-9 text-black p-2 rounded-full hover:scale-110 transition"><FaXTwitter size={20} /></a>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
                    <p>&copy; 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-15 text-base font-small">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;