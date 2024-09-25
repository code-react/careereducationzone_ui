import React from "react";
import style from "./choose.module.scss";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const reason: any = [
  {
    heading: "Flexible Learning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.",
  },
  {
    heading: "Expert Instructors",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.",
  },
  {
    heading: "Valid Certifications",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.",
  },
  {
    heading: "Comprehensive",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.",
  },
];

const ChooseUs = () => {
  return (
    <div className="container">
      <div className={style.choose_us_container}>
        <div className={style.choose_us_upper}>
          <h2 className={style.heading}>Why should you choose us?</h2>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. labore et
            dolore magna aliqua
          </p>
          <Link className={style.learn_more_btn} href={""}>
            Learn More
          </Link>
        </div>
        <div className={style.choose_us_lower}>
          {reason.map((item: any, index: any) => (
            <div className={style.reason_box} key={index}>
              <div className={style.circle}></div>
              <div className={style.box}>
                <h3 className={style.reason_heading}>{item.heading}</h3>
                <p className={style.reason_desc}>{item.desc}</p>
                <Link href={""} className={style.right_arrow}>
                  <p className={style.learn_text}>Learn More</p>
                  <GoArrowRight className={style.arrow_btn} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
