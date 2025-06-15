import { useState } from "react";

import { BotMessageSquare, CircleX, Send } from "lucide-react";

import { exampleChat } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className="bg-primary fixed right-10 bottom-10 z-[1] flex size-14 cursor-pointer items-center justify-center rounded-full p-4"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close video bot" : "Open video bot"}
      >
        <BotMessageSquare
          className={cn(
            "size-full text-white transition-all duration-500 ease-in-out",
            {
              "rotate-[360deg]": isOpen,
            }
          )}
        />
      </div>
      <div
        className={cn(
          "bg-background absolute right-10 bottom-28 flex h-[420px] w-72 flex-col items-start justify-start rounded-lg border shadow transition-opacity duration-500 ease-in-out",
          {
            "pointer-events-auto opacity-100": isOpen,
            "pointer-events-none opacity-0": !isOpen,
          }
        )}
      >
        <div className="bg-primary flex w-full items-center justify-center rounded-t-lg p-3.5 text-white">
          <div className="flex flex-1 flex-col items-center justify-center gap-1.5">
            <span className="w-full text-left text-[18px] leading-[18px] font-semibold">
              Chat Assistant
            </span>
            <span className="w-full text-left text-[12px] leading-[12px] text-white/75">
              Got burning questions, chat with us.
            </span>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleToggle}
          >
            <CircleX />
          </Button>
        </div>
        <div className="flex h-[calc(100%-129px)] w-full flex-col items-start justify-start gap-2.5 overflow-y-auto p-3.5">
          {exampleChat.map((message) => (
            <span
              className={cn("w-2/3 rounded-md px-3 py-1 text-xs break-words", {
                "bg-primary/20 text-primary ml-auto": message.type === "human",
                "bg-secondary mr-auto": message.type === "bot",
              })}
            >
              {message.content}
            </span>
          ))}
        </div>
        <div className="flex w-full items-center justify-center gap-2.5 rounded-b-lg border-t p-3.5">
          <Input type="text" placeholder="Ask your question..." />
          <Button type="button" variant="default" size="icon">
            <Send />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
