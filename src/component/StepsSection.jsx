import userIcon from '../assets/user.png';
import boxIcon from '../assets/package.png';
import rocketIcon from '../assets/rocket.png';

const StepsSection = () => {
    const steps = [
        {
            id: '01',
            title: 'Create Account',
            desc: 'Sign up for free in seconds. No credit card required to get started.',
            img: userIcon,
        },
        {
            id: '02',
            title: 'Choose Products',
            desc: 'Browse our catalog and select the tools that fit your needs.',
            img: boxIcon,
        },
        {
            id: '03',
            title: 'Start Creating',
            desc: 'Download and start using your premium tools immediately.',
            img: rocketIcon,
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div>
                    <h2 className="text-5xl font-bold mb-4">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-gray-500 text-lg mb-16">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div key={step.id} className="relative bg-white border border-gray-200 rounded-3xl h-95 pt-20 p-10 shadow-medium hover:shadow-md transition-shadow flex flex-col items-center">

                            <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full flex items-center justify-center font-bold text-sm">{step.id}</div>

                            <div className="w-24 h-24 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-8">
                                <img src={step.img} alt={step.title} className="w-12 h-12 object-contain" />
                            </div>

                            <h3 className="text-2xl font-bold text-[#111827] mb-4">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-center">{step.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default StepsSection;