"use client";

import { useTranslation } from "react-i18next";

// import { Languages } from "@/shared/utils/langTypes";

import { formatNumber } from "@/shared/utils/formatNumber";

export const ReferralInfo = ({ refPoints = 0 }: { refPoints: number }) => {
  return (
    <div className="flex flex-col items-center">
      <h6 className="text-lg uppercase text-white">{"title"}</h6>
      <h4 className="text-white">{formatNumber(refPoints)}</h4>
    </div>
  );
};
