"use client"
import { useState } from "react";
import BlogCard from "./BlogCard";

const FilterCompo = ({data}) => {
  const [filerItems, setFilterItems] = useState('');
  return (
    <div className="flex flex-col h-full gap-2 mx-auto max-w-xl">
      {data.map((item) => (
        <BlogCard key={item._id} item={item} setFilterItems={setFilterItems} />
      ))}
    </div>
  );
};
export default FilterCompo;
