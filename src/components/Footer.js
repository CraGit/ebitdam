import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { PrismicRichText } from "./PrismicRichText";

export function Footer({ settings }) {
  return (
    <Bounded as="footer" className="bg-gray-800 pb-12 text-slate-300 md:pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8">
        {/* Company Logo and Name */}
        <div className="flex flex-col items-center md:items-start">
          {prismic.isFilled.image(settings.data.logo) && (
            <div className="mb-4">
              <PrismicNextImage
                field={settings.data.logo}
                className="h-12 w-auto"
                alt={settings.data.company_name || ""}
              />
            </div>
          )}
          {prismic.isFilled.keyText(settings.data.company_name) && (
            <h3 className="text-lg font-semibold text-white mb-2">
              {settings.data.company_name}
            </h3>
          )}
          {prismic.isFilled.keyText(settings.data.company_address) && (
            <p className="text-sm mb-2 text-center md:text-left">
              {settings.data.company_address}
            </p>
          )}
          {prismic.isFilled.keyText(settings.data.phone) && (
            <p className="text-sm mb-2">
              <a href={`tel:${settings.data.phone}`} className="text-slate-400 hover:text-white transition-colors">
                {settings.data.phone}
              </a>
            </p>
          )}
          {prismic.isFilled.keyText(settings.data.vat) && (
            <p className="text-sm mb-2">
              VAT: {settings.data.vat}
            </p>
          )}
        </div>

     
       
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <div className="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight">
          <p className="mb-2"> {new Date().getFullYear()} EBITDAM. All rights reserved.</p>
          <p>
            Web By{" "}
            <PrismicNextLink href="https://killerclick.com" className="text-white hover:text-white/80 transition-colors">
             Killer Click
            </PrismicNextLink>
          </p>
        </div>
      </div>
    </Bounded>
  );
}
