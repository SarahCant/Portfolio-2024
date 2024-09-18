import Fade from "../components/Fade";

export default function Skills() {
  const fadeInRef = Fade();

  const skills = [
    { icon: "./img/icons/ai.png", name: "Meget øvet" },
    { icon: "./img/icons/figma.png", name: "Øvet" },
    { icon: "./img/icons/github.png", name: "Øvet" },
    { icon: "./img/icons/html.png", name: "Meget øvet" },
    { icon: "./img/icons/js.png", name: "Øvet" },
    { icon: "./img/icons/ps.png", name: "Øvet" },
    { icon: "./img/icons/react.png", name: "Let øvet" },
    { icon: "./img/icons/css.png", name: "Meget øvet" },
  ];

  return (
    <main className="skills">
      <section className="skills_container fade-section" ref={fadeInRef}>
        <h1 className="skills_heading">Kompetancer</h1>
        {skills.map((skill, index) => (
          <div key={index} className="skills_icon_wrapper">
            <img src={skill.icon} alt={skill.name} className="skills_icon" />
            <p className="skills_text">{skill.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
