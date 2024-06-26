import { client } from "@/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";
const fetchPosts = async (val) => {
  const CONTENT_QUERY = `*[_type=='post' && slug.current =="${val}"]{title,slug,publishedAt,_id,mainImage{asset->{path,url}},body}`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
};

const builder = imageUrlBuilder(client);

const components = {
  types: {
    image: ({ value }) => (
      <Image
        src={builder.image(value).url()}
        width={300}
        height={300}
        alt="body Image"
        className="rounded-xl mx-auto my-4 max-md:my-2"
      />
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="list-disc">{children}</li>,
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
  marks: {
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
          className="text-blue-400 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

const page = async ({ params }) => {
  const data = await fetchPosts(params.slug);
  const postBody = data[0].body;

  return (
    <ScrollArea className="h-full max-w-2xl px-4 max-md:h-[750px] rounded-md border py-4 max-md:py-2 mx-auto animate-pop max-md:text-sm max-md:px-3">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold my-1 max-md:text-lg tracking-wide text-center">
          {data[0].title}
        </h1>
        <p className="text-sm max-md:text-xs text-neutral-400 my-1">
          {format(data[0].publishedAt, "eeee")}{" "}
          {format(data[0].publishedAt, "dd.MM.yyyy")}
        </p>
        <div>
          <Image
            src={`${data[0].mainImage.asset.url}`}
            height={200}
            width={400}
            alt="Main Image"
            className="rounded-xl my-4 max-md:my-2"
          />
        </div>
      </div>
      <div className="leading-relaxed text-justify">
        <PortableText
          value={postBody}
          components={components}
          className="max-md:text-sm"
        />
      </div>
    </ScrollArea>
  );
};
export default page;
