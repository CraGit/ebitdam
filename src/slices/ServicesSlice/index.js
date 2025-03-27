/**
 * @typedef {import("@prismicio/client").Content.ServicesSliceSlice} ServicesSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServicesSliceSlice>} ServicesSliceProps
 * @type {import("react").FC<ServicesSliceProps>}
 */
import Services from "@/components/Services";

const ServicesSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Services heading={slice.primary.heading} subheading={slice.primary.subheading} service={slice.primary.service} />
    </section>
  );
};

export default ServicesSlice;
