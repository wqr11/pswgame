import BuyResource from "./etc/resources/BuyResource";
import UpdatePoolProgress from "./etc/resources/UpdatePoolProgress";
import ReferenceButton from "./etc/ReferenceButton";

import ResourcePool from "./etc/resources/ResourcePool";
import Resources from "./etc/resources/Resources";

import styles from "@/styles/game/currentTab.module.css";

export const ResourcesTab = () => {
  return (
    <div className={`${styles.tab_wrapper} flex flex-col gap-1`}>
      <div className="flex w-full justify-end">
        <ReferenceButton
          direction="fromRight"
          reference="This is the resource pool. It says how much resources are there for people to obtain."
        />
      </div>
      <div className={`${styles.section_with_border} relative overflow-y-auto`}>
        <ResourcePool
          resourcePool={7000000000}
          startResourcePool={12000000000}
        />
        <Resources />
        <div className="flex flex-col items-end gap-2">
          <UpdatePoolProgress startTime={9800} remainingTime={5378} />
          <BuyResource />
        </div>
      </div>
    </div>
  );
};
