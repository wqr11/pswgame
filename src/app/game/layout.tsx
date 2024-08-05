import Header from "@/components/game/Header";
import Footer from "@/components/game/Footer";

import { tickerbitMono } from "@/ui/fonts";

import styles from "@/styles/game/gameLayout.module.css";

const GameLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${styles.game_layout} ${tickerbitMono.className}`}>
      <Header />
      <main className="flex">{children}</main>
      <Footer />
    </div>
  );
};

export default GameLayout;
