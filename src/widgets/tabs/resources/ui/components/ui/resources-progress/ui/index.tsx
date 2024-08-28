import { PoolResourcesType, ResourceProp } from "@/shared/types";

import { ResourceProgress } from "@/widgets";

export const ResourcesProgress = (
  currentResources: PoolResourcesType["data"]["current_resources"],
  totalResources: PoolResourcesType["data"]["total_resources"],
) => {
  let resources = [];
  const names: ResourceProp[] = ["crypto", "heat", "food", "energy"];

  for (let i = 0; i < currentResources.length; i++) {
    resources.push({
      name: names[i],
      current: currentResources[i],
      total: totalResources[i],
    });
  }

  return (
    <div className="mt-2 flex flex-col gap-4">
      {/* <ResourceProgress resource="plant" progress={70} />
      <ResourceProgress resource="sun" progress={78} />
      <ResourceProgress resource="electro" progress={49} />
      <ResourceProgress resource="aqua" progress={62} /> */}
      {resources.map((resource, idx) => (
        <ResourceProgress
          key={`resource-progress-${idx}`}
          resource={resource.name}
          progress={resource.current / resource.total}
        />
      ))}
    </div>
  );
};
