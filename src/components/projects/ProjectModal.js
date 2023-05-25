const ProjectModal = ({ setShowModal, project }) => {
  return (
    <div className="project-modal">
      <div className="project-modal__content">
        <button
          className="project-modal__close"
          onClick={() => setShowModal(false)}
        >
          X
        </button>

        <div className="project-modal__img">
          <img src={project?.image} />
        </div>

        <h3>{project?.title}</h3>

        <p>{project?.description}</p>
      </div>
    </div>
  )
}

export default ProjectModal
