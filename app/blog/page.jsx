import { ScrollArea } from "@/components/ui/scroll-area";
import { client } from "@/lib/sanity/client";
import FilterCompo from "./_components/FilterCompo";
import { revalidatePath } from "next/cache";

const fetchPosts = async () => {
  const CONTENT_QUERY = `*[_type == "post"]{title,slug,publishedAt,_id,mainImage{asset->{path,url}},categories[]->{title}} | order(publishedAt desc)`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
};

const Blog = async () => {
  revalidatePath("/blog");
  const data = await fetchPosts();
  return (
    <ScrollArea className="max-w-3xl mx-auto h-[500px] max-md:max-w-sm max-md:h-[675px] rounded-md border py-2 px-2 animate-pop">
      <FilterCompo data={data} />
    </ScrollArea>
  );
};
export default Blog;
