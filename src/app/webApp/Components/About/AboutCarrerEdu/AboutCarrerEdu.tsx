import React from "react";
import styles from "./AboutCarrerEdu.module.scss";
import { Crown, Users, Briefcase, Target } from "lucide-react";
import Image from "next/image";

const AboutCarrerEdu = () => {
  return (
    <div className={`container ${styles.gridContainer}`}>
      <div className={styles.imageWrapper}>
        <Image src="/assets/about/1.png" alt="Person working on laptop" width={400} height={300} />
      </div>

      <div className={styles.textContent}>
        <h2 className={styles.title}>About career education Zone</h2>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>

        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {[
            { icon: <Crown />, title: "Heading" },
            { icon: <Users />, title: "Heading" },
            { icon: <Briefcase />, title: "Heading" },
            { icon: <Target />, title: "Heading" },
          ].map((item, index) => (
            <div key={index} className={styles.listItem}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <div className={styles.textWrapper}>
                <h3 className={styles.heading}>{item.title}</h3>
                <p className={styles.subText}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                  ever
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCarrerEdu;
