import styles from "@/styles/game/currentTab.module.css";
import ReferenceButton from "./ReferenceButton";

const AugmentationsTab = () => {
  return (
    <div className={styles.tab_wrapper}>
      <div className="mb-1 ml-auto">
        <ReferenceButton
          direction="fromRight"
          reference="These are augmentations. They can quickly increase your mining speed. You can buy them once you have enough coins."
        />
      </div>
      <div className={styles.section_with_border}></div>
    </div>
  );
};

export default AugmentationsTab;
