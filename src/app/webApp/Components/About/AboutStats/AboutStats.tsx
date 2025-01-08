import React from "react";
import styles from "./AboutStats.module.scss";
import { Crown, Users, Briefcase, Target } from "lucide-react";

const AboutStats = () => {
  return (
    <div className={styles.statsSection}>
      <div className={`container ${styles.gridContainer1}`}>
        {[
          {
            number: "9,220+",
            label: "Successful Admission",
            icon: <Target />,
          },
        
          {
            number: "100+",
            label: "Colleges Tie-Up",
            icon: <Briefcase />,
          },
          {
            number: "10+",
            label: "Year of Experience",
            icon: <Crown />,
          },
          {
            number: "50+",
            label: "Expert Consulter",
            icon: <Users />,
          },
        ].map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.iconWrapper}>{stat.icon}</div>
            <div className={styles.statNumber}>{stat.number}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutStats;
