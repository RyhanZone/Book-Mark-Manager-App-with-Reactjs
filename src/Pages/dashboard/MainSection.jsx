import ArchivedBookmarks from "./MainSections/ArchivedBookmarks";
import Header from "./MainSections/Header";
import Home from "./MainSections/Home";

export default function MainSection({ HomeActive, setMenuOpen, MenuOpen , darkMode, setDarkMode, IsFormActive, setIsFormActive }) {
  return (
    <div className="w-full h-full flex flex-col">
      <Header setMenuOpen={setMenuOpen} MenuOpen={MenuOpen} darkMode={darkMode} setDarkMode={setDarkMode} IsFormActive={IsFormActive} setIsFormActive={setIsFormActive} />
      <div className="flex-1 min-h-0">
        {HomeActive ? <Home /> : <ArchivedBookmarks />}
      </div>
    </div>
  );
}
