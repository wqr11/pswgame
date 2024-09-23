'use client';

import { useUnit } from 'effector-react';
import { buyResourcesModelInputs, buyResourcesModelChosenResource } from '../../model';

import styles from './styles/sliderInput.module.css';

export const ResourceBuySlider = () => {
  const buyResourceAmount = useUnit(buyResourcesModelInputs.$buyResourceAmount);
  const setResourceBuyAmount = useUnit(buyResourcesModelInputs.setResourceBuyAmount);

  const chosenResourceData = useUnit(buyResourcesModelChosenResource.$chosenResourceData);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setResourceBuyAmount(parseInt(e.target.value));
  };

  return (
    <div className="mx-auto min-h-fit w-[calc(100%-72px)]">
      <input
        className={styles.slider}
        onInput={handleInput}
        type="range"
        min={0}
        max={chosenResourceData?.current ?? 100}
        disabled={!chosenResourceData}
        value={buyResourceAmount}
      ></input>
    </div>
  );
};
