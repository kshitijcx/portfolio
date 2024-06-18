import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <Card className="md:h-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-2xl max-md:text-base font-semibold tracking-wide leading-normal">
          Kshitij Chauhan
        </CardTitle>
        <CardDescription className="max-md:text-xs tracking-wide">
          Creative and passionate Full-Stack{" "}
          <span className="underline underline-offset-2">
            Software Engineer.{" "}
          </span>
          <br />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 justify-end max-md:justify-start max-md:px-6">
        <Button variant="secondary" className="max-md:h-8 max-md:w-12">
          <Link href="">
            <GitHubLogoIcon className="max-md:w-20 max-md:h-20 h-5 w-5" />
          </Link>
        </Button>
        <Button variant="secondary" className="max-md:h-8 max-md:w-12">
          <Link>
            <LinkedInLogoIcon className="max-md:w-20 max-md:h-20 h-5 w-5" />
          </Link>
        </Button>
        <Button variant="secondary" className="max-md:h-8 max-md:w-12">
          <Link>
            <InstagramLogoIcon className="max-md:w-20 max-md:h-20 h-5 w-5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
export default Hero;
