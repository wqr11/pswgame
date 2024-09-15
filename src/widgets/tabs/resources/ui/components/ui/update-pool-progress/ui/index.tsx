'use client';

// @ts-ignore
import ProgressBar from 'react-customizable-progressbar';

export const UpdatePoolProgress = ({
  startTime = 7200,
  remainingTime = 6200,
}: {
  startTime: number;
  remainingTime: number;
}) => {
  return (
    <div>
      <h6 className="flex w-full justify-start text-[13px] uppercase">Update pool</h6>
      <div className="flex items-center border-[3px] border-white py-1 pl-4">
        <p className="flex gap-1">
          {Math.floor(remainingTime / 3600) < 10
            ? `0${Math.floor(remainingTime / 3600)}`
            : Math.floor(remainingTime / 3600)}
          :
          {Math.floor((remainingTime % 3600) / 60) < 10
            ? `0${Math.floor((remainingTime % 3600) / 60)}`
            : Math.floor((remainingTime % 3600) / 60)}
          :
          {(remainingTime % 3600) % 60 < 10
            ? `0${(remainingTime % 3600) % 60}`
            : (remainingTime % 3600) % 60}
        </p>
        <ProgressBar
          className="flex h-[18px] items-center"
          radius={8}
          progress={(remainingTime / startTime) * 100}
          steps={100}
          strokeWidth={2}
          strokeColor="white"
          strokeLinecap="square"
          trackStrokeWidth={0}
          trackStrokeColor="white"
          trackStrokeLinecap="none"
        />
      </div>
    </div>
  );
};
