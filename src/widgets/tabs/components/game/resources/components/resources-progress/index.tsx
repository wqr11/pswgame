'use client';

import { PoolResourcesDataType } from '@/entities';

import { ResourceProgress } from '../resource-progress';

export const ResourcesProgress = ({
  resources,
}: {
  resources: PoolResourcesDataType['data']['entities'];
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
