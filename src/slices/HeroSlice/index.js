import Hero from "@/components/Hero";
import SmallHero from "@/components/SmallHero";

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
      {slice.variation === "small" && (
        <SmallHero heading={slice.primary.heading} subtitle={slice.primary.subtitle} button1Link={slice.primary.button1_link} button2Link={slice.primary.button2_link}/>
      )}
      {slice.variation === "default" && (
        <Hero heading={slice.primary.heading} subtitle={slice.primary.subtitle} button1Link={slice.primary.button1_link} button2Link={slice.primary.button2_link}/>
      )}
      
    </section>
  );
};

export default HeroSlice;
