import { RefsApiData } from "@/shared/entities/referral/types";

import InviteQuests from "./invite-quests";

const Missions = ({
  title,
  refsData,
}: {
  title: string;
  refsData: RefsApiData;
}) => {
  return (
    <div className="mb-6 mt-5 flex flex-col gap-2">
      <h6 className="text-lg uppercase text-white">{title}</h6>
      <InviteQuests refsCount={refsData.data.referrals_count} />
    </div>
  );
};

export default Missions;
