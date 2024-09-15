'use client';

// import { useTranslation, Trans } from 'react-i18next';
import { mainFont, fallbackFont } from '@/fonts';

import styles from '../styles/AboutUs.module.css';

import Queen from './assets/mystical-queen-card.svg';

import { GoBackButton } from './goback-button/ui';
import { SocialLinks } from './social-links/ui';
import { TextSection } from './text/ui';
import { ReferralTabAnimated } from '@/widgets';

export const ReferralAboutTab = () => {
  // const { t } = useTranslation('translation', {
  //   keyPrefix: 'pages.aboutUs.sections',
  // });

  return (
    <ReferralTabAnimated className={`${styles.tab_wrapper} flex flex-col items-center`}>
      <div className="my-3 flex w-full justify-center">
        <Queen />
      </div>
      <div className="flex w-[95%] flex-grow flex-col gap-10 overflow-y-auto overflow-x-clip text-center text-sm uppercase text-white">
        <div
          className="flex flex-col gap-10"
          style={{
            fontFamily: `${fallbackFont.style.fontFamily}, ${mainFont.style.fontFamily}`,
          }}
        >
          <h6 className="mx-auto w-[95%] max-w-[800px] text-sm font-medium">
            {/* <Trans i18nKey="pages.aboutUs.sections.mainTitle.text"> */}
            <span className="text-[#FC6AFF]"></span>
            {/* </Trans> */}
          </h6>
          <TextSection
            title={'articles.0.title'}
            text={'articles.0.text'}
          />
          <TextSection
            title={'articles.1.title'}
            text={'articles.1.text'}
          />
        </div>
        <div>
          <h6 className="text-xl uppercase tracking-widest">{'socials.mainTitle'}</h6>
          <div className="mt-4">
            <SocialLinks />
          </div>
          <div className="flex h-16 w-[calc(100%-40px)] items-center justify-end">
            <GoBackButton />
          </div>
        </div>
      </div>
    </ReferralTabAnimated>
  );
};
