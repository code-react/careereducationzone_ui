import React from "react";
import style from "./choose.module.scss";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const reason: any = [
  {
    heading: "Flexible Learning",
    desc: "Access courses anytime, anywhere, and at your own pace.",
  },
  {
    heading: "Expert Instructors",
    desc: "Learn from industry-leading experts and professionals.",
  },
  {
    heading: "Valid Certifications",
    desc: "Earn certifications recognized globally.",
  },
  {
    heading: "Comprehensive",
    desc: "Get complete guidance to help you achieve your goals.",
  },
];

const ChooseUs = () => {
  return (
    <div className="container">
      <div className={style.choose_us_container}>
        <div className={style.choose_us_upper}>
          <h2 className={style.heading}>Why should you choose us?</h2>
          <p className={style.desc}>
            Career Education Zone consultant provides the best admission counseling possible to aspiring college& graduate students.
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
