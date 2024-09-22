'use client';

export const ResourceButton = ({
  icon,
  size = 26,
}: {
  icon: React.FC<React.SVGProps<SVGElement>>;
  size?: number;
}) => {
  const Icon = icon;
  return (
    <button style={{ width: `${size}px`, height: `${size}px` }}>
      <Icon />
    </button>
  );
};
