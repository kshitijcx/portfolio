import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const LatestBlogsSingleItems = () => {
  return (
    <div className="max-w-2xl">
      <Card className="flex gap-5 h-24">
        <div className="flex justify-center items-center">
          <Image
            src="/car.jpg"
            height={100}
            width={100}
            alt="Blog Post Image"
            className="pl-2 rounded-2xl"
          />
        </div>
        <div className="">
          <CardHeader className="m-0 p-0">
            <CardTitle className="m-0 p-0 text-lg">Post 1</CardTitle>
            <CardDescription className="m-0 p-0">Wednesday 12/01/2024</CardDescription>
          </CardHeader>
          <CardFooter className="m-0 p-0 flex gap-2">
            <Badge>Tech</Badge>
            <Badge>WebD</Badge>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};
export default LatestBlogsSingleItems;
