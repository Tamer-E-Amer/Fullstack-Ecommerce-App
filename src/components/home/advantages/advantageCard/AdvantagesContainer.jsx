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
  // map throught advantage array to get advantage data and then pass it to the advantage card
  const advCards = advantages.map((card) => {
    return <AdvantageCard key={card.id} advantageData={card} />;
  });
  return (
    <AdvantagesWrapper spacing={2}>
      {/* advantage cards */}
      {advCards}
    </AdvantagesWrapper>
  );
};

export default AdvantagesContainer;
