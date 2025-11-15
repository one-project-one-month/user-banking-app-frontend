import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useGetFromAccounts, useSwitchAccount } from "@/queries/users.query";
import { Check, Wallet } from "lucide-react";
import { useState } from "react";

type Props = {
  accountNumber?: string;
  className?: string;
};

function ProfileAccountSwitchBox({ className, accountNumber }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { data: accounts, isLoading } = useGetFromAccounts({
    enabled: !!open,
  });
  const { mutateAsync: switchAccount, isPending } = useSwitchAccount();

  const options = accounts?.data.fromAccountsOptions || [];

  const handleSelect = async (idStr: string) => {
    const id = Number(idStr);
    setOpen(false);
    await switchAccount(id);
    const newValue = id === selectedId ? null : id;
    setSelectedId(newValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          disabled={isPending}
          className={cn("p-2", className)}
          aria-expanded={open}
        >
          {isPending ? <Spinner /> : <Wallet className="w-5 h-5" />}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[220px] mr-2 p-0">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandList>
            <CommandEmpty>
              {isLoading ? (
                <span className="flex justify-center items-center gap-2">
                  loading.. <Spinner />
                </span>
              ) : (
                "no accounts"
              )}
            </CommandEmpty>
            <CommandGroup>
              {options.map((opt) => (
                <CommandItem
                  key={opt.id}
                  value={String(opt.id)}
                  onSelect={handleSelect}
                  disabled={opt.accountNumber === accountNumber}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{opt.accountNumber}</span>
                    <span className="text-xs opacity-70">
                      Balance: {opt.balance.toLocaleString()} Ks
                    </span>
                  </div>

                  <Check
                    className={cn(
                      "ml-auto",
                      accountNumber === opt.accountNumber
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default ProfileAccountSwitchBox;
