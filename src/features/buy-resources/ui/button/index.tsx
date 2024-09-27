'use client';

import BuyButtonBg from './assets/buy-button-bg.svg';

import { useUnit } from 'effector-react';
import { buyResourcesModelInputs } from '../../model';
import { useTranslation } from 'react-i18next';

export const ToggleResourceMenuButton = () => {
  const toggleModal = useUnit(buyResourcesModelInputs.toggleModal);

  const { t } = useTranslation('translation', { keyPrefix: 'game.tabs.resources' });

  return (
    <button
      className="relative z-50 flex items-center justify-center active:opacity-40"
      onClick={toggleModal}
    >
      <div className="relative size-fit">
        <div className="absolute left-0 top-0">
          <BuyButtonBg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          />
        </div>
        <h6 className="flex size-full items-center justify-center text-sm uppercase text-white">
          {t('buyResource.text')}
        </h6>
      </div>
    </button>
  );
};
