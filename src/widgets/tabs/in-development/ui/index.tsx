import Power from '@/shared/ui/icons/kingdoms/power.svg';

import styles from '@/shared/ui/styles/referall-tab/referral.module.css';

import glitchStyles from '@/shared/ui/styles/glitch/glitch.module.css';

import { TabAnimated } from '@/widgets/tab-switcher/game-switcher/TabAnimated';

export const InDevelopmentTab = () => {
  return (
    <TabAnimated
      className={`${styles.tab_wrapper} *:flex h-[100%] w-[100%] items-center justify-center text-center text-white`}
    >
      <div className="w-[80%] max-w-[540px] uppercase">
        <h3 className="my-4 text-xl text-yellow-300">{'title'}</h3>
        <p>
          {/* <Trans i18nKey="notAvailable.text">
          <button
            className="uppercase text-blue-400"
            onClick={handleClick}
          ></button>
        </Trans> */}
        </p>
      </div>
    </TabAnimated>
  );
};
