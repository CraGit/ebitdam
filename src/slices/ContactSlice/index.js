/**
 * @typedef {import("@prismicio/client").Content.ContactSliceSlice} ContactSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactSliceSlice>} ContactSliceProps
 * @param {ContactSliceProps}
 */

import Contact from "../../components/Contact";
import { createClient } from "../../prismicio";

const ContactSlice = async ({ slice }) => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Contact 
        heading={slice.primary.heading}
        subheading={slice.primary.subheading}
        settings={settings}
      />
    </section>
  );
};

export default ContactSlice;
