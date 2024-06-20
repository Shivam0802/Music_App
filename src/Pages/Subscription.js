import React from 'react';

const Subscription = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-[#240b36] via-[#203A43] p-10 mb-6'>
                <h1 className="text-4xl font-medium font-sans text-white mb-4 flex justify-center">
                    Affordable plans for everyone
                </h1>
                <p className="text-lg text-gray-300 mb-4 px-20  flex justify-center">
                    Choose a plan that fits your needs. With options for individuals, families, and students, find the perfect plan for you.
                    Pay in one go by various means. Cancel anytime.
                </p>
            </div>
            <div className='flex flex-row'>
            <div className="flex flex-col justify-center p-6 bg-[#242424] text-white rounded-lg shadow-lg max-w-sm mx-auto">
                <br />
                <h1 className="text-1xl font-bold text-blue-300 mb-2 flex flex-row gap-2">
                    <img src="/Assets/Logo1.png" alt="subscription" className="h-6" />
                    Premium
                </h1>
                <h2 className="text-2xl font-bold text-green-300 mb-2">Mini</h2>
                <p className='text-lg mb-4'>₹25 for 1 week</p>
                <hr className="w-full border border-gray-500 mb-4" />
                <ul className="mb-8">
                    <li className="text-sm mb-2">- 1 mobile-only Premium accounts</li>
                    <li className="text-sm mb-2">- Offline listening of up to 30 songs on 1 device</li>
                    <li className="text-sm mb-2">- One-time payment</li>
                    <li className="text-sm mb-2">- Basic audio quality</li>
                </ul>
                <button className="w-full bg-orange-200 text-gray-900 px-4 py-2 rounded hover:bg-blue-200 transition-colors">
                    Get Premium Mini
                </button>
                <p className="mt-4 text-[10px] text-gray-500">
                    ₹25 for 1 week, then ₹25 per week after. Offer only available if you haven't tried Premium before. Terms apply.
                </p>
            </div>
            <div className="flex flex-col justify-center p-6 bg-[#242424] text-white rounded-lg shadow-lg max-w-sm mx-auto">
                <br />
                <h1 className="text-1xl font-bold text-blue-300 mb-2 flex flex-row gap-2">
                    <img src="/Assets/Logo1.png" alt="subscription" className="h-6" />
                    Premium
                </h1>
                <h2 className="text-2xl font-bold text-green-300 mb-2">Individual</h2>
                <p className="text-lg mb-4">₹119 for 2 months</p>
                <hr className="w-full border border-gray-500 mb-4" />
                <ul className="mb-16">
                    <li className="text-sm mb-2">- 1 Premium accounts</li>
                    <li className="text-sm mb-2">- Cancel anytime</li>
                    <li className="text-sm mb-2">- Subscribe or one-time payment</li>
                </ul>
                <button className="w-full bg-orange-200 text-gray-900 px-4 py-2 rounded hover:bg-blue-200 transition-colors">
                    Get Premium Individual
                </button>
                <p className="mt-4 text-[10px] text-gray-500">
                    ₹119 for 2 months, then ₹119 per month after. Offer only available if you haven't tried Premium before. Terms apply.
                </p>
            </div>
            <div className="flex flex-col justify-center p-6 bg-[#242424] text-white rounded-lg shadow-lg max-w-sm mx-auto">
                <br />
                <h1 className="text-1xl font-bold text-blue-300 mb-2 flex flex-row gap-2">
                    <img src="/Assets/Logo1.png" alt="subscription" className="h-6" />
                    Premium
                </h1>
                <h2 className="text-2xl font-bold text-green-300 mb-2">Family</h2>
                <p className="text-lg mb-4">₹179 for 2 months</p>
                <hr className="w-full border border-gray-500 mb-4" />
                <ul className="mb-12">
                    <li className="text-sm mb-2">- Up to 6 Premium accounts</li>
                    <li className="text-sm mb-2">- Control content marked as explicit</li>
                    <li className="text-sm mb-2">- Cancel anytime</li>
                    <li className="text-sm mb-2">- Subscribe or one-time payment</li>
                </ul>
                <button className="w-full bg-orange-200 text-gray-900 px-4 py-2 rounded hover:bg-blue-200 transition-colors">
                    Get Premium Family
                </button>
                <p className="mt-4 text-[10px] text-gray-500">
                    ₹179 for 2 months, then ₹179 per month after. Offer only available if you haven't tried Premium before. For up to 6 family members residing at the same address. Terms apply.
                </p>
            </div>
        </div>
        </>
    );
};

export default Subscription;
