import React from "react";
import styles from "../styles/Global";

const Button = ({ assetUrl, link, text, platform }) => {
  return (
    <div
      className={styles.btnBlack}
      onClick={() => window.open(link, "_blank")}
    >
      <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} />
      <div className="flex flex-col justify-start ml-4">
        <p
          className={`${styles.btnText} 
        font-normal text-xs`}
        >
          {text}
        </p>
        <p
          className={`${styles.btnText} 
       font-bold text-sm `}
        >
          {platform}
        </p>
      </div>
    </div>
  );
};

export default Button;
