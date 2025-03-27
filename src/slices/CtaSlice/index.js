import Cta from "@/components/Cta";

/**
 * @typedef {import("@prismicio/client").Content.CtaSliceSlice} CtaSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CtaSliceSlice>} CtaSliceProps
 * @type {import("react").FC<CtaSliceProps>}
 */
const CtaSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <Cta heading={slice.primary.heading} text={slice.primary.text} button_link={slice.primary.button_link} />
    </section>
  );
};

export default CtaSlice;
