import { Outlet } from "react-router";
import { UserRound, MessageSquare, Settings } from "lucide-react";

function MainLayout() {
  return (
    <div className="flex h-screen w-screen flex-row">
      <nav className="overflow-y-hiddenp flex min-w-15 flex-col items-center justify-between gap-5 border-r border-gray-500 bg-[#3B3B3B] p-1">
        <div className="flex w-full flex-col gap-2">
          <button className="flex aspect-square w-full items-center justify-center rounded-lg transition-all hover:cursor-pointer hover:bg-[#5d5d5d]">
            <MessageSquare className="text-white" />
          </button>
        </div>
        <div className="flex w-full flex-col gap-3">
          <button className="flex aspect-square w-full items-center justify-center rounded-lg hover:cursor-pointer hover:bg-[#5d5d5d]">
            <UserRound className="text-white" />
          </button>
          <button className="flex aspect-square w-full items-center justify-center rounded-lg hover:cursor-pointer hover:bg-[#5d5d5d]">
            <Settings className="text-white" />
          </button>
        </div>
      </nav>
      <main className="h-full w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
