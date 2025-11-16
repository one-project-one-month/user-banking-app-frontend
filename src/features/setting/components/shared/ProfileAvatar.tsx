import Spinner from "@/components/common/Spinner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useMediaUpload } from "@/queries/users.query";
import { Camera } from "lucide-react";
import { useRef } from "react";

function ProfileAvatar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutate: upload, isPending } = useMediaUpload();

  const handleChangeAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
      upload(formData);
    }

    event.target.value = "";
  };

  const onClickUpload = () => {
    inputRef.current?.click();
  };

  return (
    <Avatar className="w-24 h-24 relative rounded-full md:rounded-xl">
      <AvatarImage src="https://github.com/shadcn.png" alt="@avatar" />
      <AvatarFallback className="rounded-lg text-primary">CN</AvatarFallback>
      <div
        onClick={onClickUpload}
        className="absolute bottom-0 left-0 w-full h-full bg-black-pearl-600/30 rounded-lg flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <Camera className="text-white" />
        <input
          ref={inputRef}
          onChange={handleChangeAvatar}
          type="file"
          className="absolute pointer-events-none w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      {isPending && (
        <div className="w-full h-full flex bg-black opacity-50 justify-center items-center absolute top-0 left-0 z-50">
          <Spinner />
        </div>
      )}
    </Avatar>
  );
}

export default ProfileAvatar;
