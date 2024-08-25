"use client";

import { Section, Cell, Image, List } from "@telegram-apps/telegram-ui";

import { Link } from "@/components/Link/Link";

export default function Home() {
  return (
    <List>
      <Section
        header="Features"
        footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
      >
        <Link href="/ton-connect">
          <Cell subtitle="Connect your TON wallet">TON Connect</Cell>
        </Link>
      </Section>
      <Section
        header="Application Launch Data"
        footer="These pages help developer to learn more about current launch information"
      >
        <Link href="/init-data">
          <Cell subtitle="User data, chat information, technical data">
            Init Data
          </Cell>
        </Link>
        <Link href="/launch-params">
          <Cell subtitle="Platform identifier, Mini Apps version, etc.">
            Launch Parameters
          </Cell>
        </Link>
        <Link href="/theme-params">
          <Cell subtitle="Telegram application palette information">
            Theme Parameters
          </Cell>
        </Link>
      </Section>
      <Section header="Powerswap">
        <Link href="/plant">
          <Cell subtitle="Game link">Game</Cell>
        </Link>
      </Section>
    </List>
  );
}
