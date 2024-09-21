'use client';

import { useState } from 'react';
import { useUnit } from 'effector-react';
import { updateUser } from '@/entities';

import LoginBorder from './assets/login-border.svg';

import { useTranslation } from 'react-i18next';

export const CreateUsernamePageUI = () => {
  const [username, setUsername] = useState<string>('');

  const setUserData = useUnit(updateUser);
  const handleClick = () => {
    setUserData(username);
  };

  const { t } = useTranslation('translation', { keyPrefix: 'createUsername' });

  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="border-[1px] border-white">
        <div className="flex flex-col gap-1 text-left">
          <label className="text-white uppercase text-sm">{t('usernameField')}</label>
          <input
            type="text"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
            className="border-[2px] border-white bg-transparent outline-none"
          ></input>
        </div>
        <button
          onClick={handleClick}
          className="relative flex justify-center items-center"
        >
          <LoginBorder />
          <h6 className="text-xl absolute top-0 left-0 size-full">{t('loginButton.text')}</h6>
        </button>
      </div>
    </div>
  );
};
