import "./skills.css"
import { skills } from "../../data/Skills"

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="section__heading">Skills</h2>

      <div className="skills__icons">
        {skills.map((skill) => (
          <i class={skill.iconClass} key={skill.name}></i>
        ))}
      </div>

      <div className="mainGameIcons">
          <div className="UNITY">
            
          <img src="/images/UNITY.png" alt="logo" class="UNITYcenter"/></div>
        
          <div className="HTML5GAMES">

          <img src="/images/HTML5GAMES.png" alt="logo" class="HTMLcenter"/>

          </div>
          </div>

    </div>
  )
}

export default Skills
