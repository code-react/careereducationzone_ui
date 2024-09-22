import React from "react";
import Image from "next/image";
import style from "./homehero.module.scss";

function HomeHeroSection() {
  return (
    <div className={style.main_section}>
      <div className={style.content}>
        <div className={style.text_content}>
          <div className={style.label}>
            <span>Career Education Zone</span>
          </div>
          <h1>Unlock Your Potential with Online Learning</h1>
          <p>Discover a world of knowledge and opportunities with our online education platform, and pursue a new career.</p>
          <div className={style.actions}>
            <button className={style.view_courses_btn}>View All Courses</button>
            <div className={style.students}>
              <img src="/assets/Home/student1.svg" alt="students" />
              <span>2k+ Students</span>
              <p>Join our online classes</p>
            </div>
          </div>
        </div>
        <div className={style.image_wrapper}>
          <Image
            src="/assets/new/girls_boys.svg"
            alt="Students"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default HomeHeroSection;
