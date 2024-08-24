import type { PropsWithChildren } from "react";

import { Header, Footer } from "@/widgets";

import { tickerbitMono } from "@/shared/utils/fonts";

import styles from "./styles/gameLayout.module.css";

export default function GameLayout({ children }: PropsWithChildren) {
  return (
    <div
      className={styles.game_layout}
      style={{
        fontFamily: tickerbitMono.style.fontFamily,
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
