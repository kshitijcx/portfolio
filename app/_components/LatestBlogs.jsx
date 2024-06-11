import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const LatestBlogs = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-3xl tracking-wide">Latest Posts</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="p-8">
        <ul className="space-y-4">
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
          <li>Link 5</li>
        </ul>
      </CardContent>
      <CardFooter>
        <p>Read More...</p>
      </CardFooter>
    </Card>
  );
};
export default LatestBlogs;
