import "./skills.css"
import { skills1,skills2, skills3 } from "../../data/skills.js"

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
          // (skill.name=="PHASER")?<img src="images\Phaser.png" alt="Phaser" width="50px" height="50px"/>:
          <i class={skill.iconClass} key={skill.name}></i>
        ))}
      </div>
      <div className="skills__icons">
        {skills3.map((skill) => (
                    (skill.name=="PHASER")?<img src="images\Phaser.png" alt="Phaser" width="150px" height="150px" style={{marginTop:"-25px"}}/>:

          <i class={skill.iconClass} key={skill.name}></i>
        ))}
      </div>

      <div className="skills__icons imag2">
          {/* <div className="UNITY"> */}
            
          <img src="/images/UNITY.png" width="300px" height="100px" alt="logo" class="UNITYcenter"/>
        
          {/* <div className="HTML5GAMES"> */}

          <img src="/images/HTML5GAMES.png" width="300px" height="100px" alt="logo" class="HTMLcenter"/>

          {/* </div> */}
          </div>

    </div>
  )
}

export default Skills
