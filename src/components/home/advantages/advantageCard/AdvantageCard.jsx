/**
 * @description card that describe the davantage of the Egymarket site
 * this card accept parameters of the advantage data
 * @param {string} -> advantageText
 * @param {string} -> advantageTitle
 * @param {Object} -> icon
 *
 */

import React from "react";
//mui component

// styled components
import {
  AdvantageCardWrapper,
  TextWrapper,
  Title,
  Description,
} from "../../../../styles/home/advantages";
// icons
const AdvantageCard = (props) => {
  return (
    <>
      <AdvantageCardWrapper elevation={3}>
        {/* icon */}
        {props.advantageData.icon}
        {/* advantage text */}
        <TextWrapper>
          <Title>{props.advantageData.advantageTitle}</Title>
          <Description>{props.advantageData.advantageText}</Description>
        </TextWrapper>
      </AdvantageCardWrapper>
    </>
  );
};

export default AdvantageCard;
