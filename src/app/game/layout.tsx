import type { PropsWithChildren } from "react";

import { Header, Footer } from "@/widgets";

import { tickerbitMono } from "@/shared/ui/fonts";

import styles from "./styles/gameLayout.module.css";

export default function GameLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.game_layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
