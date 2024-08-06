"use client";

import { useState } from "react";

import QuestionMark from "@/assets/svg/game/question.svg";
import ReferenceBorder from "@/assets/svg/game/reference-border.svg";

import styles from "@/styles/game/referenceWindow.module.css";

const ReferenceButton = ({
  reference,
  direction = "fromLeft",
}: {
  reference: string;
  direction: "fromLeft" | "fromRight";
}) => {
  const [referenceShown, setReferenceShown] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setReferenceShown(!referenceShown);
        }}
        className="flex items-center justify-center border-[3px] border-white p-1"
      >
        <QuestionMark />
      </button>
      {referenceShown && (
        <div
          className={`${styles.reference_window} ${styles[direction]} absolute top-8 z-50`}
        >
          <div className="relative">
            <ReferenceBorder />
            <p className="absolute left-0 top-0 size-full text-balance break-words p-6">
              {reference}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferenceButton;
