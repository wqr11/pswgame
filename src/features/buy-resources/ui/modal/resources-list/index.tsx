import { ResourceButton } from '../resource';

export const ResourcesList = () => {
  return (
    <div className="mx-auto mt-2 flex size-fit items-center justify-center gap-4 border-[3px] border-white p-2">
      <ResourceButton resource="crypto" />
      <ResourceButton resource="energy" />
      <ResourceButton resource="food" />
      <ResourceButton resource="heat" />
    </div>
  );
};
