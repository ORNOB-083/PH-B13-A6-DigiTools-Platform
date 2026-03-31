import cart from '../assets/products/shopping-cart.png';

const NavBar = () => {
    return (
        <div className="navbar py-5 px-50">
            <div className="navbar-start">
                <h1 className="text-5xl  font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent pb-3">DigiTools</h1>
            </div>
            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1 text-lg">
                    <li>
                        <a>Products</a>
                    </li>
                    <li>
                        <a>Features</a>
                    </li>
                    <li>
                        <a>Pricing</a>
                    </li>
                    <li>
                        <a>Testimonials</a>
                    </li>
                    <li>
                        <a>FAQ</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-end gap-5">
                <img src={cart} alt="Logo" className="h-6 w-6" />
                <button className="btn btn-ghost text-lg">Login</button>
                <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
            </div>
        </div>
    );
};

export default NavBar;