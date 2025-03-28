import React from 'react';
import { PrismicRichText } from './PrismicRichText';
import richTextStyling from '@/utility/richTextStyling';

export default function AboutUs({ content }) {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <PrismicRichText field={content} components={richTextStyling} />
        </div>
      </div>
    </section>
  );
}
