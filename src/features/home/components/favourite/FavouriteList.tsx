import { ChevronRight } from "lucide-react";
import FavouriteCard from "./FavouriteCard";
import FavouriteCardContainer from "./FavouriteCardContainer";
import { useGetNicknameList } from "@/queries/users.query";
import { useCallback } from "react";
import { usePrepare } from "@/queries/transfer.query";
import { Link } from "react-router-dom";

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
        w-full flex flex-col h-[350px]
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

      {/* Favourite Cards or Empty State */}
      <div className="flex flex-col w-full gap-2.5">
        {isLoading ? (
          <p className="text-sm text-gray-500">Loading...</p>
        ) : nicknameData.length > 0 ? (
          <>
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
            <Link to="/settings/nicknames">
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
            </Link>
          </>
        ) : (
          // Empty State
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <p className="text-gray-400 text-sm md:text-base">
              You don’t have any nicknames saved yet.
            </p>
            <Link to="/settings/nicknames">
              <p className="mt-2 text-blue-600 text-sm md:text-base hover:underline cursor-pointer">
                Add a nickname
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default FavouriteList;
