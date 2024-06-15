import ProjectCard from "./_components/ProjectCard"

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