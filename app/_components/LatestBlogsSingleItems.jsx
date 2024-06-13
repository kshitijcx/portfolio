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
      <Card className="h-20">
        <CardHeader>
          <CardTitle>
            How to use Server Components in NextJs
          </CardTitle>
          <CardDescription className="text-xs">
            Wednesday 12/01/2024
          </CardDescription>
        </CardHeader>
      </Card>
  );
};
export default LatestBlogsSingleItems;
