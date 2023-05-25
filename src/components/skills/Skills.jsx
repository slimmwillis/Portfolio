import "./skills.css"
import { skills } from "../../data/skills"

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="section__heading">Skills</h2>

      <div className="skills__icons">
        {skills.map((skill) => (
          <i class={skill.iconClass} key={skill.name}></i>
        ))}
      </div>
    </div>
  )
}

export default Skills
