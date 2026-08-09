import { useState } from "react";
import LeftSidebar from "./leftSidebar"
import MainSection from "./MainSection";
export default function Dashboard() {
  let [IsHomeActive , setIsHomeActive] = useState(true);
  let [IsMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={`${IsMenuOpen ? "relative" : ""}bg-[var(--n-l-100)] dark:bg-[var(--n-d-900)] flex w-full min-h-screen`}>
        <LeftSidebar HomeActive={IsHomeActive} setIsHomeActive={setIsHomeActive} MenuOpen={IsMenuOpen} setMenuOpen={setIsMenuOpen}/>
        <MainSection HomeActive={IsHomeActive} MenuOpen={IsMenuOpen} setMenuOpen={setIsMenuOpen}/>
    </div>
  )
}
