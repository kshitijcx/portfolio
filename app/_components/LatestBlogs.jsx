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

const LatestBlogs = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-3xl tracking-wide">Latest Posts</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="p-8">
        <LatestBlogsSingleItems/>
      </CardContent>
      <CardFooter>
        <p>Read More...</p>
      </CardFooter>
    </Card>
  );
};
export default LatestBlogs;
