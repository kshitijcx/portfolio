import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import LatestBlogsSingleItems from "./LatestBlogsSingleItems";
import { client } from "@/lib/sanity/client";
import Link from "next/link";
import { revalidatePath } from "next/cache";

const fetchTop3 = async () => {
  // revalidatePath("/")
  const CONTENT_QUERY = `*[_type == "post"]{publishedAt,title,slug,_id}|order(publishedAt desc)[0..2]`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
};

const LatestBlogs = async () => {
  const data = await fetchTop3();

  return (
    <Card className="md:h-full">
      <CardHeader>
        <CardTitle className="text-3xl tracking-wide">Latest Posts</CardTitle>
        <CardDescription>Welcome, feel free to read anything you like...</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="px-12 py-6 flex flex-col gap-2">
        {data.map((item) => (
          <LatestBlogsSingleItems key="item._id" item={item} />
        ))}
      </CardContent>
      <Separator className="mb-6"/>
      <CardFooter className="">
        <p className="text-sm max-md:text-xs hover:underline"><Link href='/blog'>Read More...</Link></p>
      </CardFooter>
    </Card>
  );
};
export default LatestBlogs;
