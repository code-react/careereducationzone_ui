import React from "react";
import style from "./FooterNew.module.scss";
import { RiInstagramFill, RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import Link from "next/link";

function FooterNew() {
  return (
    <div className={style.main_footer_section}>
      <div className="container">
        <div className={style.footer_row}>
          <div className={style.footer_column}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/exam">Exam</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Exams */}
          <div className={style.footer_column}>
            <h3>Exams</h3>
            <ul>
              <li><Link href="/exam1">Exam 01</Link></li>
              <li><Link href="/exam2">Exam 02</Link></li>
              <li><Link href="/exam3">Exam 03</Link></li>
              <li><Link href="/exam4">Exam 04</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div className={style.footer_column}>
            <h3>Courses</h3>
            <ul>
              <li><Link href="/course1">Course 01</Link></li>
              <li><Link href="/course2">Course 02</Link></li>
              <li><Link href="/course3">Course 03</Link></li>
              <li><Link href="/course4">Course 04</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className={style.footer_column}>
            <h3>Resources</h3>
            <ul>
              <li><Link href="/tutorials">Tutorials</Link></li>
              <li><Link href="/solutions">Solutions</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/notifications">Notifications</Link></li>
            </ul>
          </div>

          {/* Privacy */}
          <div className={style.footer_column}>
            <h3>Privacy</h3>
            <ul>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/conditions">Conditions</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Logo */}
        <div className={style.footer_logo}>
          <img src="/path-to-logo.png" alt="Company Logo" />
        </div>

        {/* Copyright Text */}
        <div className={style.copy_right}>
          © {new Date().getFullYear()} Career Education Zone. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className={style.social_icons}>
          <Link href="https://www.facebook.com" className={style.icon_fb}><RiFacebookFill /></Link>
          <Link href="https://www.twitter.com" className={style.icon_twitter}><RiTwitterFill /></Link>
          <Link href="https://www.instagram.com" className={style.icon_instagram}><RiInstagramFill /></Link>
        </div>
      </div>
    </div>
  );
}

export default FooterNew;
