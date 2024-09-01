import Spinner from "@/shared/ui/icons/Spinner.svg";

import styles from "./styles/LoadingPageUI.module.css";

export const LoadingPageUI = () => (
  <div className="flex h-[100vh] w-[100vw] items-center justify-center">
    <div className="flex h-[calc(100%-48px)] w-[calc(100%-48px)] items-center justify-center rounded-[20px] border-[1px] border-white">
      <div className={styles.pulsating}>
        <h6 className="text-2xl uppercase text-white">Loading</h6>
        <div className={styles.spinner}>
          <Spinner />
        </div>
      </div>
    </div>
  </div>
);
