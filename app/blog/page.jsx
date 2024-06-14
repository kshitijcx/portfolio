import { ScrollArea } from "@/components/ui/scroll-area";
import BlogCard from "./_components/BlogCard";
import { client } from "@/lib/sanity/client";

const fetchPosts = async () => {
  const CONTENT_QUERY = `*[_type == "post"]{title,slug,publishedAt,_id,mainImage{asset->{path,url}},categories[]->{title}} | order(_createdAt desc)`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
};

const Blog = async () => {
  const data= await fetchPosts();
  console.log(data);
  console.log(data[1].categories)

  return (
    <ScrollArea className="max-w-3xl mx-auto h-[500px] rounded-md border p-4">
      <div className="flex flex-col gap-2 mx-auto max-w-xl">
        {data.map((item)=>(<BlogCard key={item._id} item={item}/>))}
      </div>
    </ScrollArea>
  );
};
export default Blog;
