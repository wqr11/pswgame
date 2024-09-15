import CopyButton from "./copy-button";

const CopySection = ({ copied }: { copied: string }) => {
  return (
    <div className="mb-6 mt-6 flex flex-col gap-1">
      <h6 className="text-lg uppercase tracking-widest text-white">{copied}</h6>
      <CopyButton />
    </div>
  );
};

export default CopySection;
