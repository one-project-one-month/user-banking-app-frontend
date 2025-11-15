import type { Nickname } from "@/types/User";
import NickNamesBar from "./NickNamesBar";
import NickNamesBarSkeleton from "./NickNamesBarSkeleton";
import { useCallback } from "react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { FileJson2 } from "lucide-react";

type NickNamesListProps = {
  isEdit?: boolean;
  handleEdit: (data: Nickname) => void;
  nicknames: Nickname[];
  isLoading?: boolean;
};

function NickNamesList({
  isEdit,
  handleEdit,
  nicknames,
  isLoading,
}: NickNamesListProps) {
  const handleEditClick = useCallback(
    (nic: Nickname) => handleEdit(nic),
    [handleEdit]
  );

  if (isLoading) {
    return (
      <div>
        {Array.from({ length: 3 }).map((_, i) => (
          <NickNamesBarSkeleton key={i} className="mb-2" />
        ))}
      </div>
    );
  }

  return (
    <div>
      {nicknames.length <= 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia>
              <FileJson2 />
            </EmptyMedia>
            <EmptyTitle>No Nicknames Yet</EmptyTitle>
            <EmptyDescription>
              You haven&apos;t created any nicknames yet. Get started by
              creating your first nickname.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        nicknames.map((nic) => (
          <NickNamesBar
            className="mb-2"
            key={nic.id}
            id={nic.id}
            isEdit={isEdit}
            name={nic.nickname}
            accountNumber={nic.toAccountDetail.accountNumber}
            handleEdit={() => handleEditClick(nic)}
          />
        ))
      )}
    </div>
  );
}

export default NickNamesList;
