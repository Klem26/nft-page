import React from "react";
import assets from "../assets";
import styles from "../styles/Global";
import Button from "./Button";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Source Code
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Get the full source code on GitHub
          </p>
          <Button
            platform="GitHub"
            className={styles.btnPrimary}
            assetUrl={assets.expo}
            link="https://github.com/Klem26/nft-page"
          />
        </div>

        <div className={styles.flexCenter}>
          <img
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
