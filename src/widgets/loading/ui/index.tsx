import Spinner from './assets/Spinner.svg';

import styles from './styles/LoadingPageUI.module.css';

export const LoadingFallback = () => (
  <div className="flex size-full items-center justify-center">
    <div
      className={`${styles.pulsating} flex size-[100px] items-center justify-center text-center`}
    >
      <h6 className="text-2xl uppercase text-white">Loading</h6>
      <div className={styles.spinner}>
        <Spinner />
      </div>
    </div>
  </div>
);
