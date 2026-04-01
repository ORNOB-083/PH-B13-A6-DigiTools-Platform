import { useState } from "react";
import { toast } from "react-toastify";
import { Check } from "lucide-react";

const ModelCard = ({ model, carts, setCarts }) => {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubScription = () => {
        const isFound = carts.find((item) => item.id === model.id);

        if (isFound) {
            toast.error("Item already in cart!");
            return;
        }

        setIsSubscribed(true);
        setCarts([...carts, model]);
        toast.success("Item added to cart!");
    };

    return (
        <div className="relative shadow-lg rounded-xl py-10 border border-gray-200  p-5 bg-white flex flex-col justify-between">
            {model.badge && (
                <span className="absolute top-3 right-3 text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                    {model.badge}
                </span>
            )}

            <div className="mb-4 rounded-full border-gray-200 border p-2 w-fit">
                <img
                    className="h-8 w-8 object-contain"
                    src={model.icon}
                    alt={model.title}
                />
            </div>

            <h2 className="text-xl font-bold">{model.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{model.subtitle}</p>

            <div className="text-2xl font-bold mt-4">
                ${model.price}
                <span className="text-sm text-gray-500">
                    {model.isOneTime ? " (one-time)" : `/${model.period}`}
                </span>
            </div>

            <ul className="text-sm mt-3 space-y-1">
                {model.features.map((feature, index) => (
                    <li key={index} className="flex gap-2"><Check className="w-5 h-5 text-green-500" /> {feature}</li>
                ))}
            </ul>

            <button
                onClick={handleSubScription}
                className="mt-5 bg-gradient-to-br from-[#4F39F6] to-[#9514FA] border rounded-full text-white py-2"
            >
                {isSubscribed ? "Added to Cart" : model.buttonText}
            </button>
        </div >
    );
};

export default ModelCard;