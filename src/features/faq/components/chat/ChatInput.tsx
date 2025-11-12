import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useState } from "react";

function ChatInput({
  sendMessage,
  isLoading = false,
}: {
  sendMessage: (msg: string) => void;
  isLoading?: boolean;
}) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    const trimmed = input.trim();
    if (trimmed.length > 0) {
      sendMessage(trimmed);
      setInput("");
    }
  };

  return (
    <div className="p-5 flex space-x-5 justify-center items-center">
      <Input
        className="rounded-full px-5 h-12 py-6 shadow-md bg-white border border-primary text-base focus:ring-2 focus:ring-dodger-blue-50"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
          }
        }}
        placeholder="Enter texts"
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <Button onClick={handleSend} className="rounded-full h-12 w-12">
          <Send />
        </Button>
      )}
    </div>
  );
}

export default ChatInput;
