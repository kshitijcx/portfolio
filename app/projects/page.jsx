import ProjectCard from "./_components/ProjectCard";

const projectArr = [
  {
    name: "FileBank",
    techstack:
      "NextJs, React, Appwrite, shadcn, Tailwind CSS",
    content:
      "Developed a web application that allows users to easily upload, store and manage their files. Users can also share the uploaded files with other users.",
    link: "https://file-bank.vercel.app",
    glink: "https://github.com/kshitijcx/file-bank",
  },
  {
    name: "BlogPress",
    techstack: "NextJs, React, Appwrite, Tailwind CSS",
    content:
      "Developed a blogging site where users can create, edit posts and also view posts by other users.",
    link: "https://blogpress-alpha.vercel.app/",
    glink:"https://github.com/kshitijcx/blogpress",
  },{
    name: "RollCall",
    techstack: "NextJs, React, Clerk, Neon Postgres, Drizzle ORM, shacn, Tailwind CSS",
    content:
      "Developed a web application that makes the entire process of recording student attendance easy.",
    link: "https://rollcallx.vercel.app/",
    glink: "https://github.com/kshitijcx/student-attendance-system",
  },
  {
    name: "AI Chat",
    techstack: "NextJs, React, Gemini API, Tailwind CSS",
    content:
      "Developed an A.I. chat app that allows the user to ask question and receive answers.",
    link: "https://geminiclonex.vercel.app/",
    glink: "https://github.com/kshi7ijcx/ai-chat",
  }
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
