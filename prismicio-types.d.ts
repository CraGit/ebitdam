// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Navigation → Links*
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Label field in *Navigation → Links*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Optional - Label for the link
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.TitleField;

  /**
   * Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for navigation item
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | ContactSliceSlice
  | AboutUsSliceSlice
  | TestimonialsSliceSlice
  | WhyUsSliceSlice
  | CtaSliceSlice
  | ServicesSliceSlice
  | HeroSliceSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the site
   * - **API ID Path**: settings.siteTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  siteTitle: prismic.TitleField;

  /**
   * Logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Company Name field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.company_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_name: prismic.KeyTextField;

  /**
   * Company Address field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.company_address
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_address: prismic.KeyTextField;

  /**
   * VAT field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.vat
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  vat: prismic.KeyTextField;

  /**
   * Phone field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.phone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone: prismic.KeyTextField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | NavigationDocument
  | PageDocument
  | SettingsDocument;

/**
 * Primary content in *AboutUsSlice → Default → Primary*
 */
export interface AboutUsSliceSliceDefaultPrimary {
  /**
   * Content field in *AboutUsSlice → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us_slice.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for AboutUsSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutUsSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutUsSlice*
 */
type AboutUsSliceSliceVariation = AboutUsSliceSliceDefault;

/**
 * AboutUsSlice Shared Slice
 *
 * - **API ID**: `about_us_slice`
 * - **Description**: AboutUsSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSliceSlice = prismic.SharedSlice<
  "about_us_slice",
  AboutUsSliceSliceVariation
>;

/**
 * Primary content in *ContactSlice → Default → Primary*
 */
export interface ContactSliceSliceDefaultPrimary {
  /**
   * Heading field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Subheading field in *ContactSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_slice.default.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subheading: prismic.KeyTextField;
}

/**
 * Default variation for ContactSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactSlice*
 */
type ContactSliceSliceVariation = ContactSliceSliceDefault;

/**
 * ContactSlice Shared Slice
 *
 * - **API ID**: `contact_slice`
 * - **Description**: ContactSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceSlice = prismic.SharedSlice<
  "contact_slice",
  ContactSliceSliceVariation
>;

/**
 * Primary content in *CtaSlice → Default → Primary*
 */
export interface CtaSliceSliceDefaultPrimary {
  /**
   * Heading field in *CtaSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Text field in *CtaSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_slice.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Button Link field in *CtaSlice → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: cta_slice.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Default variation for CtaSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CtaSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CtaSlice*
 */
type CtaSliceSliceVariation = CtaSliceSliceDefault;

/**
 * CtaSlice Shared Slice
 *
 * - **API ID**: `cta_slice`
 * - **Description**: CtaSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaSliceSlice = prismic.SharedSlice<
  "cta_slice",
  CtaSliceSliceVariation
>;

/**
 * Primary content in *HeroSlice → Default → Primary*
 */
export interface HeroSliceSliceDefaultPrimary {
  /**
   * Heading field in *HeroSlice → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Subtitle field in *HeroSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Button1 Link field in *HeroSlice → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.default.primary.button1_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button1_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * Button2 Link field in *HeroSlice → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.default.primary.button2_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button2_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Default variation for HeroSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *HeroSlice → Small → Primary*
 */
export interface HeroSliceSliceSmallPrimary {
  /**
   * Heading field in *HeroSlice → Small → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.small.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Subtitle field in *HeroSlice → Small → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.small.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Button1 Link field in *HeroSlice → Small → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.small.primary.button1_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button1_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * Button2 Link field in *HeroSlice → Small → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.small.primary.button2_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button2_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Small variation for HeroSlice Slice
 *
 * - **API ID**: `small`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSliceSmall = prismic.SharedSliceVariation<
  "small",
  Simplify<HeroSliceSliceSmallPrimary>,
  never
>;

/**
 * Slice variation for *HeroSlice*
 */
type HeroSliceSliceVariation = HeroSliceSliceDefault | HeroSliceSliceSmall;

/**
 * HeroSlice Shared Slice
 *
 * - **API ID**: `hero_slice`
 * - **Description**: HeroSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSlice = prismic.SharedSlice<
  "hero_slice",
  HeroSliceSliceVariation
>;

/**
 * Item in *ServicesSlice → Default → Primary → Service*
 */
export interface ServicesSliceSliceDefaultPrimaryServiceItem {
  /**
   * Heading field in *ServicesSlice → Default → Primary → Service*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services_slice.default.primary.service[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Content field in *ServicesSlice → Default → Primary → Service*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services_slice.default.primary.service[].content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;
}

/**
 * Primary content in *ServicesSlice → Default → Primary*
 */
export interface ServicesSliceSliceDefaultPrimary {
  /**
   * Heading field in *ServicesSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Subheading field in *ServicesSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services_slice.default.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subheading: prismic.KeyTextField;

  /**
   * Service field in *ServicesSlice → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: services_slice.default.primary.service[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  service: prismic.GroupField<
    Simplify<ServicesSliceSliceDefaultPrimaryServiceItem>
  >;
}

/**
 * Default variation for ServicesSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ServicesSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ServicesSlice*
 */
type ServicesSliceSliceVariation = ServicesSliceSliceDefault;

/**
 * ServicesSlice Shared Slice
 *
 * - **API ID**: `services_slice`
 * - **Description**: ServicesSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSliceSlice = prismic.SharedSlice<
  "services_slice",
  ServicesSliceSliceVariation
>;

/**
 * Item in *TestimonialsSlice → Default → Primary → Testimonials*
 */
export interface TestimonialsSliceSliceDefaultPrimaryTestimonialsItem {
  /**
   * Client field in *TestimonialsSlice → Default → Primary → Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.testimonials[].client
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  client: prismic.KeyTextField;

  /**
   * Company field in *TestimonialsSlice → Default → Primary → Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.testimonials[].company
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company: prismic.KeyTextField;

  /**
   * Content field in *TestimonialsSlice → Default → Primary → Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.testimonials[].content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;
}

/**
 * Primary content in *TestimonialsSlice → Default → Primary*
 */
export interface TestimonialsSliceSliceDefaultPrimary {
  /**
   * Heading field in *TestimonialsSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Subheading field in *TestimonialsSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subheading: prismic.KeyTextField;

  /**
   * Testimonials field in *TestimonialsSlice → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slice.default.primary.testimonials[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  testimonials: prismic.GroupField<
    Simplify<TestimonialsSliceSliceDefaultPrimaryTestimonialsItem>
  >;
}

/**
 * Default variation for TestimonialsSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestimonialsSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TestimonialsSlice*
 */
type TestimonialsSliceSliceVariation = TestimonialsSliceSliceDefault;

/**
 * TestimonialsSlice Shared Slice
 *
 * - **API ID**: `testimonials_slice`
 * - **Description**: TestimonialsSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceSlice = prismic.SharedSlice<
  "testimonials_slice",
  TestimonialsSliceSliceVariation
>;

/**
 * Item in *WhyUsSlice → Default → Primary → Reasons*
 */
export interface WhyUsSliceSliceDefaultPrimaryReasonsItem {
  /**
   * Heading field in *WhyUsSlice → Default → Primary → Reasons*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: why_us_slice.default.primary.reasons[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Content field in *WhyUsSlice → Default → Primary → Reasons*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: why_us_slice.default.primary.reasons[].content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;
}

/**
 * Primary content in *WhyUsSlice → Default → Primary*
 */
export interface WhyUsSliceSliceDefaultPrimary {
  /**
   * Heading field in *WhyUsSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: why_us_slice.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Subheading field in *WhyUsSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: why_us_slice.default.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subheading: prismic.KeyTextField;

  /**
   * Reasons field in *WhyUsSlice → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: why_us_slice.default.primary.reasons[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  reasons: prismic.GroupField<
    Simplify<WhyUsSliceSliceDefaultPrimaryReasonsItem>
  >;
}

/**
 * Default variation for WhyUsSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WhyUsSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WhyUsSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *WhyUsSlice*
 */
type WhyUsSliceSliceVariation = WhyUsSliceSliceDefault;

/**
 * WhyUsSlice Shared Slice
 *
 * - **API ID**: `why_us_slice`
 * - **Description**: WhyUsSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WhyUsSliceSlice = prismic.SharedSlice<
  "why_us_slice",
  WhyUsSliceSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      AboutUsSliceSlice,
      AboutUsSliceSliceDefaultPrimary,
      AboutUsSliceSliceVariation,
      AboutUsSliceSliceDefault,
      ContactSliceSlice,
      ContactSliceSliceDefaultPrimary,
      ContactSliceSliceVariation,
      ContactSliceSliceDefault,
      CtaSliceSlice,
      CtaSliceSliceDefaultPrimary,
      CtaSliceSliceVariation,
      CtaSliceSliceDefault,
      HeroSliceSlice,
      HeroSliceSliceDefaultPrimary,
      HeroSliceSliceSmallPrimary,
      HeroSliceSliceVariation,
      HeroSliceSliceDefault,
      HeroSliceSliceSmall,
      ServicesSliceSlice,
      ServicesSliceSliceDefaultPrimaryServiceItem,
      ServicesSliceSliceDefaultPrimary,
      ServicesSliceSliceVariation,
      ServicesSliceSliceDefault,
      TestimonialsSliceSlice,
      TestimonialsSliceSliceDefaultPrimaryTestimonialsItem,
      TestimonialsSliceSliceDefaultPrimary,
      TestimonialsSliceSliceVariation,
      TestimonialsSliceSliceDefault,
      WhyUsSliceSlice,
      WhyUsSliceSliceDefaultPrimaryReasonsItem,
      WhyUsSliceSliceDefaultPrimary,
      WhyUsSliceSliceVariation,
      WhyUsSliceSliceDefault,
    };
  }
}
