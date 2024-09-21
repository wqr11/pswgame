import type { PropsWithChildren } from 'react';

export default function SetUsernameLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative text-white overflow-hidden w-screen h-screen">
      <div className="w-full p-[24px] h-full">{children}</div>
    </div>
  );
}
