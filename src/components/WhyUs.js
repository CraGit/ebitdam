import { PrismicNextLink } from "@prismicio/next";

export default function WhyUs({ heading, subheading, reasons }) {
  // Icons for the reasons (can be mapped to different reasons if needed)
  const icons = [
    // Checkmark icon
    <svg key="check" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Clock icon
    <svg key="clock" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Team icon
    <svg key="team" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
    // Shield icon
    <svg key="shield" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    // Lightning icon
    <svg key="lightning" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    // Scale icon
    <svg key="scale" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ];

  // Default reasons if none are provided
  const defaultReasons = [
    { heading: "Expertise", content: "Our team consists of industry experts with years of experience in delivering high-quality solutions." },
    { heading: "Efficiency", content: "We deliver projects on time and within budget, ensuring maximum efficiency and minimal disruption." },
    { heading: "Customer Support", content: "Our dedicated support team is available to assist you with any questions or concerns you may have." }
  ];

  // Use provided reasons or default if none provided
  const reasonsToDisplay = reasons && reasons.length > 0 ? reasons : defaultReasons;

  return (
    <div className="bg-gray-200 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            {heading || "Why Choose Us"}
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-600 md:text-lg">
            {subheading || "We pride ourselves on delivering exceptional service and value to our clients. Here's why our clients trust us with their business."}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasonsToDisplay.map((reason, index) => (
            <div key={index} className="rounded-lg bg-gray-100 p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                {icons[index % icons.length]}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">{reason.heading}</h3>
              <p className="text-gray-600">{reason.content}</p>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}