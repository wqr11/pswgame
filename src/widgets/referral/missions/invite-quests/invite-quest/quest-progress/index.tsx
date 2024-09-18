'use client';

import Image from 'next/image';

import ProgressBorder from './assets/progress-border.svg?url';
import ProgressFill from './assets/progress-fill.svg?url';
import SuccessMark from './assets/success-mark.svg';
import NotFinishedMark from './assets/not-finished-mark.svg';

const QuestProgress = ({ progress = 0 }: { progress: number }) => {
  return (
    <div className="relative">
      <div className="relative z-20">
        <Image
          src={ProgressBorder}
          width={262}
          height={29}
          style={{ objectFit: 'fill', width: '100%', height: '29px' }}
          alt="progress-border"
          loading="eager"
        />
        <div className="absolute right-[3.1rem] top-0 flex h-[27px] items-center">
          {progress >= 100 ? <SuccessMark /> : <NotFinishedMark />}
        </div>
      </div>
      <div className="absolute left-0 top-0 z-10">
        <Image
          src={ProgressFill}
          width={262}
          height={27}
          style={{ objectFit: 'fill', width: `${progress}%`, height: '27px' }}
          alt="progress-fill"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default QuestProgress;
