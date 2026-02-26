import { useState } from "react";
function Skills() {
const [visible, setVisible] = useState(true);
return (
<section>
<button onClick={() => setVisible(!visible)}>
Show/Hide Skills
</button>
{visible && (
<section className="card" id="skillsSection">
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <ul>
        <li>Web Development</li>
        <ul>
          <li>Frontend</li>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <ul>
              <li>Backend</li>
            </ul>
          </ul>
        </ul>
      </ul>
    </section>
)}
</section>
);
}
export default Skills;