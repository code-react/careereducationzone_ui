"use client";
import React from "react";
import "./TechnologyStack.css";
import { Card, Col, Row } from "react-bootstrap";

import Image from "next/image";

const courses = [
  { id: 1, name: "Accounting", courses: "02", icon: "/assets/Home/account_green.svg", bgColor: "#ECFDF3", border: "1px solid #6ADAB8" },
  { id: 2, name: "Accounting", courses: "02", icon: "/assets/Home/account_purple.svg", bgColor: "#F9F5FF", border: "1px solid #73027D" },
  { id: 3, name: "Accounting", courses: "02", icon: "/assets/Home/account_yellow.svg", bgColor: "#FFFAEB", border: "1px solid #988B00" },
  { id: 4, name: "Accounting", courses: "02", icon: "/assets/Home/account_blue.svg", bgColor: "#F0F9FF", border: "1px solid #0688B3" },
  { id: 5, name: "Accounting", courses: "02", icon: "/assets/Home/account_green.svg", bgColor: "#ECFDF3", border: "1px solid #6ADAB8" },
  { id: 6, name: "Accounting", courses: "02", icon: "/assets/Home/account_purple.svg", bgColor: "#F9F5FF", border: "1px solid #73027D" },
  { id: 7, name: "Accounting", courses: "02", icon: "/assets/Home/account_yellow.svg", bgColor: "#FFFAEB", border: "1px solid #988B00" },
  { id: 8, name: "Accounting", courses: "02", icon: "/assets/Home/account_blue.svg", bgColor: "#F0F9FF", border: "1px solid #0688B3" },
];

function TechnologyStackNew() {
  return (
    <div className="main_wrapper">
      <div className="container">
        <div className="title">
          <h3>Explore 2000+ Free Online Courses</h3>
          <p>You'll find something to spark your curiosity and enhance</p>
        </div>
        <div className="carousel_wrapper">
          {courses.map((course: any) => (
            <div key={course.id} className="carousel_box" style={{ background: course.bgColor, border: course.border, borderRadius: "0.6rem" }}>
              <Image src={course.icon} alt="icon" height={300} width={300} className="icon" />
              <div className="box">
                <h4>{course.name}</h4>
                <p>{course.courses} courses</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechnologyStackNew;
