import { ScrollArea } from "@/components/ui/scroll-area";
import { scrollToBottom } from "@/lib/helper/common";
import { ISODateFormat, ISOTimeFormat } from "@/lib/helper/dateFormat";
import { Bot } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logoImg from "@/assets/images/app_logo.svg";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";
import ChatNav from "./ChatNav";
import { useAskQuestion } from "@/queries/faq.query";
// import { useGenerate } from "../../hooks/donor-chat-bot-queries";

function DateDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center my-4">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 text-gray-500 text-sm">{label}</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
}

type ChatBotMessage = {
  type: "bot" | "user";
  message: string;
  time: Date;
};

function ChatWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatBotMessage[]>([]);
  const scrollContentRef = useRef(null);

  const { mutate: ask, isPending, isError } = useAskQuestion();

  const sendMessage = (msg: string) => {
    const payLoad = {
      type: "user",
      message: msg,
      time: new Date(),
    };

    setMessages((prev: any) => {
      const newMsg = [...prev, payLoad];

      return newMsg;
    });

    ask(
      { question: msg },
      {
        onSuccess: (data) => {
          const payload = {
            type: "ai",
            message: data?.data.answer ?? "",
            time: new Date(),
          };
          setMessages((prev: any) => {
            const newMsg = [...prev, payload];

            return newMsg;
          });
        },
      }
    );
  };

  useEffect(() => {
    scrollToBottom(scrollContentRef.current, true);
  }, [messages]);

  return (
    <div className="fixed md:bottom-6  bottom-20 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:w-[30vw] w-[80vw]  bg-white shadow-xl rounded-lg border overflow-hidden flex flex-col"
          >
            <ChatNav data={{ name: "FAQ", logo: logoImg }} />
            <ScrollArea className="h-[20rem]">
              <div
                ref={scrollContentRef}
                className="px-4 py-5 flex flex-col justify-end"
              >
                {messages.length > 0 && (
                  <DateDivider label={ISODateFormat(new Date())} />
                )}
                <div className="flex flex-col w-full">
                  <ChatBox
                    text="👋 Hello! I’m your Banking Assistant. How can I help you today?"
                    time={ISOTimeFormat(new Date())}
                  />
                  {messages.map((msg, i) =>
                    msg.type === "user" ? (
                      <ChatBox
                        key={i}
                        text={msg.message}
                        time={ISOTimeFormat(new Date())}
                        isSender
                      />
                    ) : (
                      <ChatBox
                        key={i}
                        text={msg.message}
                        time={ISOTimeFormat(new Date())}
                      />
                    )
                  )}
                </div>
                {isPending && (
                  <motion.div
                    className="flex items-center gap-2 text-sm text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-4 h-4 rounded-full border-2 border-t-2 border-gray-400 border-t-transparent animate-spin"
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 1,
                      }}
                    />
                    <motion.span
                      initial={{ x: -5, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      Hold on, bro...
                    </motion.span>
                  </motion.div>
                )}
                {isError && <div className="text-red-500">Error occur</div>}
              </div>
            </ScrollArea>
            <ChatInput sendMessage={sendMessage} isLoading={isPending} />
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          key="chat-button"
          onClick={() => setIsOpen(true)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="bg-primary fixed md:bottom-6 bottom-24 md:animate-none animate-bounce right-6 text-white w-14 h-14 rounded-full shadow-md flex items-center justify-center"
        >
          <Bot />
        </motion.button>
      )}

      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-sm text-neutral-500 hover:text-red-400"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default ChatWindow;
