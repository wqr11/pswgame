'use client';

import { PoolResourcesType } from '@/entities/resources-pool';

import { ResourceProgress } from '@/widgets';

export const ResourcesProgress = ({
  resources,
}: {
  resources: PoolResourcesType['data']['entities'];
}) => {
  return (
    <div className="mt-2 flex flex-col gap-4">
      {resources.map((resource, idx) => (
        <ResourceProgress
          key={`resource-progress-${idx}`}
          resource={resource.name}
          progress={(resource.current / resource.total) * 100}
        />
      ))}
    </div>
  );
};
