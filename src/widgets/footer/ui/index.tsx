'use client';
import Resources from './assets/resources.svg';
import Augmentations from './assets/augmentations.svg';
import Leaderboard from './assets/leaderboard.svg';
import Market from './assets/market.svg';

import { useUnit } from 'effector-react';
import { $tab } from '@/shared/model';
import { setTab } from '@/shared/model';

import styles from './styles/footer.module.css';

export const Footer = () => {
  const tab = useUnit($tab);

  return (
    <footer
      className={`${styles.footer} fixed bottom-0 left-0 z-50 flex h-[100px] w-full items-center justify-between px-[12%]`}
    >
      <button
        onClick={() => {
          setTab(tab !== 'resources' ? 'resources' : 'none');
        }}
        className={tab === 'resources' ? styles.link_active : ''}
      >
        <Resources />
      </button>
      <button
        onClick={() => {
          setTab(tab !== 'augmentations' ? 'augmentations' : 'none');
        }}
        className={tab === 'augmentations' ? styles.link_active : ''}
      >
        <Augmentations />
      </button>
      <button
        onClick={() => {
          setTab(tab !== 'leaderboard' ? 'leaderboard' : 'none');
        }}
        className={tab === 'leaderboard' ? styles.link_active : ''}
      >
        <Leaderboard />
      </button>
      <button
        onClick={() => {
          setTab(tab !== 'market' ? 'market' : 'none');
        }}
        className={tab === 'market' ? styles.link_active : ''}
      >
        <Market />
      </button>
    </footer>
  );
};
