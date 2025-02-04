import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/rtxd22"
          p="Web Developer"
        />
        <ProjectCard
          src={freshBurger}
          link="https://instagram.com/riyannntr/post"
          p="Design"
        />
        <ProjectCard
          src={hipsster}
          link="https://youtube.com/riyantr13"
          p="Video Editor"
        />
      </div>
    </section>
  );
}

export default Projects;
