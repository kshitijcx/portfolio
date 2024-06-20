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
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

const Hero = () => {
  return (
    <Card className="md:h-full flex flex-col justify-between">
      <CardHeader className="max-md:py-3">
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
      <CardContent className="flex gap-2 justify-end max-md:justify-start max-md:px-6 max-md:pb-3 max-md:pt-2">
        <Link
          className={`${buttonVariants({ variant: "secondary" })} max-md:h-8 max-md:w-8 max-md:p-1`}
          href="https://github.com/kshi7ijcx"
        >
          <GitHubLogoIcon className="max-md:w-4 max-md:h-4 h-5 w-5" />
        </Link>
        <Link
          className={`${buttonVariants({ variant: "secondary" })} max-md:h-8 max-md:w-8 max-md:p-1`}
          href="https://www.linkedin.com/in/kshitij-chauhan-161444223/"
        >
          <LinkedInLogoIcon className="max-md:w-4 max-md:h-4 h-5 w-5" />
        </Link>
        <Link
          className={`${buttonVariants({ variant: "secondary" })} max-md:h-8 max-md:w-8 max-md:p-1`}
          href="https://www.instagram.com/kshitijcx/"
        >
          <InstagramLogoIcon className="max-md:w-4 max-md:h-4 h-5 w-5" />
        </Link>
      </CardContent>
    </Card>
  );
};
export default Hero;
