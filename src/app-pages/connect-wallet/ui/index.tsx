"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import { useTonWallet, TonConnectButton } from "@tonconnect/ui-react";
import { useInitData } from "@telegram-apps/sdk-react";

export const ConnectWalletPageUI = () => {
  const router = useRouter();

  const wallet = useTonWallet();
  const initData = useInitData();
  const userId = initData?.user?.id;
  const address = wallet?.account?.address;

  return (
    <>
      {!address && (
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
      )}
    </>
  );
};
