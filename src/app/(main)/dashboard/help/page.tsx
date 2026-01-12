"use client";

import { MessageCircleQuestion, Search } from "lucide-react";
import Link from "next/link";

import ChatBot from "@/components/help/chat-bot";
import HelpCard from "@/components/help/help-card";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Input } from "@/components/ui/input";
import { articles, helpCategories } from "@/lib/constants";

export default function Help() {
  return (
    <div className="relative h-full w-full">
      <MaxWidthWrapper className="flex flex-col items-start justify-start py-5">
        <div className="flex w-full items-center justify-center border-b pb-5">
          <div className="flex w-full items-center justify-center gap-2.5">
            <div className="bg-primary/20 text-primary size-14 rounded-full p-4">
              <MessageCircleQuestion className="size-full" />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <span className="w-full text-left text-[30px] leading-[30px] font-bold">
                How can we help you?
              </span>
              <span className="text-muted-foreground w-full text-left text-[12px] leading-[12px]">
                Find help here, or email us at&nbsp;
                <Link href="mailto:info@truemail.org" className="text-primary">
                  info@truemail.org
                </Link>
              </span>
            </div>
          </div>
          <div className="flex w-full items-center justify-end gap-2.5">
            <Input
              type="text"
              placeholder="Search Query..."
              className="ml-auto h-14 w-2/3 px-6"
            />
            <div className="bg-primary/20 text-primary size-14 rounded-full p-4">
              <Search className="size-full" />
            </div>
          </div>
        </div>
        <div className="mt-5 grid h-[calc(100vh-201px)] w-full grid-cols-3 items-start justify-start gap-5">
          <div className="col-span-2 grid h-full w-full grid-cols-2 items-start justify-start gap-5 overflow-y-auto">
            {articles.map((article) => (
              <HelpCard key={article.id} article={article} />
            ))}
          </div>
          <div className="relative col-span-1 flex h-full w-full flex-col items-start justify-start gap-2.5 overflow-y-auto border-l pl-5">
            <span className="bg-background sticky top-0 z-1 mb-2.5 w-full border-b pb-5 text-left text-[20px] leading-[20px] font-bold">
              Browse All Categories
            </span>
            {helpCategories.map((category) => (
              <div
                className="flex w-full cursor-pointer items-center justify-center gap-5 rounded-lg border p-2.5 transition-colors duration-200 ease-in-out hover:bg-black/5 dark:hover:bg-white/5"
                key={category.id}
              >
                <div className="bg-primary/20 text-primary size-10 rounded-full p-2">
                  <category.icon className="size-full" />
                </div>
                <div className="flex w-full flex-1 flex-col items-center justify-center">
                  <span className="w-full text-left text-lg font-semibold">
                    {category.name}
                  </span>
                  <span className="text-muted-foreground line-clamp-1 w-full text-left text-xs">
                    {category.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
      <ChatBot />
    </div>
  );
}
