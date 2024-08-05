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
      <div className={styles.section_with_border}></div>
    </div>
  );
};

export default ResourcesTab;
