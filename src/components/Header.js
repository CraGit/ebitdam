"use client";

import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useState } from "react";

export function Header({ locales = [], navigation, settings }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="relative px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <PrismicNextLink href="/" className="flex-shrink-0">
            <span className="sr-only">Go to homepage</span>
            {prismic.isFilled.image(settings.data.logo) && (
              <PrismicNextImage
                field={settings.data.logo}
                className="h-10 w-auto"
                alt=""
              />
            )}
          </PrismicNextLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navigation.data?.links.map((item) => (
                <li key={prismic.asText(item.label)}>
                  <PrismicNextLink
                    field={item.link}
                    className="text-base font-medium text-gray-900 hover:text-prime-ten transition-colors duration-300 font-outfit"
                  >
                    <PrismicText field={item.label} />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>

            {/* Language Selector */}
            <div className="flex items-center space-x-2 border-l pl-8">
              <ul className="flex space-x-3">
                <li>
                  <PrismicNextLink
                    href={navigation.lang === 'en-us' ? '/en-us' : '/en-us'}
                    locale="en-us"
                    aria-label="Change language to English"
                    className={`text-sm hover:text-prime-ten transition-colors duration-300 font-outfit ${
                      navigation.lang === 'en-us' ? "font-semibold" : ""
                    }`}
                  >
                    EN
                  </PrismicNextLink>
                </li>
                <li>
                  <span className="text-gray-500 mx-1">|</span>
                </li>
                <li>
                  <PrismicNextLink
                    href={navigation.lang === 'hr' ? '/hr' : '/hr'}
                    locale="hr"
                    aria-label="Change language to Croatian"
                    className={`text-sm hover:text-prime-ten transition-colors duration-300 font-outfit ${
                      navigation.lang === 'hr' ? "font-semibold" : ""
                    }`}
                  >
                    HR
                  </PrismicNextLink>
                </li>
              </ul>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-prime-ten hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="px-4 py-6 space-y-6">
              <ul className="space-y-4">
                {navigation.data?.links.map((item) => (
                  <li key={prismic.asText(item.label)}>
                    <PrismicNextLink
                      field={item.link}
                      className="text-base font-medium text-gray-900 hover:text-prime-ten transition-colors duration-300 block font-outfit"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <PrismicText field={item.label} />
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>

              {/* Mobile Language Selector */}
              <div className="border-t pt-4">
                <div className="flex items-center space-x-2">
                  <ul className="flex space-x-4">
                    <li>
                      <PrismicNextLink
                        href={navigation.lang === 'en-us' ? '/en-us' : '/en-us'}
                        locale="en-us"
                        aria-label="Change language to English"
                        className={`text-sm hover:text-prime-ten transition-colors duration-300 font-outfit ${
                          navigation.lang === 'en-us' ? "font-semibold" : ""
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        EN
                      </PrismicNextLink>
                    </li>
                    <li>
                      <span className="text-gray-500 mx-1">|</span>
                    </li>
                    <li>
                      <PrismicNextLink
                        href={navigation.lang === 'hr' ? '/hr' : '/hr'}
                        locale="hr"
                        aria-label="Change language to Croatian"
                        className={`text-sm hover:text-prime-ten transition-colors duration-300 font-outfit ${
                          navigation.lang === 'hr' ? "font-semibold" : ""
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        HR
                      </PrismicNextLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
