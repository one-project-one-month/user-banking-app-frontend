import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const HistoryItemCardSkeleton: React.FC = () => {
  return (
    <div
      className="py-3 border-b md:border-none
      md:hover:shadow-none bg-white md:rounded-xl md:px-5"
    >
      <div className="w-full flex justify-end mb-1">
        <Skeleton className="h-3 w-16" /> {/* Time */}
      </div>

      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <Skeleton className="h-4 w-40" /> {/* Transfer From */}
          <Skeleton className="h-3 w-52" /> {/* Wallet number */}
        </div>

        <div className="text-right space-y-2">
          <Skeleton className="h-4 w-16 ml-auto" /> {/* "Amount" label */}
          <Skeleton className="h-4 w-24 ml-auto" /> {/* Amount value */}
        </div>
      </div>
    </div>
  );
};

export default HistoryItemCardSkeleton;
