/**
 * @description title for each section that accept text of the title as prop
 * @param {string} : title
 */

import React from "react";

// styled components
import { SectionBar, TitleText } from "../../../styles/utility/sectionTitle";
const SectionTitle = ({ title, bgColor, width }) => {
  return (
    <>
      <SectionBar>
        <TitleText bgColor={bgColor} width={width}>
          {title}
        </TitleText>
      </SectionBar>
    </>
  );
};

export default SectionTitle;
