import { redirect } from 'next/navigation';

import { CurrentKingdomDisplay, KingdomSwitcher } from '@/widgets';

import { KingdomType, KingdomTypeArray } from '@/shared/types';

import dynamic from 'next/dynamic';

// needs to be dynamic as it's stops working when statically renderred
const TabSwitcher = dynamic(() => import('@/widgets/tab-switcher/ui'));

const Game = async ({ params }: { params: { kingdom: KingdomType } }) => {
  if (!KingdomTypeArray.includes(params.kingdom)) {
    redirect('/');
  }

  return (
    <div className="relative w-full flex-grow overflow-clip">
      <CurrentKingdomDisplay
        kingdomType={params.kingdom}
        kingdomTier={4}
        coins={100}
        coinsLast24Hours={50}
      />

      <KingdomSwitcher />

      <TabSwitcher />
    </div>
  );
};

export default Game;
