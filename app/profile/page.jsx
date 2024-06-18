import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const skillsArr = [
  "NextJs",
  "React",
  "Tailwind",
  "Typescript",
  "Javascript",
  "NodeJs",
  "ExpressJs",
  "SQL & NoSQL DBs",
  "REST",
  "Git & Github",
  "HTML",
  "CSS",
  "C++",
];
const eduArr = [
  {
    qual: "Bachelor of Engineering, CSE",
    name: "Chadigarh University",
    year: "2021-2025",
    score: "8.5 CGPA",
  },
  {
    qual: "12th, CBSE",
    name: "Army Public School, Yol Cantt.",
    year: "2019-2020",
    score: "95%",
  },
  {
    qual: "10th, CBSE",
    name: "Army Public School, Yol Cantt.",
    year: "2017-2018",
    score: "91%",
  },
];

const About = () => {
  return (
    <div className="grid grid-cols-2 gap-2 tracking-wide animate-pop max-md:flex flex-col">
      <div className="col-span-2 flex items-center justify-center gap-6">
        <Image 
          src="/pic.jpg"
          className="rounded-full max-md:h-24 max-md:w-24"
          height={150}
          width={150}
          alt="Kshitij Chauhan"
        />
        <div>
          <h1 className="font-bold text-3xl max-md:text-xl">Kshitij Chauhan</h1>
          <p className="italic max-md:text-sm">B.E. Computer Science @ Chandigarh University</p>
        </div>
      </div>
      <div className="col-span-2 flex justify-center py-4 gap-4 max-md:flex-col">
        <Card>
          <CardHeader className="py-3">
            <CardTitle className="text-lg">Skills</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="px-4 columns-2 leading-loose">
              {skillsArr.map((item, idx) => (
                <li key={idx} className="list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-3">
            <CardTitle className="text-lg">Education</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-2 px-4">
              {eduArr.map((item, idx) => (
                <li className="list-disc" key={idx}>
                  <div className="flex gap-5 justify-between items-center">
                    <p className="md:font-semibold">{item.qual}</p>
                    <p className="text-xs max-md:hidden">{item.year}</p>
                  </div>
                  <p className="italic">{item.name}</p>
                  <p>{`score: ${item.score}`}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default About;
