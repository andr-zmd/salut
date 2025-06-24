import { Outlet } from "react-router";
import { MessageCircle, Settings } from "lucide-react"

function MainLayout() {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-row">
      <nav className="flex flex-col items-center py-3 gap-3 h-full w-10 border-r border-gray-500 bg-[#3B3B3B]">
        <button>
          <MessageCircle className="text-white" />
        </button>
        <button>
          <Settings className="text-white" />
        </button>
      </nav>
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
