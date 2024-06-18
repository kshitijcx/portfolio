import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { SunIcon } from "@radix-ui/react-icons";

const Nav = () => {
  return (
    <nav className="max-w-7xl mx-auto p-8 max-md:px-8 flex justify-between items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
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
        <SunIcon className="w-5 h-5" />
        <Switch />
        <Moon size={20} />
      </div>
    </nav>
  );
};
export default Nav;
