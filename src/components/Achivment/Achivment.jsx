import React from "react";

import styles from "./Achivment.module.css";
import { getImageUrl } from "../../utils";

export const Achivment = () => {
  return (
    <section className={styles.container} id="achivment">
      <h2 className={styles.title}>Achivment</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("achivment/goal.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("achivment/goal.png")}  className={styles.imm}alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              {/* <h3>Frontend Developer</h3> */}
              <p className={styles.pera}>
              Successfully Completed a MERN Stack
         course on Udemy, further enhancing my
           knowledge in this area
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("achivment/badge.png")} className={styles.imm} alt="Server icon" />
            <div className={styles.aboutItemText}>
              {/* <h3>Backend Developer</h3> */}
              <p className={styles.pera}>
              Certificate in FULL STACK Development
issued by DevTown on successful compltione of FULL STACK Training
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("achivment/trophy.png")} className={styles.imm} alt="UI icon" />
            <div className={styles.aboutItemText}>
              {/* <h3>UI Designer</h3> */}
              <p className={styles.pera}>
                
              Successfully solved 600+ problems on various coding platforms, highlighting perseverance, dedication, and continuous learning (Codeforces,Codestudio,leedcode)
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
