"use client";

import { Link } from "../Link/Link";

import GyberLogoGreen from "@/assets/svg/game/gyber-logo-green-w-border.svg";
import Paperclip from "@/assets/svg/game/paperclip.svg";
import Message from "@/assets/svg/game/message.svg";

import styles from "@/styles/game/header.module.css";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 mx-[27px] flex h-[100px] items-center justify-between">
      <Link href="/" className={styles.header_link}>
        <div className={`${styles.header_link} relative`}>
          <Paperclip />
          <div className="absolute left-[38px] top-[-8px] size-max">
            <div className="relative h-[24px] w-[24px]">
              <Message />
              <small className="absolute left-0 top-0 size-full text-center text-white">
                99 {/* Only values between 1 and 99 */}
              </small>
            </div>
          </div>
        </div>
      </Link>
      <Link
        href="/game?tab=none"
        className={`${styles.header_link} justify-center`}
      >
        <GyberLogoGreen />
      </Link>
      <Link href="/game/about" className={`${styles.header_link} justify-end`}>
        <h6 className="h-[50px] text-[14px] text-[#434343]">ABOUT US</h6>
      </Link>
    </header>
  );
};

export default Header;
