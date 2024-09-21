import type { PropsWithChildren } from 'react';

export default function SetUsernameLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative text-white overflow-hidden w-screen h-screen">
      <div className="w-full px-[24px] py-[14px] h-full">{children}</div>
    </div>
  );
}
