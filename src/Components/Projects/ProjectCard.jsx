import './ProjectCard.css'
export const ProjectCard = ({img, text, title, link}) => {

  return (
    <a href={link} className="ProjectCard" id='cardProject'>
        <img src={img} alt="" className='imageP' />
        <h2>{title}</h2>
        <p>{text}</p>
    </a>
  )
}
