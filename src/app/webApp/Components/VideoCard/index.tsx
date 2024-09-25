"use client";
import React from "react";
import style from "./video.module.scss";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";

const functionality: string[] = ["Powerful Learning Management System", "Effortlessly Manage Courses", "Easily Sell Courses Online"];

const VideoCard = () => {
  return (
    <div className="container">
      <div className={style.main_container}>
        <h2 className={style.heading}>A Complete Solution For You</h2>
        <div className={style.video_container}>
          <Image src={"/assets/Home/video_cover.png"} alt="video_poster" height={1000} width={1000} className={style.video_poster} />
          <FaCirclePlay className={style.play_btn} />
        </div>
        <div className={style.function_container}>
          {functionality.map((item: string, index: any) => (
            <div className={style.function_card} key={index}>
              <IoIosCheckmarkCircle className={style.check_icon} />
              <p className={style.item}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
