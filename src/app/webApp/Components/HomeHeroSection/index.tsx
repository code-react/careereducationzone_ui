"use client";
import React from "react";
import Image from "next/image";
import style from "./homehero.module.scss";

const learnerImg: string[] = ["/assets/Home/learner/1.svg", "/assets/Home/learner/2.svg", "/assets/Home/learner/3.svg", "/assets/Home/learner/4.svg"];

function HomeHeroSection() {
  return (
    <div className={style.main_section}>
      <div className={style.content}>
        <div className={style.text_content}>
          <div className={style.label}>
            <span>Career Education Zone</span>
          </div>
          <h1>Unlock Your Potential with Online Learning</h1>
          <p className={style.sub_desc}>
            Discover a world of knowledge and opportunities with our online education platform, and pursue a new career.
          </p>
          <div className={style.actions}>
            <button className={style.view_courses_btn}>View All Courses</button>
            <div className={style.students}>
              <div className={style.learner_box}>
                {learnerImg.map((item: any, index: any) => (
                  <Image src={item} alt="students" className={style.learner_img} height={100} width={100} key={index} />
                ))}
              </div>
              {/* <img src="/assets/Home/student1.svg" alt="students" /> */}
              <div className={style.learner_desc}>
                <span>2k+ Students</span>
                <p>Join our online classes</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.image_wrapper}>
          <Image src="/assets/Home/hero_img.png" alt="Students" width={400} height={400} priority />
        </div>
      </div>
    </div>
  );
}

export default HomeHeroSection;
