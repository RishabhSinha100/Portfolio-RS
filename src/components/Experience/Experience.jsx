import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>

                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title}  className={styles.ling}/>
                </div>
                  {/* <a href={skill.link} className={styles.lin}> */}
                <p>{skill.title}</p>
                  {/* </a> */}
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3 className={styles.role}>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul className={styles.historybio}>
                    {historyItem.experiences.map((experience, id) => {
                      return <h4 className={styles.bio} key={id}>{experience}</h4>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
  
      </div>
    
    </section>
  );
};


// Add this in history .json file fore your experinces
// {
//   "role": "UI Designer",
//   "organisation": "Mirosoft",
//   "startDate": "Aug, 2021",
//   "endDate": "Aug, 2022",
//   "experiences": ["Worked on Windows 11", "Designed the control panel"],
//   "imageSrc": "history/dev2.png"
// },
// {
//   "role": "SWE Intern",
//   "organisation": "Netflix",
//   "startDate": "Apr, 2020",
//   "endDate": "Jun, 2020",
//   "experiences": [
//     "Worked on component library",
//     "Helped create UI components"
//   ],
//   "imageSrc": "history/netflix.png"
// }
