import WhyUs from "@/components/WhyUs";

/**
 * @typedef {import("@prismicio/client").Content.WhyUsSliceSlice} WhyUsSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WhyUsSliceSlice>} WhyUsSliceProps
 * @type {import("react").FC<WhyUsSliceProps>}
 */
const WhyUsSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     
     <WhyUs heading={slice.primary.heading} subheading={slice.primary.subheading} reasons={slice.primary.reasons} />
    </section>
  );
};

export default WhyUsSlice;
