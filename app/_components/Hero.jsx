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
    <Card className="md:h-full">
      <CardHeader className="py-5">
        <CardTitle className="text-3xl max-md:text-base font-semibold tracking-wide leading-normal">
          Kshitij Chauhan
        </CardTitle>
        <CardDescription className="max-md:text-xs">
          Creative and passionate Full-Stack <span className="underline underline-offset-2">Software Engineer</span><br/>
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="flex gap-2 mt-6 justify-end max-md:justify-center max-md:px-2">
        <Button variant="secondary" className="max-md:h-8 max-md:w-12">
          <GitHubLogoIcon className="max-md:w-20 max-md:h-20 h-5 w-5" />
        </Button>
        <Button variant="secondary" className="max-md:h-8 max-md:w-12">
          <LinkedInLogoIcon className="max-md:w-20 max-md:h-20 h-5 w-5" />
        </Button>
        <Button variant="secondary" className="max-md:h-8 max-md:w-12">
          <InstagramLogoIcon className="max-md:w-20 max-md:h-20 h-5 w-5" />
        </Button>
      </CardContent>
    </Card>
  );
};
export default Hero;
