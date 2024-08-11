import Image from "next/image";

import Flame from "@/assets/svg/game/tabs/resources/flame.svg";

import formatNumber from "@/ui/formatNumber";

const ResourcePool = ({
  resourcePool,
  startResourcePool,
}: {
  resourcePool: number;
  startResourcePool: number;
}) => {
  return (
    <div className="mx-auto mt-8 flex flex-col gap-[12px]">
      <div className="relative">
        <div className="relative z-20">
          {/* any position for z-index to work */}

          <Image
            src="/game/tabs/resources/pool-progress-border.svg"
            width={282}
            height={32}
            style={{
              objectFit: "fill",
              width: "100%",
              height: "32px",
            }}
            alt="resource-pool"
          />
        </div>

        <div className="absolute left-0 top-0 w-full">
          <div
            className="relative"
            style={{ width: `${(resourcePool / startResourcePool) * 100}%` }}
          >
            <div className="relative z-10">
              <Image
                src="/game/tabs/resources/fills/pool-progress-fill.svg"
                width={200}
                height={32}
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "32px",
                }}
                alt="resource-pool-fill"
              />
            </div>
            <div className="absolute bottom-1 right-0 z-30 h-12 w-10">
              <Flame />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h6 className="text-lg tracking-widest">
          {formatNumber(resourcePool)}
        </h6>
        <p className="text-sm font-normal uppercase tracking-wide">
          resource pool
        </p>
      </div>
    </div>
  );
};

export default ResourcePool;
