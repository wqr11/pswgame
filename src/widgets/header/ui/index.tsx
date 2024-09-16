'use client';

import { Link } from '@/components/Link/Link';

import Queen from './assets/queen.svg';
import Paperclip from './assets/paperclip.svg';
import Message from './assets/message.svg';

import { setTab } from '@/entities';

import styles from './styles/header.module.css';

export const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 mx-[27px] flex h-[100px] items-center justify-between">
      <Link
        href={`${process.env.NEXT_PUBLIC_REFERRAL_GAME_LINK}`}
        className={styles.header_link}
      >
        <div className={`${styles.header_link} relative`}>
          <Paperclip />
          <div className="absolute left-[38px] top-[-8px] size-max">
            <div className="relative h-[24px] w-[24px]">
              <Message />
              <small className="absolute left-0 top-0 size-full text-center text-white">
                99 {/* Only values between 1 and 99 */}
              </small>
            </div>
          </div>
        </div>
      </Link>
      <button
        onClick={() => {
          setTab('none');
        }}
        className={`${styles.header_link} justify-center`}
      >
        <div className="size-[72px]">
          <Queen />
        </div>
      </button>
      <button
        onClick={() => {
          setTab('about');
        }}
        className={`${styles.header_link} justify-end`}
      >
        <h6 className="h-[45px] text-end text-[14px] text-[#434343]">ABOUT US</h6>
      </button>
    </header>
  );
};
