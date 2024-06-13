import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const BlogCard = () => {
  return (
    <Card className="flex items-center px-6 py-1">
      <div>
        <Image src="/car.jpg" width={100} height={100} alt="Blog Post Image" className="rounded-lg"/>
      </div>
      <div>
        <CardHeader className="px-4 py-1 h-14">
          <CardTitle className="text-lg">How to use Server Components in NextJs</CardTitle>
          <CardDescription className="text-xs">12.03.2024</CardDescription>
        </CardHeader>
        <CardFooter className="px-4 py-2 text-xs space-x-2">
            <Badge variant="secondary">NextJS</Badge>
            <Badge variant="secondary">Web</Badge>
        </CardFooter>
      </div>
    </Card>
  );
};
export default BlogCard;
