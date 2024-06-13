import { ScrollArea } from "@/components/ui/scroll-area";
import BlogCard from "./_components/BlogCard";

const Blog = () => {
  return (
    <ScrollArea className="max-w-3xl mx-auto h-[500px] rounded-md border p-4">
      <div className="flex flex-col gap-2 mx-auto max-w-xl">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </ScrollArea>
  );
};
export default Blog;
