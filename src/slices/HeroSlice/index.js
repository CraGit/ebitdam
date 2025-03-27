import Hero from "@/components/Hero";

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @type {import("react").FC<HeroSliceProps>}
 */
const HeroSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
   <Hero heading={slice.primary.heading} subtitle={slice.primary.subtitle} button1Text={slice.primary.button1_text} button1Link={slice.primary.button1_link} button2Text={slice.primary.button2_text} button2Link={slice.primary.button2_link}/>
    </section>
  );
};

export default HeroSlice;
