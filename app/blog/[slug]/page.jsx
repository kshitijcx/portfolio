import { client } from "@/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

const fetchPosts = async (val) => {
  const CONTENT_QUERY = `*[_type=='post' && slug.current =="${val}"]{title,slug,publishedAt,_id,mainImage{asset->{path,url}},body}`;
  const content = await client.fetch(CONTENT_QUERY, {
    next: { revalidate: 10 },
  });
  return content;
};

const builder = imageUrlBuilder(client);

const components = {
  types: {
    image: ({ value }) => (
      <Suspense
        fallback={<Loader2 className="animate-spin"/>}
      >
        <Image
          src={builder.image(value).url()}
          width={350}
          height={350}
          alt="body Image"
          className="rounded-xl mx-auto my-4"
        />
      </Suspense>
    ),
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <li className="list-disc">{children}</li>,

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    // Ex. 2: rendering a custom `link` annotation
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
  console.log(data);
  console.log(postBody);

  return (
    <ScrollArea className="max-w-4xl h-[550px] rounded-md border p-4 mx-auto animate-pop">
      <div className="w-[500px] mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold my-1">{data[0].title}</h1>
          <p className="text-sm max-md:text-xs text-neutral-400 my-1">
            {format(data[0].publishedAt, "eeee")}{" "}
            {format(data[0].publishedAt, "dd.MM.yyyy")}
          </p>
          <Image
            src={`${data[0].mainImage.asset.url}`}
            height={500}
            width={500}
            alt="Main Image"
            className="rounded-xl my-4"
          />
        </div>
        <div className="leading-relaxed">
          <PortableText value={postBody} components={components} />
        </div>
      </div>
    </ScrollArea>
  );
};
export default page;
