'use client';

import { useState } from 'react';
import { useUnit } from 'effector-react';
import { updateUser } from '@/entities';

import GyberLogoGreen from './assets/gyber-logo-green.svg';
import LoginBorder from './assets/login-border.svg';

import { useTranslation } from 'react-i18next';

export const CreateUsernamePageUI = () => {
  const [username, setUsername] = useState<string>('');

  const setUserData = useUnit(updateUser);
  const handleClick = () => {
    console.log(username);
    setUserData(username);
  };

  const { t } = useTranslation('translation', { keyPrefix: 'createUsername' });

  return (
    <form
      onSubmit={handleClick}
      className="border-[1px] border-white flex flex-col items-center justify-evenly p-[32px] size-full"
    >
      <GyberLogoGreen />
      <div className="flex flex-col gap-[2px] text-left mx-[24px]">
        <label className="text-white uppercase text-sm">{t('usernameField')}</label>
        <input
          type="text"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            setUsername(e.target.value);
          }}
          className="border-[2px] border-white bg-transparent outline-none px-2 py-1"
        ></input>
      </div>
      <button
        type="submit"
        className="relative flex justify-center items-center text-white"
      >
        <LoginBorder />
        <h6 className="text-xl absolute top-0 left-0 size-full flex justify-center items-center uppercase">
          {t('loginButton.text')}
        </h6>
      </button>
    </form>
  );
};
