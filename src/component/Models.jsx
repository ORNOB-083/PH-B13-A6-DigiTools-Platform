import { useEffect, useState } from "react";
import ModelCard from "./ModelCard";

const Models = ({ carts, setCarts }) => {
    const [models, setModels] = useState([]);

    useEffect(() => {
        fetch("/models.json")
            .then((res) => res.json())
            .then((data) => setModels(data));
    }, []);

    return (
        <div className="py-20 max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {models.map((model) => (
                    <ModelCard
                        key={model.id}
                        model={model}
                        carts={carts}
                        setCarts={setCarts}
                    />
                ))}
            </div>
        </div>
    );
};

export default Models;