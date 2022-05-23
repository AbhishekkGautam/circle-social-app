import React from "react";
import {
  BottomNavigation,
  ExploreFeed,
  Sidebar,
  Widgets,
} from "../../components";

export const Explore = () => {
  return (
    <main className="min-h-screen bg-background flex max-w-[1500px] mx-auto">
      <Sidebar />
      <ExploreFeed headerTitle="Explore" />
      <Widgets />
      <BottomNavigation />
    </main>
  );
};
