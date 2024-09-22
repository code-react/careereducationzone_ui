import React from "react";
import "./TechnologyStack.css";
import { Card, Col, Row } from "react-bootstrap";
import Image from "next/image";

const courses = [
  { id: 1, name: "Accounting", courses: "02", icon: "./assets/Home/account_green.svg", bgColor: "#ECFDF3", border: "1px solid #6ADAB8" },
  { id: 2, name: "Accounting", courses: "02", icon: "./assets/Home/account_purple.svg", bgColor: "#F9F5FF", border: "1px solid #73027D" },
  { id: 3, name: "Accounting", courses: "02", icon: "./assets/Home/account_yellow.svg", bgColor: "#FFFAEB", border: "1px solid #988B00" },
  { id: 4, name: "Accounting", courses: "02", icon: "./assets/Home/account_blue.svg", bgColor: "#F0F9FF", border: "1px solid #0688B3" },
  { id: 5, name: "Accounting", courses: "02", icon: "./assets/Home/account_green.svg", bgColor: "#ECFDF3", border: "1px solid #6ADAB8" },
  { id: 6, name: "Accounting", courses: "02", icon: "./assets/Home/account_purple.svg", bgColor: "#F9F5FF", border: "1px solid #73027D" },
  { id: 7, name: "Accounting", courses: "02", icon: "./assets/Home/account_yellow.svg", bgColor: "#FFFAEB", border: "1px solid #988B00" },
  { id: 8, name: "Accounting", courses: "02", icon: "./assets/Home/account_blue.svg", bgColor: "#F0F9FF", border: "1px solid #0688B3" },
];

function TechnologyStackNew() {
  return (
    <div className="main_wrapper">
      <div className="container">
        <div className="title">
          <h3>Explore 2000+ Free Online Courses</h3>
          <p>You'll find something to spark your curiosity and enhance</p>
        </div>
        <div className="carousel-wrapper">
          <Row>
            {courses.slice(0, 4).map((course) => (
              <Col key={course.id} md={3}>
                <Card className="tech-card" style={{ backgroundColor: course.bgColor, border: course.border }}>
                  <div className="card-content">
                    <Image src={course.icon} height={60} width={60} alt="icon" />
                    <span className="title-head">
                      <p className="course-title">{course.name}</p>
                      <p className="course-count">{course.courses} courses</p>
                    </span>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            {courses.slice(4, 8).map((course) => (
              <Col key={course.id} md={3}>
                <Card className="tech-card" style={{ backgroundColor: course.bgColor, border: course.border }}>
                  <div className="card-content">
                    <Image src={course.icon} height={60} width={60} alt="icon" />
                    <span className="title-head">
                      <p className="course-title">{course.name}</p>
                      <p className="course-count">{course.courses} courses</p>
                    </span>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default TechnologyStackNew;
