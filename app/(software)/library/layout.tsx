"use client";

import { Tabs } from "@nextui-org/react";
import { ComingSoonScene } from "@/app/coming-soon-scene";

export const marketMenu = {
  giftcard: {
    title: "My Beats",
    path: "beatz",
    Page: ComingSoonScene,
  },
};

export default function MarketPage({ children }: { children: any }) {
  return (
    <div>
      <header className="py-5 md:pt-0 px-2">
        <h1 className="text-xl font-semibold md:text-2xl uppercase sm:capitalize">
          Library
        </h1>
      </header>

      <section className="pb-8 overflow-x-hidden">
        <Tabs
          variant="underlined"
          aria-label="Tabs variants"
          className="mb-4 px-2 md:px-0"
          classNames={{
            tabList:
              "gap-x-0 flex overflow-x-scroll scrollbar-show px-0 w-full",
            tab: "grow uppercase",
          }}
        />
        {children}
      </section>
    </div>
  );
}
