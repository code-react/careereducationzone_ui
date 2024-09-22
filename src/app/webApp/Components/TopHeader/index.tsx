import React, { useState } from "react";
import style from "./TopHeader.module.scss";
function TopHeader() {
  return (
    <>
      <div className={style.main_wrapper}>
        <div className={`${style.container} container`}>
          <span>Notification</span>
          <span>Notification</span>
          <span>Notification</span>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
