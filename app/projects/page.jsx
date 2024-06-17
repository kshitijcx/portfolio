import ProjectCard from "./_components/ProjectCard"

const projectArr = [
  {
    name: "BlogPress",
    techstack: "NextJs, React, Tailwind, Appwrite",
    link: "Live Soon...",
    glink: ""
  },
  {
    name: "Student Attendence System",
    techstack: "NextJs, React, Tailwind, Neon Postgres, Drizzle ORM"
  },
  {
    name: 
  },
  {

  }
]

const Projects = () => {
  return (
    <div className="grid grid-cols-3 gap-6 animate-pop max-md:flex flex-col">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
    </div>
  )
}
export default Projects