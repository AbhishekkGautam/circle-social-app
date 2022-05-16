import React from "react";
import { BottomNavigation, Feed, Sidebar, Widgets } from "../../components";

export const Home = () => {
  return (
    <main className="min-h-screen bg-[#151F2B] flex max-w-[1500px] mx-auto">
      <Sidebar />
      <Feed />
      <Widgets />
      <BottomNavigation />
    </main>
  );
};
