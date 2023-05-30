import "./skills.css"
import { skills1,skills2, skills3 } from "../../data/Skills"

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="section__heading">Skills</h2>

      <div className="skills__icons">
        {skills1.map((skill) => (
          <i class={skill.iconClass} key={skill.name}></i>
        ))}
      </div>
      <div className="skills__icons">
        {skills2.map((skill) => (
          (skill.name=="PHASER")?<img src="https://w7.pngwing.com/pngs/852/796/png-transparent-computer-icons-phaser-star-trek-symbol-miscellaneous-angle-black-thumbnail.png" alt="Phaser" />:
          <i class={skill.iconClass} key={skill.name}></i>
        ))}
      </div>
      <div className="skills__icons">
        {skills3.map((skill) => (
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
