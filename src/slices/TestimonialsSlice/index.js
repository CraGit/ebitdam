import Testimonials from "@/components/Testimonials";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSliceSlice} TestimonialsSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSliceSlice>} TestimonialsSliceProps
 * @type {import("react").FC<TestimonialsSliceProps>}
 */
const TestimonialsSlice = ({ slice }) => {
  // Log the slice data to help with debugging
  console.log("Testimonials Slice Data:", slice);
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Testimonials 
        heading={slice.primary.heading}
        subheading={slice.primary.subheading}
        testimonials={slice.primary.testimonials}
      />
    </section>
  );
};

export default TestimonialsSlice;
