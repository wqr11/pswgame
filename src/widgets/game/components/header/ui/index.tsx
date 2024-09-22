'use client';

import { Link } from '@/components/Link/Link';

import Paperclip from './assets/paperclip.svg';
import Message from './assets/message.svg';

import { useUnit } from 'effector-react';
import { setTab, $tab } from '@/entities';

import { HomeButton } from './components';

import styles from './styles/header.module.css';
import { useRouter } from 'next/navigation';
import { RefLink } from './components/ref-link';

export const Header = () => {
  const tab = useUnit($tab);
  const router = useRouter();

  return (
    <header className="sticky left-0 top-0 z-50 mx-[27px] flex h-[100px] items-center justify-between">
      <RefLink />
      <HomeButton />
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
