'use client';

import { Link } from '@/components/Link/Link';

import Paperclip from './assets/paperclip.svg';
import Message from './assets/message.svg';

import { useUnit } from 'effector-react';
import { setTab, $tab, sRedirect } from '@/entities';

// import { HomeButton } from './components';

import styles from './styles/header.module.css';

export const Header = () => {
  const tab = useUnit($tab);
  const redirect = useUnit(sRedirect);

  return (
    <header className="sticky left-0 top-0 z-50 mx-[27px] flex h-[100px] items-center justify-between">
      <button
        onClick={() => redirect('referral')}
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
        <h6 className="h-[45px] text-end text-[14px] text-[#434343]">ABOUT US</h6>
      </button>
    </header>
  );
};

export * from './components';
