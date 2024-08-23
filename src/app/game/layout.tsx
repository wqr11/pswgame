import { Header, Footer } from "@/widgets";

import { tickerbitMono } from "@/shared/utils/fonts";

import styles from "@/styles/game/gameLayout.module.css";

const GameLayout = ({ children }: { children: React.ReactNode }) => {
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
};

export default GameLayout;
