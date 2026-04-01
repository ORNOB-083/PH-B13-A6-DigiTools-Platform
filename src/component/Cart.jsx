import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const handlePayment = () => {
        setCarts([]);
        toast.success("Payment successful!");
    };

    const handleDelete = (item) => {
        const filteredArray = carts.filter((c) => c.id !== item.id);
        setCarts(filteredArray);
        toast.success("Item deleted!");
    };

    return (
        <div className="p-10 max-w-5xl border border-gray-200 rounded-lg my-10 mx-auto">
            <h1 className="text-3xl font-bold text-center mb-5">Your Cart</h1>

            {carts.length === 0 ? (
                <p className="text-center text-xl">Cart is empty</p>
            ) : (
                <>
                    <div className="space-y-4">
                        {carts.map((item) => (
                            <div key={item.id} className="flex items-center justify-between border-gray-50 bg-gray-100 border p-4 rounded-lg">
                                <div className="flex">
                                    <div className=" rounded-full border-gray-200 border p-2 w-fit">
                                        <img className="h-8 w-8" src={item.icon} />
                                    </div>

                                    <div className="items-center gap-6 pl-4">
                                        <h2 className="font-semibold ">{item.title}</h2>
                                        <span className="font-bold text-medium text-gray-400">
                                            ${item.price}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDelete(item)}
                                    className="text-red-500 px-3 py-1 font-medium rounded-full"
                                >
                                    remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between p-4 mt-6 rounded-lg text-xl font-bold">
                        <span>Total</span>
                        <span>${totalPrice}</span>
                    </div>

                    <button
                        onClick={handlePayment}
                        className="w-full mt-5 bg-gradient-to-br from-[#4F39F6] to-[#9514FA] text-white py-3 rounded-full text-lg"
                    >
                        Proceed to Checkout
                    </button>
                </>
            )}
        </div >
    );
};

export default Cart;