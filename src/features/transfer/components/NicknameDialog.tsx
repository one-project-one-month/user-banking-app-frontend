import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import NickNamesForm from "@/features/setting/components/nickname/NickNamesForm";
import { Plus } from "lucide-react";

type NicknameDialogProps = {
  id: number;
  nickname: string;
};

const NicknameDialog = ({ id, nickname }: NicknameDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col items-center justify-center space-y-3">
          <Button className="bg-white rounded-full  w-18 h-18 flex items-center justify-center shadow-lg border border-gray-200 hover:bg-gray-100 p-0 m-0">
            <Plus className="text-yellow-600 w-32 h-32 flex-shrink-0" />
          </Button>
          <p className="text-gray-600 text-base font-semibold mt-2">
            Set Up Nickname
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <NickNamesForm
          isRecipt
          formData={{ id: id, nickname: nickname ?? "" } as any}
        />
      </DialogContent>
    </Dialog>
  );
};

export default NicknameDialog;
