"use client";
import { NextPage } from "next";
import Carousel from "react-bootstrap/Carousel";
import React from "react";
import style from "./Home.module.scss";
import Image from "next/image";

const Slider: NextPage<any> = (props) => {
  const { sliders } = props;

  return (
    <Carousel>
      {sliders?.storyData?.images &&
        sliders.storyData.images
          .filter((item: any) => item.status === true)
          .map((item: any, index: number) => {
            const imageUrl = item.image?.url || "/assets/images/slider/profile-cover.jpg";
            return (
              <Carousel.Item key={index}>
                <div className={style.Image_container}>
                  <Image src={imageUrl} alt="" fill={true} />
                </div>
              </Carousel.Item>
            );
          })}
    </Carousel>
  );
};

export default Slider;
