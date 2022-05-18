import React from "react";
import { BottomNavigation, Feed, Sidebar, Widgets } from "../../components";

export const Explore = () => {
  return (
    <main className="min-h-screen bg-[#151F2B] flex max-w-[1500px] mx-auto">
      <Sidebar />
      <Feed headerTitle="Explore" />
      <Widgets />
      <BottomNavigation />
    </main>
  );
};
