import { ChevronRight } from "lucide-react";
import FavouriteCard from "./FavouriteCard";
import FavouriteCardContainer from "./FavouriteCardContainer";
import { useGetNicknameList } from "@/queries/users.query";
import { useCallback } from "react";
import { usePrepare } from "@/queries/transfer.query";

function FavouriteList() {
  const { data: nicknames, isLoading } = useGetNicknameList();
  const { mutate: prepare } = usePrepare();

  const nicknameData = nicknames?.data.nicknameOptions ?? [];

  const handleTransfer = useCallback((accountNumber: string) => {
    prepare({ toAccountNumber: accountNumber });
  }, []);

  return (
    <div
      className="
        w-full flex flex-col
        bg-white
        rounded-2xl
        shadow-sm md:shadow-md
        p-4 md:p-5
        transition-all duration-300
      "
    >
      {/* Header */}
      <h1 className="text-sm md:text-base font-semibold text-black-pearl-700 mb-3">
        Nicknames
      </h1>

      {/* Favourite Cards */}
      <div className="flex flex-col w-full gap-2.5">
        {nicknameData.map((nickname, i) => (
          <FavouriteCard
            name={nickname.nickname}
            accountNumber={nickname.toAccountDetail.accountNumber}
            onTransfer={() =>
              handleTransfer(nickname.toAccountDetail.accountNumber)
            }
            key={i}
          />
        ))}

        {/* View More */}
        <FavouriteCardContainer
          className="
            bg-[#0A3D62]
            hover:bg-[#0A3D62]/90
            justify-center items-center gap-2.5
            rounded-xl
            transition-colors
            cursor-pointer
          "
        >
          <p className="text-sm font-medium text-white">View More</p>
          <ChevronRight size={14} className="text-white" />
        </FavouriteCardContainer>
      </div>
    </div>
  );
}

export default FavouriteList;
