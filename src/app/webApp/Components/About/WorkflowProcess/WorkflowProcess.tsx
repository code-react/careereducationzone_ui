import React from "react";
import styles from "./WorkflowProcess.module.scss";
import Image from "next/image";

const WorkflowProcess = () => {
  return (
    <div className={`container ${styles.howWeWorkContainer}`}>
      <div className={styles.header}>
        <h2>How we work ?</h2>
        <p>We are awesome team having 17 year successful experience, let's see how together we build your dreams.</p>
      </div>

      <div className={styles.gridContainer}>
        <Image src={"/assets/about/2.png"} alt="2 image" height={400} width={1000} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
    </div>
  );
};

export default WorkflowProcess;
