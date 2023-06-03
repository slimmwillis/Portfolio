import "./skills.css"
import "./float_shadow.css"
import { skills } from "../../data/skills.js"

const Skills = () => {
  return (
    <>
    {/* <a name="skills"></a> */}
    <div className="skills" id="skills" >
      <h2 className="section__heading" >Skills</h2>

      <div className="skills__icons">
        <div>
          {skills.slice(0, 4).map((skill) => (
          <i class={skill.iconClass} key={skill.name}></i>
        ))}
            </div>
            <div>
          {skills.slice(4, 7).map((skill) => (
          <i class={skill.iconClass} key={skill.name}></i>
        ))}
            </div>

        <div>
          {skills.slice(7, 10).map((skill) => (
            (skill.name=="PHASER")?<img src="images\Phaser.png" class="shadow" alt="Phaser" width="120px" height="120px"/>:
          <i class={skill.iconClass} key={skill.name}></i>
        ))}
            </div>        
        
      </div>
      {/* <div className="skills__icons">
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
      </div> */}

      {/* <div className="skills__icons imag2"> */}
          {/* <div className="UNITY"> */}
            
          {/* <img src="/images/UNITY.png" width="300px" height="100px" alt="logo" class="UNITYcenter"/> */}
        
          {/* <div className="HTML5GAMES"> */}

          {/* <img src="/images/HTML5GAMES.png" width="300px" height="100px" alt="logo" class="HTMLcenter"/> */}

          {/* </div> */}
          {/* </div> */}

    </div>
    </>
  )
}

export default Skills
