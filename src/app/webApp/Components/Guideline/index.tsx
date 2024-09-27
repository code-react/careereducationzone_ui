"use client";
import React from "react";
import style from "./guideline.module.scss";
import Image from "next/image";

const Guideline = () => {
  return (
    <div className="container">
      <div className={style.guideline_container}>
        <div className={style.container}>
          <div className={style.box}>
            <div className={style.left}>
              <Image src={"/assets/Home/man.png"} alt="man" height={650} width={1000} className={style.man_img} />
              <div className={style.globe_box}>
                <Image src={"/assets/Home/globe.svg"} alt="man" height={1000} width={1000} className={style.globe_img} />
              </div>
            </div>
            <div className={style.right}>
              <h1 className={style.guide_heading}>A Proper Guideline Can Make Your Career Successful</h1>
              <p className={style.guide_desc}>
                Proin magna felis, tincidunt eget lectus id, maximus ultricies eros. Aliquam eu lacus vitae nulla faucibus mollis. Proin velit mi,
                molestie commodo neque laoreet a.Fusce cursus iaculis elit vitae auctor. Mauris venenatis vestibulum eros, sed turpis molestie ac.
                Nunc convallis nisi in maximus tincidunt.
              </p>
              <div className={style.founder_view}>
                <h3 className={style.founder_name}>Naushad Aalam</h3>
                <p className={style.founder_des}>Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guideline;
