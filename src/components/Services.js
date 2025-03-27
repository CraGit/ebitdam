export default function Services({ heading, subheading, service }) {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                {/* text - start */}
                <div className="mb-10 md:mb-16">

                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                        {heading}
                    </h2>


                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                        {subheading}
                    </p>

                </div>
                {/* text - end */}

                <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    {service.map((service, index) => (
                            <div key={index} className="flex divide-x rounded-lg border bg-gray-50 hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-center p-2 text-indigo-600 md:p-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 md:h-8 md:w-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>

                                <div className="p-4 md:p-6">
                                    <h3 className="mb-2 text-lg font-semibold md:text-xl">
                                        {service.heading}
                                    </h3>
                                    <p className="text-gray-500">{service.content}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
