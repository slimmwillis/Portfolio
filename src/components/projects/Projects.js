import { useState } from "react"
import ProjectModal from "./ProjectModal"
import "./projects.css"
import { projects } from "../../data/projects"

const Projects = () => {
  const [showModal, setShowModal] = useState(false)
  const [project, setProject] = useState(null)

  return (
    <div className="projects">
      <h2 className="section__heading">Projects</h2>

      <div className="projects__list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project__img">
              <img src={project.image} />
            </div>
            <div className="project__overlay">
              <button
                onClick={() => {
                  setShowModal(true)
                  setProject(project)
                }}
                className="btn"
              >
                View Detail
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <ProjectModal setShowModal={setShowModal} project={project} />
      )}
    </div>
  )
}

export default Projects
