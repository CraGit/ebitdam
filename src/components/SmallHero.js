import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const richTextStyling = {

    heading1: ({ children }) => (
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            {children}
        </h1>
    ),
    em: ({ children }) => (
        <span className="py-12 mb-4 text-3xl lg:text-6xl text-center font-moondance leading-[1.8] tracking-wider text-s_black block">
            {children}
        </span>
    ),
    strong: ({ children }) => (
        <strong className="text-indigo-600">{children}</strong>
    ),
};



export default function SmallHero({
    heading,
    subtitle,


}) {
    return (
        <section className="relative lg:grid lg:h-[40vh] lg:place-content-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900"></div>

            {/* Optional decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute top-1/3 -right-24 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="relative mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-prose text-center">
                    <PrismicRichText field={heading} components={richTextStyling} />

                    <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
                        {subtitle}
                    </p>


                </div>
            </div>
        </section>
    )
}
