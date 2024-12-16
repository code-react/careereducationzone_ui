"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  Nav, Navbar, Offcanvas } from "react-bootstrap";
import styles from "./header.module.scss";
import TopHeader from "../TopHeader";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerClass, setHeaderClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (scrollPosition >= 150) {
        setHeaderClass("red-background fixed-header");
      } else {
        setHeaderClass("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      console.log("yes", window.innerWidth);
    } else {
      console.log("no", window.innerWidth);
    }
  });

  const [show, setShow] = useState(false);

  const pathname = usePathname();

  return (
    <React.Fragment>
      <TopHeader />
      <div className={`header ${scrollPosition ? headerClass : ""}`} style={{ zIndex: "9999999999" }}>
        <section className={`  ${styles.middle_top_menu} header`} style={{ borderBottom: "2px solid #DCDCDC" }}>
          <Navbar collapseOnSelect expand="lg" className="bg-body-light sticky-top">
            <div className={`container ${styles.navbar_header}`}>
              <Navbar.Brand>
                <Link href="/" className={styles.logo_wrapper}>
                  <img src="/assets/career_logo.png" alt="" width={150} height={60} />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setShow(!show)} className="d-lg-none" />
              <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" show={show}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    <Link href="/" className={styles.logo_wrapper}>
                      <img src="/assets/career_logo.png" alt="" width={150} height={60} />
                    </Link>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={styles.navbar_body}>
                  <Nav className={styles.navbar_nav}>
                    <Nav.Link as="span" className={pathname === "/" ? styles.active : ""}>
                      <Link href="/" passHref>
                        Home
                      </Link>
                    </Nav.Link>
                    <Nav.Link as="span" className={pathname === "/about" ? styles.active : ""}>
                      <Link href="/">About</Link>
                    </Nav.Link>
                    <Nav.Link as="span" className={pathname === "/call-letter" ? styles.active : ""}>
                      <Link href="/">Exams</Link>
                    </Nav.Link>
                    <Nav.Link as="span" className={pathname === "/portfolio" ? styles.active : ""}>
                      <Link href="/">Courses</Link>
                    </Nav.Link>
                    <Nav.Link as="span" className={pathname === "/call-letter" ? styles.active : ""}>
                      <Link href="/">Contact Us</Link>
                    </Nav.Link>
                  </Nav>
                  <div className={styles.login_btn}>
                    <Link href={"/"}>
                      <span>Sign in</span>
                    </Link>
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </Navbar>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Header;
