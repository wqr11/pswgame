'use client';

import { useEffect } from 'react';

import {
  ReferenceButton,
  ResourcePool,
  UpdatePoolProgress,
  BuyResource,
  ResourcesProgress,
  LoadingFallback,
} from '@/widgets';

import { useUnit } from 'effector-react';
import { $resourcePool, getResourcePool } from '@/shared/entities/resources-pool';

import styles from '@/shared/ui/styles/current-tab/currentTab.module.css';
import { TabAnimated } from '@/widgets/tab-switcher/ui/TabAnimated';

export const ResourcesTab = () => {
  const resources = useUnit($resourcePool);

  useEffect(() => {
    if (!resources) {
      getResourcePool();
    }
  }, []);

  return (
    <TabAnimated className={`${styles.tab_wrapper} flex flex-col gap-1`}>
      <div className="flex w-full justify-end">
        <ReferenceButton
          direction="fromRight"
          reference="This is the resource pool. It says how much resources are there for people to obtain."
        />
      </div>
      <div className={`${styles.section_with_border} relative overflow-clip`}>
        {resources ? (
          <>
            <ResourcePool
              sharedResources={resources?.shared_resources}
              sharedTotalResouces={resources?.shared_total_resources}
            />
            <ResourcesProgress resources={resources?.entities} />
            <div className="flex flex-col items-end gap-2">
              <UpdatePoolProgress startTime={9800} remainingTime={5378} />
              {/* <BuyResource /> */}
            </div>
          </>
        ) : (
          <LoadingFallback />
        )}
      </div>
    </TabAnimated>
  );
};
