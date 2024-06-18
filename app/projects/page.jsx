import ProjectCard from "./_components/ProjectCard";

const projectArr = [
  {
    name: "BlogPress",
    techstack: "NextJs, React, Tailwind, Javascript, Appwrite",
    content:
      "Blogging site where users can create an account, create/edit their posts and read posts by other users.",
    link: "Live Soon...",
    glink: "https://github.com/kshi7ijcx/student-attendance-system",
  },
  {
    name: "AI Chat",
    techstack: "NextJs, React, Tailwind, Typescript, OpenAI",
    content:
      "App similar to ChatGPT where users can interact with AI to get answers.",
    link: "Live Soon...",
    glink: "https://github.com/kshi7ijcx/ai-chat",
  },
  {
    name: "Student Attendance System",
    techstack:
      "NextJs, React, shadcn, Tailwind, Javascript, Neon Postgres, Drizzle ORM",
    content:
      "Attendance platform that users to create list of students and mark their attendance, view previous attendance.",
    link: "Live Soon...",
    glink: "https://github.com/kshi7ijcx/blogpress",
  },
  {
    name: "Ticketing App",
    techstack: "NextJs, React, Tailwind, MongoDB",
    content:
      "Ticketing app that allows users to create/edit tasks, set priority levels, progress and mark them as complete once the task is done.",
    link: "Live Soon...",
    glink: "",
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-2 gap-6 animate-pop max-md:flex flex-col md:px-10">
      {projectArr.map((item, index) => (
        <ProjectCard item={item} key={index} />
      ))}
    </div>
  );
};
export default Projects;
