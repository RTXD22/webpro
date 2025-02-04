import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Design uten navn.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import facebookLight from "../../assets/fb-light.svg";
import facebookDark from "../../assets/fb-dark.svg";
import githubLight from "../../assets/gh-light.svg";
import githubDark from "../../assets/gh-dark.svg";
import instagramLight from "../../assets/ig-light.svg";
import instagramDark from "../../assets/ig-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const facebookIcon = theme === "light" ? facebookLight : facebookDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Tri Agus Santoso</h1>
        <h2>Frontend Developer</h2>
        <p className={styles.description}>
          I'm Junior Developer from Madiun, East Java, Indonesia. I'm
          self-learning person who is interested in developing Website.
        </p>

        <span>
          <a href="https://facebook.com/asweissman" target="">
            <img src={facebookIcon} alt="Facebook icon" />
          </a>
          <a href="https://github.com/rtxd22" target="">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://instagram.com/riyannntr" target="">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
