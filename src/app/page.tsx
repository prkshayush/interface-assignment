import Image from "next/image";
import SideBar from './components/side-comp/SideBar'
import NavBar from "./components/nav-bar/NavBar";
import Dashboard from "./components/dashboard/Dashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden">
      <div className="hidden md:flex lg:flex min-w-[230px] border-r border-gray-light" id="side-bar">
        <SideBar />
      </div>


      <div className="md:flex lg:flex flex-col flex-1" id="main-body">
        <NavBar />
        <div className="p-3">
          <Dashboard />
        </div>
      </div>
    </main>
  );
}
