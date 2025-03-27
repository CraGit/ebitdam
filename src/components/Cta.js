import { PrismicNextLink } from "@prismicio/next";
import React from 'react'

export default function Cta({ heading, text, button_link }) {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-100 p-4 sm:flex-row md:p-8">
          <div>
            <h2 className="text-xl font-bold text-indigo-600 md:text-2xl">{heading}</h2>
            <p className="text-gray-600">{text}</p>
          </div>

          <PrismicNextLink
            field={button_link}
            className="inline-block rounded-lg bg-indigo-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-800 md:text-base"
          >
         
          </PrismicNextLink>
        </div>
      </div>
    </div>
  );
}
