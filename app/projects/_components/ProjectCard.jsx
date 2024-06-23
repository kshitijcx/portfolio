import { buttonVariants } from "@/components/ui/button"
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
    <Card className="flex flex-col justify-between tracking-wide">
      <CardHeader className="py-3">
        <CardTitle className="font-bold text-xl max-md:text-lg">{item.name}</CardTitle>
        <CardDescription className="text-xs">{item.techstack}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{item.content}</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-4">

      <Link
          className={`${buttonVariants({ variant: "secondary" })} max-md:h-8 max-md:w-8 max-md:p-1`}
          href={item.glink}
        >
          <GitHubLogoIcon className="max-md:w-4 max-md:h-4 h-5 w-5" />
        </Link>

        <Link
          className={`${buttonVariants({ variant: "secondary" })} max-md:h-8 max-md:w-8 max-md:p-1`}
          href={item.link}
        >
          <LinkIcon className="max-md:w-4 max-md:h-4 h-5 w-5" />
        </Link>
      </CardFooter>
    </Card>
  );
};
export default ProjectCard;
