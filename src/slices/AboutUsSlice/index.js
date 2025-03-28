import AboutUs from "@/components/AboutUs";

/**
 * @typedef {import("@prismicio/client").Content.AboutUsSliceSlice} AboutUsSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutUsSliceSlice>} AboutUsSliceProps
 * @type {import("react").FC<AboutUsSliceProps>}
 */
const AboutUsSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AboutUs content={slice.primary.content} />
    </section>
  );
};

export default AboutUsSlice;
