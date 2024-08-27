"use client";

import { useQuery } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import { authHost } from "@/shared/api/authHost";

import { useTonWallet, TonConnectButton } from "@tonconnect/ui-react";
import { retrieveLaunchParams } from "@telegram-apps/sdk";

export const ConnectWalletPageUI = () => {
  const router = useRouter();

  const wallet = useTonWallet();
  const { initDataRaw } = retrieveLaunchParams();

  const address = wallet?.account?.address;
  const {
    data: authData,
    isFetching: authIsFetching,
    isError: authIsError,
  } = useQuery({
    queryKey: ["authQuery"],
    queryFn: async () => {
      // fix later -> HOST
      const res = authHost.post("auth/login", {
        init_data: initDataRaw,
      });
      return res;
    },
  });

  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <div className="flex h-[calc(100%-48px)] w-[calc(100%-48px)] items-center justify-center rounded-[20px] border-[1px] border-white p-2">
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-center text-lg uppercase text-white">
            Connect your wallet
          </h4>
          <TonConnectButton />
        </div>
      </div>
    </div>
  );
};
