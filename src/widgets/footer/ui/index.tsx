"use client";

import { Link } from "@/components/Link/Link";

import { useSearchParams } from "next/navigation";

import Resources from "@/assets/svg/game/resources.svg";
import Augmentations from "@/assets/svg/game/augmentations.svg";
import Leaderboard from "@/assets/svg/game/leaderboard.svg";
import Market from "@/assets/svg/game/market.svg";

import styles from "./styles/footer.module.css";

export const Footer = () => {
  const searchParams = useSearchParams();

  const currentTab: string | null = searchParams.get("tab");

  return (
    <footer
      className={`${styles.footer} fixed bottom-0 left-0 z-50 flex h-[100px] w-full items-center justify-between px-[12%]`}
    >
      <Link
        href="?tab=resources"
        className={currentTab === "resources" ? styles.link_active : ""}
      >
        <Resources />
      </Link>
      <Link
        href="?tab=augmentations"
        className={currentTab === "augmentations" ? styles.link_active : ""}
      >
        <Augmentations />
      </Link>
      <Link
        href="?tab=leaderboard"
        className={currentTab === "leaderboard" ? styles.link_active : ""}
      >
        <Leaderboard />
      </Link>
      <Link
        href="?tab=market"
        className={currentTab === "market" ? styles.link_active : ""}
      >
        <Market />
      </Link>
    </footer>
  );
};
