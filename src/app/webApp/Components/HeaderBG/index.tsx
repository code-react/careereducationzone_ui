import React from "react";
import styles from "./headerBG.module.scss";

const HeaderBG= () => {


  return (
    <div className={styles.header_bg}>
      <div className="row">
        <div className="col-12 col-sm-12">
          <div className={`text-center ${styles.inner}`}>
            <h1>Notification</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBG;
