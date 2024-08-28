import { authHost } from "@/shared/api/authHost";

import { PoolResourcesType } from "@/shared/types";

import {
  ReferenceButton,
  ResourcePool,
  UpdatePoolProgress,
  BuyResource,
  ResourcesProgress,
} from "@/widgets";

import styles from "@/shared/ui/styles/current-tab/currentTab.module.css";

export const ResourcesTab = async () => {
  const res: { data: PoolResourcesType } = await authHost.get(
    "kingdom/pool_resources/-1",
  );

  console.log(res.data);

  return (
    <div className={`${styles.tab_wrapper} flex flex-col gap-1`}>
      <div className="flex w-full justify-end">
        <ReferenceButton
          direction="fromRight"
          reference="This is the resource pool. It says how much resources are there for people to obtain."
        />
      </div>
      <div className={`${styles.section_with_border} relative overflow-y-auto`}>
        <ResourcePool
          sharedResources={res.data.data.shared_resources}
          sharedTotalResouces={res.data.data.shared_total_resources}
        />
        {/* <ResourcesProgress /> */}
        <div className="flex flex-col items-end gap-2">
          <UpdatePoolProgress startTime={9800} remainingTime={5378} />
          {/* <BuyResource /> */}
        </div>
      </div>
    </div>
  );
};
