import { useNavigate } from "react-router-dom";
import Fade from "../components/Fade";
import { useState, useEffect } from "react";

export default function Projects() {
  const fadeInRef = Fade();
  const navigate = useNavigate();

  const caseStudies = [
    {
      id: 1,
      imgSrc: [
        "./img/projects/astro1.png",
        "./img/projects/astro2.png",
        "./img/projects/astro3.png",
      ],
      link: "/astro",
    },
    { id: 2, imgSrc: "./img/projects/motor.png", link: "/motor" },
    {
      id: 3,
      imgSrc: [
        "./img/projects/tb1.png",
        "./img/projects/tb2.png",
        "./img/projects/tb3.png",
      ],
      link: "/tb",
    },
    { id: 4, imgSrc: "./img/projects/user.png", link: "/user" },
    {
      id: 5,
      imgSrc: [
        "./img/projects/todo1.png",
        "./img/projects/todo2.png",
        "./img/projects/todo3.png",
      ],
      link: "/todo",
    },
    {
      id: 6,
      imgSrc: "./img/projects/portfolio.png",
      githubLink: "https://github.com/SarahCant/Portfolio/tree/main/src", // GitHub link
    },
  ];

  // State and effect for img carousel
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3); // Change image every 1.8s
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  // Function to scroll to top + navigate to selected page or open external GitHub link
  const handleNavigation = (link, isExternal = false) => {
    if (isExternal) {
      window.open(link, "_blank"); // Open GitHub link in new tab
    } else {
      window.scrollTo(0, 0); // Scroll to top
      navigate(link); // Navigate to new page
    }
  };

  return (
    <main id="projects" className="projects">
      <section className="fade-section" ref={fadeInRef}>
        <div className="projects_grid">
          {caseStudies.map((study) => {
            const isCarousel = [1, 3, 5].includes(study.id); // Check if the study should have a carousel of images
            return (
              <div className="projects_grid_item" key={study.id}>
                <img
                  src={isCarousel ? study.imgSrc[currentImage] : study.imgSrc}
                  alt={`Project ${study.id}`}
                />
                <button
                  className="btn projects_grid_btn"
                  onClick={() => {
                    study.id === 6
                      ? handleNavigation(study.githubLink, true) // GitHub link
                      : handleNavigation(study.link); // Case Study link
                  }}
                >
                  {study.id === 6 ? "GitHub" : "Case Study"}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
