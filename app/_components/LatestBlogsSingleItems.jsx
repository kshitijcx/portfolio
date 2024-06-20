import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const LatestBlogsSingleItems = ({ item }) => {
  const day = format(item.publishedAt, "eeee");
  const date = format(item.publishedAt, "dd.MM.yyyy");
  return (
    <Card className="flex items-center px-4 max-md:px-1 min-h-20">
      <div className="w-28 max-md:hidden">
        <Image
          src={item.mainImage.asset.url}
          width={100}
          height={100}
          alt="Blog Post Image"
          className="rounded-lg"
        />
      </div>
      <div>
        <CardHeader className="px-4 max-md:px-3 py-0 min-h-12">
          <CardTitle className="text-base max-md:text-sm max-md:font-medium">
            <Link
              href={`/blog/${item.slug.current}`}
              className="hover:underline"
              target="_blank"
            >
              {item.title}
            </Link>
          </CardTitle>
          <CardDescription className="text-xs max-md:text-[10px]">
            {day} {date}
          </CardDescription>
        </CardHeader>
      </div>
    </Card>
  );
};
export default LatestBlogsSingleItems;
