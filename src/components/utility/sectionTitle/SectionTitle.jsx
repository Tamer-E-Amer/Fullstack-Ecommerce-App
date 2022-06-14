/**
 * @description title for each section that accept text of the title as prop
 * @param {string} : title      // to set the text of the section title
 * @param {string} : bgColor   // to adjust the background of the title to be the same as the section background
 * @param {string} : width    // to adjust the width of the title according to number of words
 * @param {string} : display // to hide the title when we want to render only line without title
 */

import React from "react";

// styled components
import { SectionBar, TitleText } from "../../../styles/utility/sectionTitle";
const SectionTitle = ({ title, bgColor, width, display }) => {
  return (
    <>
      <SectionBar>
        <TitleText bgColor={bgColor} width={width} display={display}>
          {title}
        </TitleText>
      </SectionBar>
    </>
  );
};

export default SectionTitle;
