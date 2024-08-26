"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import { useTonWallet, TonConnectButton } from "@tonconnect/ui-react";
import { retrieveLaunchParams } from "@telegram-apps/sdk";

import { HOST } from "@/shared/utils/host";

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
      console.log(initDataRaw);

      // fix later -> HOST
      const res = axios.post(
        `https://pswgame.vercel.app/api/v1/auth/login`,
        JSON.stringify({ initDataRaw }),
      );

      return res;
    },
  });

  // initData: `query_id=${initData?.queryId}&user={"id":${initData?.user?.id},"first_name":"${initData?.user?.firstName}","last_name":"${initData?.user?.lastName}","username":"${initData?.user?.username}","language_code":"${initData?.user?.languageCode}"}&auth_date=${initData?.authDate}&hash=${initData?.hash}`,

  console.log(authData);

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
