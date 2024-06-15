import { client } from "@/lib/sanity/client";

const fetchPosts = async (val) => {
  const CONTENT_QUERY = `*[_type=='post' && slug.current =="${val}"]{title,slug,publishedAt,_id,mainImage{asset->{path,url}},body}`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
};

const page = async ({ params }) => { 
  const data=await fetchPosts(params.slug);
  const postBody=data[0].body[0].children[0].text
  console.log(postBody);

  return <div>{postBody}</div>;
};
export default page;
