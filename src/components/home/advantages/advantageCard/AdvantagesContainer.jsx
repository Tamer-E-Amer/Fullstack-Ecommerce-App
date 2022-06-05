/**
 * @description contains the four advantages of the site under the banner
 */
import React from "react";
import AdvantageCard from "./AdvantageCard";
// styled components
import { AdvantagesWrapper } from "../../../../styles/home/advantages";
// advantage data
import { advantages } from "../../../../data/advantages";
const AdvantagesContainer = () => {
  const advCards = advantages.map((card) => {
    return <AdvantageCard key={card.id} advantageData={card} />;
  });
  return <AdvantagesWrapper spacing={2}>{advCards}</AdvantagesWrapper>;
};

export default AdvantagesContainer;
