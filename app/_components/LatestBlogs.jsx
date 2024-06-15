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

const fetchTop3 = async () => {
  const CONTENT_QUERY = `*[_type == "post"][0..2]{publishedAt,title,slug,_id}`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
};

const LatestBlogs = async () => {
  const data = await fetchTop3();

  return (
    <Card className="md:h-full">
      <CardHeader>
        <CardTitle className="text-3xl tracking-wide">Latest Posts</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="px-12 py-4 flex flex-col gap-2">
        {data.map((item) => (
          <LatestBlogsSingleItems key="item._id" item={item} />
        ))}
      </CardContent>
      <CardFooter>
        <p>Read More...</p>
      </CardFooter>
    </Card>
  );
};
export default LatestBlogs;
