import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")}  className={styles.imm}alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p className={styles.pera}>
              I'm a frontend developer skilled in HTML, CSS, JavaScript, and frameworks like React, I create 20+ responsive & optimized sites 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} className={styles.imm} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p className={styles.pera}>
              I'm a backend developer with expertise in building robust APIs using Node.js and integrating MongoDB for scalable data storage.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} className={styles.imm} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p className={styles.pera}>
                
              UI designer with a passion for crafting visually stunning and user-friendly interfaces. Proficient in design tools like Adobe XD, Figma .I've created 20+ intuitive and responsive UI designs 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
