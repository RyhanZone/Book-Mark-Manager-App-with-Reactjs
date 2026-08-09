import ArchivedBookmarks from "./MainSections/ArchivedBookmarks";
import Header from "./MainSections/Header";
import Home from "./MainSections/Home";

export default function MainSection({HomeActive, setMenuOpen, MenuOpen}) {
  return (
    <div className="w-full">
      <Header setMenuOpen={setMenuOpen} MenuOpen={MenuOpen}/>
      {HomeActive ? <Home /> : <ArchivedBookmarks />}
    </div>
  )
}
