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
import { LinkIcon } from "lucide-react"
import Link from "next/link"

const ProjectCard = ({item}) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="font-bold text-xl">{item.name}</CardTitle>
        <CardDescription className="text-xs tracking-wide">{item.techstack}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{item.content}</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-4">
        <Button variant="secondary"><Link href={item.glink}><GitHubLogoIcon className="w-4 h-4"/></Link></Button>
        <Button variant="secondary"><Link href={item.link}><LinkIcon className="w-4 h-4"/></Link></Button>
      </CardFooter>
    </Card>
  );
};
export default ProjectCard;
