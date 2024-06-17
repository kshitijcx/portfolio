import { ScrollArea } from "@/components/ui/scroll-area";
import { client } from "@/lib/sanity/client";
import FilterCompo from "./_components/FilterCompo";

const fetchPosts = async () => {
  const CONTENT_QUERY = `*[_type == "post"]{title,slug,publishedAt,_id,mainImage{asset->{path,url}},categories[]->{title}} | order(publishedAt desc)`;
  const content = await client.fetch(CONTENT_QUERY,{next:{revalidate:5}});
  return content;
};

const Blog = async () => {
  const data= await fetchPosts();
  return (
    <ScrollArea className="max-w-3xl mx-auto md:h-[500px] max-h-[700px] rounded-md border p-4 animate-pop">
      <FilterCompo data={data} />
    </ScrollArea>
  );
};
export default Blog;
