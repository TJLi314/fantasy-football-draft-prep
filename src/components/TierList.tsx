import { Tier } from "../common";
import IndividualTier from "./IndividualTier";

interface Props {
  tiers: Tier[];
}

const TierList = ({ tiers }: Props) => {
  // const tiers = useSelector((state: any) => state.tiers) as Tier[];

  return (
    <div>
      {tiers.map((tier) => (
        <IndividualTier tier={tier} />
      ))}
    </div>
  );
};

export default TierList;
