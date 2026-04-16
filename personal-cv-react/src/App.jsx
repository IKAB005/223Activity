import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./index.css";
import { useState } from "react";

function App() {
const [darkMode, setDarkMode] = useState(false);
return (
    <>
        <div className={darkMode ? "dark-mode" : ""}>
            <button onClick={() => setDarkMode(!darkMode)}>
            Toggle Dark Mode
        </button>
            <Header />
            <About />
            <Skills skills={skills} />
            <Education education={education} />
            <Contact />
        </div>
    </>
);
}
export default App;

const education = [
    {
        year: "2024",
        program: "BS Information Technology",
        school: "USTP"
    },
    {
        year: "2022",
        program: "Senior High School",
        school: "USTP"
    }
];

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];
        