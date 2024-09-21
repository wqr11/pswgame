'use client';

import { Link } from '@/components/Link/Link';

import Paperclip from './assets/paperclip.svg';
import Message from './assets/message.svg';

import { useUnit } from 'effector-react';
import { setTab, $tab } from '@/entities';

// import { HomeButton } from './components';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import styles from './styles/header.module.css';

export const Header = () => {
  const tab = useUnit($tab);
  const router = useRouter();

  const { t } = useTranslation('translation', {
    keyPrefix: 'game.header',
  });

  return (
    <header className="sticky left-0 top-0 z-50 mx-[27px] flex h-[100px] items-center justify-between">
      <button
        onClick={() => router.push('/referral')}
        className={`${styles.header_link} relative`}
      >
        <Paperclip />
        <div className="absolute left-[38px] top-[-8px] size-max">
          <div className="relative h-[24px] w-[24px]">
            <Message />
            <small className="absolute left-0 top-0 size-full text-center text-white">
              99 {/* Only values between 1 and 99 */}
            </small>
          </div>
        </div>
      </button>
      {/* <HomeButton /> */}
      <button
        onClick={() => {
          setTab(tab === 'about' ? 'none' : 'about');
        }}
        className={`${styles.header_link} justify-end`}
      >
        <h6 className="h-[45px] text-end text-[14px] text-[#434343]">{t('about')}</h6>
      </button>
    </header>
  );
};
