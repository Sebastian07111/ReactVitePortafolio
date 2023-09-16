import './Projects.css'
import { ProjectCard } from './ProjectCard'
const projects = [
    {
        img: "",
        text: "Blueasy es un projecto base para un trabajo realizado",
        title:"BLUEASY",
        link: "https://github.com/Sebastian07111/BluEaisy.git"
    },
    {
        img: "",
        text: "Blueasy es un projecto base para un trabajo realizado",
        title:"BLUEASY",
        link: "https://github.com/Sebastian07111/BluEaisy.git"
    },
    {
        img: "",
        text: "Blueasy es un projecto base para un trabajo realizado",
        title:"BLUEASY",
        link: "https://github.com/Sebastian07111/BluEaisy.git"
    },
    {
        img: "",
        text: "Blueasy es un projecto base para un trabajo realizado",
        title:"BLUEASY",
        link: "https://github.com/Sebastian07111/BluEaisy.git"
    },
    {
        img: "",
        text: "Blueasy es un projecto base para un trabajo realizado",
        title:"BLUEASY",
        link: "https://github.com/Sebastian07111/BluEaisy.git"
    },



]

export const Projects = () => {
  return (
    <main className='mainParts'>
        <section className='ProjectBox'>
            {projects.map(el => {
                return <ProjectCard img={el.img} link={el.link} text={el.text} title={el.title}/>
            })}
        </section>
    </main>
  )
}
