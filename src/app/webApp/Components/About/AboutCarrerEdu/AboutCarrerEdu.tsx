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
        Welcome to Career Education Zone, your trusted partner in achieving your academic and professional goals. We aim to provide a seamless and engaging learning experience by offering top-notch resources, expert guidance, and innovative learning solutions.
        </p>

        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {[
            { icon: <Crown />, title: "Personalized Learning", desc:"Tailored programs to meet your unique learning needs." },
            { icon: <Users />, title: "Expert Mentorship", desc:"Guidance from industry leaders and seasoned educators." },
            { icon: <Briefcase />, title: "Flexible Online Platform", desc:"Access courses anytime, anywhere, at your convenience." },
            { icon: <Target />, title: "Comprehensive Resources", desc:"Over 200+ live sessions, tools, and study materials." },
          ].map((item, index) => (
            <div key={index} className={styles.listItem}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <div className={styles.textWrapper}>
                <h3 className={styles.heading}>{item.title}</h3>
                <p className={styles.subText}>{item.desc}
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
