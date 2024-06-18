import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LatestBlogsSingleItems from "./LatestBlogsSingleItems";
import { client } from "@/lib/sanity/client";
import Link from "next/link";

const fetchTop3 = async () => {
  const CONTENT_QUERY = `*[_type == "post"]{publishedAt,title,slug,mainImage{asset->{path,url}}}|order(publishedAt desc)[0..2]`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
};

export const revalidate = 1000;

const LatestBlogs = async () => {
  const data = await fetchTop3();

  return (
    <Card className="md:h-full">
      <CardHeader className="max-md:h-20">
        <CardTitle className="text-2xl font-semibold max-md:text-base tracking-wide">
          Latest Posts
        </CardTitle>
        <CardDescription className="tracking-wide max-md:text-xs">
          Welcome, feel free to read anything you like...
        </CardDescription>
      </CardHeader>
      <CardContent className="px-12 max-md:px-6 max-md:py-4 flex flex-col gap-2">
        {data.map((item) => (
          <LatestBlogsSingleItems key="item._id" item={item} />
        ))}
      </CardContent>
      <CardFooter className="">
        <p className="text-sm max-md:text-xs hover:underline">
          <Link href="/blog">Read More...</Link>
        </p>
      </CardFooter>
    </Card>
  );
};
export default LatestBlogs;
