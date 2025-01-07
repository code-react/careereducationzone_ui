import styles from "./CareerEducation.module.scss";
import AboutCarrerEdu from "../webApp/Components/About/AboutCarrerEdu/AboutCarrerEdu";
import AboutStats from "../webApp/Components/About/AboutStats/AboutStats";
import AboutHero from "../webApp/Components/About/AboutHero/AboutHero";
import WorkflowProcess from "../webApp/Components/About/WorkflowProcess/WorkflowProcess";

export default function CareerEducation() {
  return (
    <div className={styles.container}>
      <AboutHero />
      <AboutCarrerEdu />
      <AboutStats />
      <WorkflowProcess />
    </div>
  );
}
