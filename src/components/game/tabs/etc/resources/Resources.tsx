import ResourceProgress from "./ResourceProgress";

const Resources = () => {
  return (
    <div className="mt-2 flex flex-col gap-4">
      <ResourceProgress resource="plant" progress={100} />
      <ResourceProgress resource="sun" progress={50} />
      <ResourceProgress resource="electro" progress={50} />
      <ResourceProgress resource="aqua" progress={95} />
    </div>
  );
};

export default Resources;
