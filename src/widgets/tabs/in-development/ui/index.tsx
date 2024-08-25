import styles from "@/shared/ui/styles/current-tab/currentTab.module.css";

export const InDevelopmentTab = () => (
  <div className={styles.tab_wrapper}>
    <div className={styles.section_with_border}>
      <div className="mx-auto mt-8 flex flex-col items-center text-center">
        <h6 className="text-yellow-400">In Development</h6>
        <p className="break-words">Currently In Development.</p>
      </div>
    </div>
  </div>
);
