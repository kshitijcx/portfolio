import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Hero = () => {
  return (
    <Card>
      <CardHeader className="py-5">
        <CardTitle className="text-3xl font-semibold tracking-wide leading-normal">
          Kshitij Chauhan
        </CardTitle>
        <CardDescription>Creative, passionate and goal oriented Full-Stack Software Engineer.</CardDescription>
      </CardHeader>
      <Separator/>
      <CardContent className="flex gap-2 mt-6 justify-end">
        <Button variant="outline">
          <GitHubLogoIcon className="w-5 h-5" />
        </Button>
        <Button variant="outline">
          <LinkedInLogoIcon className="w-5 h-5" />
        </Button>
        <Button variant="outline">
          <InstagramLogoIcon className="w-5 h-5" />
        </Button>
      </CardContent>
    </Card>
  );
};
export default Hero;
