import React from "react";
import styles from "./AboutStats.module.scss";
import { Crown, Users, Briefcase, Target } from "lucide-react";

const AboutStats = () => {
  return (
    <div className={styles.statsSection}>
      <div className={`container ${styles.gridContainer1}`}>
        {[
          {
            number: "98%",
            label: "Success score\non Upwork",
            icon: <Target />,
          },
          {
            number: "400+",
            label: "Completed Project",
            icon: <Briefcase />,
          },
          {
            number: "12+",
            label: "Year of Experience",
            icon: <Crown />,
          },
          {
            number: "150+",
            label: "Client Worldwide",
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
