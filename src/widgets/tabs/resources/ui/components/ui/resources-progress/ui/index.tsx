import { getResources } from '@/shared/api/endpoints/getResources';
import { PoolResourcesType } from '@/shared/entities/resources';

import { ResourceProgress } from '@/widgets';

export const ResourcesProgress = async () => {
  return (
    <div className="mt-2 flex flex-col gap-4">
      {/* {resources.map((resource, idx) => (
        <ResourceProgress
          key={`resource-progress-${idx}`}
          resource={resource.name}
          progress={resource.current / resource.total}
        />
      ))} */}
    </div>
  );
};
