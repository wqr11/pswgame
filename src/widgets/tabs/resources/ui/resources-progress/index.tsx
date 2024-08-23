import { ResourceProgress } from "../resource-progress";

export const ResourcesProgress = () => {
  return (
    <div className="mt-2 flex flex-col gap-4">
      <ResourceProgress resource="plant" progress={70} />
      <ResourceProgress resource="sun" progress={78} />
      <ResourceProgress resource="electro" progress={49} />
      <ResourceProgress resource="aqua" progress={62} />
    </div>
  );
};
