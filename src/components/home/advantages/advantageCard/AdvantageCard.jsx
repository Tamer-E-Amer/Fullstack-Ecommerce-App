/**
 * @description card that describe the davantage of the Egymarket site
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
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { colors } from "../../../../themes/theme";
const AdvantageCard = (props) => {
  return (
    <>
      <AdvantageCardWrapper elevation={3}>
        {/* <LocalShippingIcon sx={{ fontSize: 60, color: colors.mid_gray }} /> */}
        {props.advantageData.icon}
        <TextWrapper>
          <Title>{props.advantageData.advantageTitle}</Title>
          <Description>{props.advantageData.advantageText}</Description>
        </TextWrapper>
      </AdvantageCardWrapper>
    </>
  );
};

export default AdvantageCard;
