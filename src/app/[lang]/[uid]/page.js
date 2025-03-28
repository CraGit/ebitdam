import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";

import { Layout } from "@/components/Layout";
import { components } from "@/slices";

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params }) {
  const { uid, lang } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid, { lang });

  return {
    title: prismic.isFilled.keyText(page.data.meta_title) 
      ? page.data.meta_title 
      : prismic.asText(page.data.title),
    description: prismic.isFilled.richText(page.data.meta_description) 
      ? prismic.asText(page.data.meta_description) 
      : null,
    openGraph: {
      title: prismic.isFilled.keyText(page.data.meta_title) 
        ? page.data.meta_title 
        : prismic.asText(page.data.title),
      description: prismic.isFilled.richText(page.data.meta_description) 
        ? prismic.asText(page.data.meta_description) 
        : null,
      images: prismic.isFilled.image(page.data.meta_image) 
        ? [{ url: page.data.meta_image.url }] 
        : [],
    },
  };
}

export default async function Page({ params }) {
  const { uid, lang } = await params;
  const client = createClient();

  const page = await client.getByUID("page", uid, { lang });
  const navigation = await client.getSingle("navigation", { lang });
  const settings = await client.getSingle("settings", { lang });

  const locales = await getLocales(page, client);

  return (
    <Layout locales={locales} navigation={navigation} settings={settings}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page", {
    lang: "*",
    filters: [prismic.filter.not("my.page.uid", "home")],
  });

  return pages.map((page) => {
    return {
      uid: page.uid,
      lang: page.lang,
    };
  });
}
