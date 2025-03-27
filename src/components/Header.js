"use client";

import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useState } from "react";

export function Header({ locales = [], navigation, settings }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <PrismicNextLink href="/" className="block text-teal-600">
              <span className="sr-only">Home</span>
              {prismic.isFilled.image(settings.data.logo) && (
                <PrismicNextImage
                  field={settings.data.logo}
                  className="h-8 w-auto"
                  alt=""
                />
              )}
            </PrismicNextLink>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {navigation.data?.links.map((item) => (
                  <li key={prismic.asText(item.label)}>
                    <PrismicNextLink
                      field={item.link}
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      <PrismicText field={item.label} />
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Language Selector */}
            <div className="hidden md:flex items-center ml-6">
              <div className="flex items-center">
                <span>
                  <PrismicNextLink
                    href={navigation.lang === 'en-us' ? '/en-us' : '/en-us'}
                    locale="en-us"
                    aria-label="Change language to English"
                    className={`text-sm text-gray-500 ${
                      navigation.lang === 'en-us' ? "font-bold" : ""
                    }`}
                  >
                    EN
                  </PrismicNextLink>
                  <span className="text-gray-500 mx-1">|</span>
                </span>
                <span>
                  <PrismicNextLink
                    href={navigation.lang === 'hr' ? '/hr' : '/hr'}
                    locale="hr"
                    aria-label="Change language to Croatian"
                    className={`text-sm text-gray-500 ${
                      navigation.lang === 'hr' ? "font-bold" : ""
                    }`}
                  >
                    HR
                  </PrismicNextLink>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm flex items-center hover:bg-indigo-700 transition-colors"
                  href="tel:+385916037653"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                
                </a>
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span className="sr-only">
                    {isMenuOpen ? "Close menu" : "Open menu"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute z-50 inset-x-0 top-16 bg-white shadow-lg border-t">
          <nav className="px-4 py-6 space-y-6">
            <ul className="space-y-4">
              {navigation.data?.links.map((item) => (
                <li key={prismic.asText(item.label)}>
                  <PrismicNextLink
                    field={item.link}
                    className="text-gray-500 transition hover:text-gray-500/75 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <PrismicText field={item.label} />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>

            {/* Mobile Language Selector */}
            <div className="border-t pt-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  <span>
                    <PrismicNextLink
                      href={navigation.lang === 'en-us' ? '/en-us' : '/en-us'}
                      locale="en-us"
                      aria-label="Change language to English"
                      className={`text-sm text-gray-500 ${
                        navigation.lang === 'en-us' ? "font-bold" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      EN
                    </PrismicNextLink>
                    <span className="text-gray-500 mx-1">|</span>
                  </span>
                  <span>
                    <PrismicNextLink
                      href={navigation.lang === 'hr' ? '/hr' : '/hr'}
                      locale="hr"
                      aria-label="Change language to Croatian"
                      className={`text-sm text-gray-500 ${
                        navigation.lang === 'hr' ? "font-bold" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      HR
                    </PrismicNextLink>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
