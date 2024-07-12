import { Tier } from "../common";
import IndividualTier from "./IndividualTier";

interface Props {
  tiers: Tier[];
}

const TierList = ({ tiers }: Props) => {
  return (
    <div>
      {tiers.map((tier) => (
        <IndividualTier tier={tier} />
      ))}
    </div>
  );
};

export default TierList;
