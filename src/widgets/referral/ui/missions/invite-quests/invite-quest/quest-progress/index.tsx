"use client";

import Image from "next/image";

import SuccessMark from "./assets/success-mark.svg";

import NotFinishedMark from "./assets/not-finished-mark.svg";

const QuestProgress = ({ progress = 0 }: { progress: number }) => {
  return (
    <div className="relative">
      <div className="relative z-20">
        <Image
          src="/pages/main/quests/progress-border.svg"
          width={262}
          height={29}
          style={{ objectFit: "fill", width: "100%", height: "29px" }}
          alt="progress-border"
          priority
        />
        <div className="absolute right-2 top-0 flex h-[27px] items-center">
          {progress >= 100 ? <SuccessMark /> : <NotFinishedMark />}
        </div>
      </div>
      <div className="absolute left-0 top-0 z-10">
        <Image
          src="/pages/main/quests/progress-fill.svg"
          width={262}
          height={27}
          style={{ objectFit: "fill", width: `${progress}%`, height: "27px" }}
          alt="progress-fill"
          priority
        />
      </div>
    </div>
  );
};

export default QuestProgress;
