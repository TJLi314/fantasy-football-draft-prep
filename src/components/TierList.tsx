import { useSelector } from "react-redux";
import { Tier } from "../common";
import IndividualTier from "./IndividualTier";

const TierList = () => {
  const tiers = useSelector((state: any) => state.tiers) as Tier[];

  return (
    <div>
      {tiers.map((tier) => (
        <IndividualTier tier={tier} />
      ))}
    </div>
  );
};

export default TierList;
