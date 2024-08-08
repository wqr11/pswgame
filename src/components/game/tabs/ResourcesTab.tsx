import BuyResource from "./etc/BuyResource";
import UpdatePoolProgress from "./etc/UpdatePoolProgress";
import ReferenceButton from "./ReferenceButton";

import styles from "@/styles/game/currentTab.module.css";

const ResourcesTab = () => {
  return (
    <div className={`${styles.tab_wrapper} flex flex-col gap-1`}>
      <div className="flex w-full justify-end">
        <ReferenceButton
          direction="fromRight"
          reference="This is the resource pool. It says how much resources are there for people to obtain."
        />
      </div>
      <div className={`${styles.section_with_border} relative`}>
        <div className="flex flex-col gap-[12px]">
          <div></div>
        </div>
        <div></div>
        <div className="flex flex-col items-end gap-2">
          <UpdatePoolProgress startTime={7200} remainingTime={5864} />
          <BuyResource />
        </div>
      </div>
    </div>
  );
};

export default ResourcesTab;
