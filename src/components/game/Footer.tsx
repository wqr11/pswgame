"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { Link } from "../Link/Link";

import resources from "@/assets/svg/game/resources.svg";
import augmentations from "@/assets/svg/game/augmentations.svg";
import leaderboard from "@/assets/svg/game/leaderboard.svg";
import market from "@/assets/svg/game/market.svg";

import styles from "@/styles/game/footer.module.css";

const Footer = () => {
  const currentPath = usePathname(); // use for checking for active link

  return (
    <footer className="fixed bottom-0 left-0 flex h-[100px] w-full items-center justify-between px-[12%]">
      <Link href="/game/resources">
        <Image src={resources} alt="Resources" />
      </Link>
      <Link href="/game/augmentations">
        <Image src={augmentations} alt="Augmentations" />
      </Link>
      <Link href="/game/leaderboard">
        <Image src={leaderboard} alt="Leaderboard" />
      </Link>
      <Link href="/game/market">
        <Image src={market} alt="Market" />
      </Link>
    </footer>
  );
};

export default Footer;
