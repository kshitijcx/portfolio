"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, SunMoon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Nav = () => {
  const { setTheme } = useTheme();
  return (
    <nav className="max-w-7xl mx-auto p-8 max-md:py-5 flex justify-between items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link href={"/"}>
            <DropdownMenuItem>Home</DropdownMenuItem>
          </Link>
          <Link href={"/blog"}>
            <DropdownMenuItem>Blog</DropdownMenuItem>
          </Link>
          <Link href={"/projects"}>
            <DropdownMenuItem>Projects</DropdownMenuItem>
          </Link>
          <Link href={"/profile"}>
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <SunMoon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
export default Nav;
