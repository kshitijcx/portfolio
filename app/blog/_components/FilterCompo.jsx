"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";
import { X } from "lucide-react";

const FilterCompo = ({ data }) => {
  const [filterItems, setFilterItems] = useState(data);
  const [filterTag, setFilterTag] = useState("");

  function filterFxn(cat) {
    setFilterTag(cat);
    const newItems = data.filter((item) => {
      let v = false;
      item.categories.map((c) => {
        if (c.title === cat) {
          v = true;
        }
      });
      return v;
    });
    setFilterItems(newItems);
  }

  return (
    <div>
      {filterTag && (
        <div className="text-sm mb-3 text-neutral-500 flex justify-center items-center gap-2">
          <p>Tag: </p>
          {filterTag}
          <X size={14}
            onClick={() => {
              setFilterItems(data);
              setFilterTag("");
            }}
            className="hover:-translate-y-[1.2px] hover: cursor-pointer hover:text-white"
          />{" "}
        </div>
      )}
      <div className="flex flex-col h-full gap-2 mx-auto max-w-xl">
        {filterItems.map((item) => (
          <BlogCard key={item._id} item={item} filterFxn={filterFxn} />
        ))}
      </div>
    </div>
  );
};
export default FilterCompo;
