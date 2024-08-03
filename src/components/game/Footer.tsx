"use client";

import { usePathname } from "next/navigation";

import { Link } from "../Link/Link";

import Resources from "@/assets/svg/game/resources.svg";
import Augmentations from "@/assets/svg/game/augmentations.svg";
import Leaderboard from "@/assets/svg/game/leaderboard.svg";
import Market from "@/assets/svg/game/market.svg";

import styles from "@/styles/game/footer.module.css";

const Footer = () => {
  const currentPath = usePathname(); // use for checking for active link

  return (
    <footer className="fixed bottom-0 left-0 flex h-[100px] w-full items-center justify-between px-[12%]">
      <Link
        href="/game/resources"
        className={`${currentPath === "/game/resources" ? styles.link_active : ""}`}
        // probably temporary solution
      >
        <Resources />
      </Link>
      <Link
        href="/game/augmentations"
        className={`${currentPath === "/game/augmentations" ? styles.link_active : ""}`}
      >
        <Augmentations />
      </Link>
      <Link
        href="/game/leaderboard"
        className={`${currentPath === "/game/leaderboard" ? styles.link_active : ""}`}
      >
        <Leaderboard />
      </Link>
      <Link
        href="/game/market"
        className={`${currentPath === "/game/market" ? styles.link_active : ""}`}
      >
        <Market />
      </Link>
    </footer>
  );
};

export default Footer;
