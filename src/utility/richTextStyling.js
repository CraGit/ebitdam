import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const richTextStyling = {
  paragraph: ({ children }) => (
    <p className="mb-2 leading-relaxed text-dark-2 font-xl">{children}</p>
  ),
  heading1: ({ children }) => (
    <h1 className="mb-4 text-dark-2 font-semibold leading-tight text-4xl">
      {children}
    </h1>
  ),
  heading2: ({ children }) => (
    <h2 className="mb-4 text-dark-2 font-semibold leading-tight text-3xl">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="mb-4 text-dark-2 font-semibold leading-tight text-2xl">
      {children}
    </h3>
  ),
  heading4: ({ children }) => (
    <h4 className="mb-4 text-dark-2 font-semibold leading-tight text-xl">
      {children}
    </h4>
  ),
  heading5: ({ children }) => (
    <h5 className="mb-4 text-dark-2 font-semibold leading-tight text-lg">
      {children}
    </h5>
  ),
  heading6: ({ children }) => (
    <h6 className="mb-4 text-dark-2 font-semibold leading-tight text-base">
      {children}
    </h6>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-dark-2">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-dark-2">{children}</em>,
  listItem: ({ children }) => <li className="mb-1 text-dark-2">{children}</li>,
  oListItem: ({ children }) => <li className="mb-1 text-dark-2">{children}</li>,
  list: ({ children }) => (
    <ul className="mb-4 list-disc pl-4 text-dark-2">{children}</ul>
  ),
  oList: ({ children }) => (
    <ol className="mb-4 list-decimal pl-4 text-dark-2">{children}</ol>
  ),
  preformatted: ({ children }) => (
    <pre className="bg-[#f4f4f4] rounded-lg p-4 mb-4 overflow-x-auto text-sm font-mono">
      {children}
    </pre>
  ),
  image: ({ node }) => (
    <div className="relative w-full aspect-video mb-4 mt-6">
      <PrismicNextImage field={node} />
    </div>
  ),
  embed: ({ node }) => (
    <div className="relative aspect-video mb-4 mt-6">
      <iframe
        className="absolute w-full h-full top-0 left-0 rounded-lg"
        src={node.oembed.embed_url}
        allowFullScreen
      />
    </div>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="text-[#7C7668] hover:text-[#004061] underline"
    >
      {children}
    </PrismicNextLink>
  ),
  quote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-200 pl-4 italic mb-4 text-gray-600">
      {children}
    </blockquote>
  ),
  em: ({ children }) => (
    <span className="py-12 mb-4 text-3xl lg:text-6xl text-center font-moondance leading-[1.8] tracking-wider text-s_black block">
      {children}
    </span>
  ),
};

export default richTextStyling;