"use client";

import Image from "next/image";

import { Link } from "../Link/Link";

import gyberLogoGreen from "@/assets/svg/game/gyber-logo-green.svg";
import paperclip from "@/assets/svg/game/paperclip.svg";
import message from "@/assets/svg/game/message.svg";

import styles from "@/styles/game/header.module.css";

const Header = () => {
  return (
    <header className="mx-[27px] flex justify-between pt-[30px]">
      <Link href="/" className={styles.header_link}>
        <div className={`${styles.header_link} relative`}>
          <Image src={paperclip} alt="Paperclip" />
          <div className="absolute left-[38px] top-[-8px] size-max">
            <div className="relative h-[24px] w-[24px]">
              <Image
                className="h-[24px] w-[24px]"
                src={message}
                width={24}
                height={24}
                alt="Message"
              />
              <small className="absolute left-0 top-0 size-full text-center text-white">
                99 {/* Only values between 1 and 99 */}
              </small>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/game" className={`${styles.header_link} justify-center`}>
        <div className="size-fit border-[2px] border-white px-[12px] py-[10px]">
          <Image
            className="h-[32px] w-[26px]"
            src={gyberLogoGreen}
            width={26}
            height={32}
            alt="Gyber Logo Green"
          />
        </div>
      </Link>
      <Link href="/game/about" className={`${styles.header_link} justify-end`}>
        <h6 className="size-fit text-[14px] text-[#434343]">ABOUT US</h6>
      </Link>
    </header>
  );
};

export default Header;
