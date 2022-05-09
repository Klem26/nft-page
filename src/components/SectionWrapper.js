import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";

const SectionWrapper = ({
  title,
  description,
  mockupImg,
  showBtn,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      } ${banner}`}
    >
      <div
        className={`flex item-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} 
          ${reverse ? "fedeRigthMini" : "fedeLeftMini"}
          ${reverse ? styles.textRight : styles.textLeft}
          `}
        >
          <h1
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.h1Text}`}
          >
            {title}
          </h1>
          <p
            className={`
           ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}
          >
            {description}
          </p>
          {showBtn && (
            <Button
              text=" View it on"
              assetUrl={assets.expo}
              platform="Expo Store"
              link="https://expo.dev/@klem26/react-native-nft-app?serviceType=classic&distribution=expo-go"
            />
          )}
        </div>

        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`
           ${reverse ? "fedeLeftMini" : "fedeRigthMini"}
          ${styles.sectionImg}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
