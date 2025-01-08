"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import style from "./contact.module.scss";

export default function ContactForm() {
  return (
    <div className={style.contact_container}>
      {/* Left Panel - Contact Information */}
      <div className={style.contact_info}>
        <div className={style.content}>
          <div className={style.info_section}>
            <p className={style.label}>Email Address</p>
            <div className={style.info}>
              <Mail />
              <p>info@careereducationzone.com</p>
            </div>
          </div>

          <div className={style.info_section}>
            <p className={style.label}>Phone Number</p>
            <div className={style.info}>
              <Phone />
              <p>9905408865</p>
            </div>
          </div>

          <div className={style.info_section}>
            <p className={style.label}>Business Address</p>
            <div className={style.info}>
              <MapPin />
              <p>Naka no-3, Hajipur, Vaishali Bihar(844101)</p>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className={style.image_container}>
          <div className={style.gradient}></div>
          <img src="./assets/contact.png" alt="Contact representative" />
        </div>
      </div>

      {/* Right Panel - Contact Form */}
      <div className={style.contact_form}>
        <h2>Get in touch with us</h2>
        <div className={style.form}>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email Id" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Course" />
          <textarea name="" id="" placeholder="Message"></textarea>
        </div>
        <button className={style.submit_btn}>Submit</button>
      </div>
    </div>
  );
}
