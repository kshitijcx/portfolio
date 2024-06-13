import { ScrollArea } from "@/components/ui/scroll-area";
import LatestBlogsSingleItems from "../_components/LatestBlogsSingleItems";

const Blog = () => {
  return (
    <ScrollArea className="max-w-3xl mx-auto h-[500px] rounded-md border p-4">
      <div className="flex flex-col gap-2 mx-auto max-w-xl">
        <LatestBlogsSingleItems />
        <LatestBlogsSingleItems />
        <LatestBlogsSingleItems />
        <LatestBlogsSingleItems />
        <LatestBlogsSingleItems />
        <LatestBlogsSingleItems />
      </div>
    </ScrollArea>
  );
};
export default Blog;
