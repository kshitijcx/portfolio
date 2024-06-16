import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import Link from "next/link";

const LatestBlogsSingleItems = ({item}) => {
  const day = format(item.publishedAt,'eeee');
  const date = format(item.publishedAt,'dd.MM.yyyy');
  return ( 
      <Card className="h-20">
        <CardHeader className="py-3">
          <CardTitle className="text-lg hover:underline">
            <Link href={`/blog/${item.slug.current}`}>{item.title}</Link>
          </CardTitle>
          <CardDescription className="text-xs">
            {day} {date}
          </CardDescription>
        </CardHeader>
      </Card>
  );
};
export default LatestBlogsSingleItems;
