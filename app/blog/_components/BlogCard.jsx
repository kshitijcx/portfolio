'use client'
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const BlogCard = ({ item,filterFxn }) => {
  return (
    <Card className="flex items-center px-6 py-1"> 
      <div className="w-32 max-md:hidden">
        <Image
          src={item.mainImage.asset.url}
          width={100}
          height={100}
          alt="Blog Post Image"
          className="rounded-lg"
        />
      </div>
      <div>
        <CardHeader className="px-4 py-0 h-12">
          <CardTitle className="text-lg max-md:text-base">{item.title}</CardTitle>
          <CardDescription className="text-xs max-md:text-[8px]">
            {format(item.publishedAt, "eeee")}{" "}
            {format(item.publishedAt, "dd.MM.yyyy")}
          </CardDescription>
        </CardHeader>
        <CardFooter className="px-4 py-2 text-xs space-x-1">
          {item.categories.map((cat,index)=>(<Badge className="text-xs" key={index} onClick={()=>filterFxn(cat.title)}>{cat.title}</Badge>))}
        </CardFooter>
      </div>
    </Card>
  );
};
export default BlogCard;
