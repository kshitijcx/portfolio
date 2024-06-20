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
import { revalidatePath } from "next/cache";

const fetchTop3 = async () => {
  const CONTENT_QUERY = `*[_type == "post"]{publishedAt,title,slug,mainImage{asset->{path,url}}}|order(publishedAt desc)[0..2]`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
};

const LatestBlogs = async () => {
  revalidatePath("/");
  const data = await fetchTop3();

  return (
    <Card className="md:h-full">
      <CardHeader className="max-md:h-20 max-md:py-3">
        <CardTitle className="text-2xl font-semibold max-md:text-base tracking-wide">
          Latest Posts
        </CardTitle>
        <CardDescription className="tracking-wide max-md:text-xs">
          Welcome, feel free to read anything you like...
        </CardDescription>
      </CardHeader>
      <CardContent className="px-12 max-md:px-2 flex flex-col gap-2 max-md:py-2">
        {data.map((item) => (
          <LatestBlogsSingleItems key="item._id" item={item} />
        ))}
      </CardContent>
      <CardFooter className="max-md:py-2">
        <p className="text-sm max-md:text-xs hover:underline">
          <Link href="/blog">Read More...</Link>
        </p>
      </CardFooter>
    </Card>
  );
};
export default LatestBlogs;
