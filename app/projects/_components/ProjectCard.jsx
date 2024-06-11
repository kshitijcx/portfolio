import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "lucide-react"

const ProjectCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bold text-xl">Project 1</CardTitle>
        <CardDescription className="text-xs tracking-wide">NextJs, React, HTML, CSS, Javascript</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">This project showcases the future of humanity in form of self driving cars. Hello hello 123</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-4">
        <Button><GitHubLogoIcon className="w-4 h-4" /></Button>
        <Button><Link className="w-4 h-4"/></Button>
      </CardFooter>
    </Card>
  );
};
export default ProjectCard;
